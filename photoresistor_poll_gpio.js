var gpio = require('gpio');
var gpioPhoto = gpio.export(24); 
var iv;

gpioPhoto.on("change", function(val) {
  console.log("change: " + val);
});

iv = setInterval(function() {
  console.log("Interval");
  gpioPhoto.setDirection("out");
  gpioPhoto.set(0, function() {
    console.log("after set 0" + gpioPhoto.value + " type: " + typeof(gpioPhoto.value));
    reading = 0;
    gpioPhoto.setDirection("in");
    while(gpioPhoto.value == 0) {
      reading = reading + 1;
    }
    console.log("reading: " + reading);
  });
}, 500);


setTimeout(function () {
  console.log("Done polling, shutting down");
  clearInterval(iv);
  gpioPhoto.removeAllListeners('change');
  gpioPhoto.unexport();
  gpioPhoto.reset();
}, 5000);

