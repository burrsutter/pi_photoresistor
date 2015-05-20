#!/usr/bin/env python
 
# Example for RC timing reading for Raspberry Pi
# Must be used with GPIO 0.3.1a or later - earlier verions
# are not fast enough!
 
import RPi.GPIO as GPIO, time, os      
 
DEBUG = 1
GPIO.setmode(GPIO.BCM)
PIN = 24

def RCtime (RCpin):
        reading = 0
        GPIO.setup(RCpin, GPIO.OUT)
        GPIO.output(RCpin, GPIO.LOW)
        time.sleep(0.1)
 
        GPIO.setup(RCpin, GPIO.IN)
        # This takes about 1 millisecond per loop cycle
        while (GPIO.input(RCpin) == GPIO.LOW):
                reading += 1
        return reading
 
while True:                                     
        # print RCtime(PIN)     # Read RC timing using pin #24

	if RCtime(PIN) < 100:
		print "HIGH"
	if RCtime(PIN) > 3000:
		print "LOW"
