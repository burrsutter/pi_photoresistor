import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM);

#LED_PIN = 12;
LED_PIN = 7;

GPIO.setup(LED_PIN, GPIO.OUT)
GPIO.output(LED_PIN, False)


