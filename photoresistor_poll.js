var Gpio = require('onoff').Gpio;

var photoOut = new Gpio (24,'out', 'both');
var iv;

iv = setInterval(function() {
  console.log("start: " + Date.now());
  
  photoOut.writeSync(0);
  setTimeout(function() {
   reading = 0;
   console.log(" wait: " + Date.now());
   while(photoIn.readSync() == 0) {
      reading = reading + 1;
   } // while
   console.log(" read: " + reading);   	
  }, .1);
 
  console.log("  end: " + Date.now());
}, 500);

// run this for 5 seconds, then shut it down
setTimeout(function () {
  console.log("All Finished, shutting down");
  clearInterval(iv); // shutdown
  photoOut.unexport();    // Unexport GPIO and free resources
}, 5000);
