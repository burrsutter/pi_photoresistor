https://learn.adafruit.com/basic-resistor-sensor-reading-on-raspberry-pi/basic-photocell-reading

# wiring setup
https://www.dropbox.com/s/ekhot7gv8wczvch/2015-05-25%2016.54.53.jpg?dl=0 

The green jumper wire in the photo above is pin 24 using the BCM layout, physical pin 18
The blue jumper wire goes to ground, physical pin 20
The red jumper wire goes to 3.3VDC, physical pin 17
The photoresistor straddles the dividing line of the breadboard, it has no polarity
The 1uF capacitor's negative lead is tied to ground (blue jumper)
The 1uF capacitor's postive lead is in-line with the green jumper then photoresitor

https://raw.githubusercontent.com/burrsutter/rpi_HC-SR501/master/images/Pi2Header.png

![Alt text](/images/rpi_photoresistor_bb.png?raw=true "Fritzing Diagram")

# python usage

python photoresistor_poll.py

low light produces readings above 3000
bright light produces readings below 100

and

python phtoresistor_pull_high_low.py 


