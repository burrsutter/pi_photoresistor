var Gpio = require('onoff').Gpio;

var photoOut = new Gpio (24,'out', 'both');
var iv;

iv = setInterval(function() {
  console.log("start loop: " + Date.now());
  
  reading = 0;
  photoOut.writeSync(0);
  setTimeout(function() {
   console.log("waited: " + Date.now());
   // while(photoIn.readSync() == 0) {
      reading = reading + 1;
   //  }   	
  }, .1);
  console.log(reading);
  console.log("end loop:" + Date.now());
}, 250);
