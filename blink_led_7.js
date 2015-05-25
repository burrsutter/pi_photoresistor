"use strict";

// https://raw.githubusercontent.com/burrsutter/rpi_HC-SR501/master/images/Pi2Header.png
// GPIO7 is physical pin 26, positive lead of LED
// physical pin 25 for ground
// images/Raspberry_Pi2_LED_Direct_bb.png

var Gpio = require('onoff').Gpio; // Constructor function for Gpio objects.
var led = new Gpio(7, 'out');
var iv;

// Toggle the state of the LED on GPIO #7 every 200ms.
// Here synchronous methods are used. Asynchronous methods are also available.
iv = setInterval(function () {
  led.writeSync(led.readSync() ^ 1); // 1 = on, 0 = off :)
}, 200);

// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function () {
  clearInterval(iv); // Stop blinking
  led.writeSync(0);  // Turn LED off.
  led.unexport();    // Unexport GPIO and free resources
}, 5000);
