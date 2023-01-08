#Python code for connecting Arduino to Python

from serial import Serial
import time
import schedule
import connect_to_firebase

def main_func():
    upload_port = '/dev/cu.usbmodem141301'
    arduino = Serial(upload_port, 9600)
    print('Established serial connection to Arduino')
   
    # check here 
    # use other code checking for rcid reader to get bytes of id of reader
    # use bytes as a key to access to db
    # 
    #
    decoded_values = str(arduino_data[0:len(arduino_data)].decode("utf-8"))
    arduino_data = arduino.readline()
    # list_values = decoded_values.split('x')

    # for item in list_values:
    #     list_in_floats.append(float(item))

    print(f'Collected readings from Arduino: {decoded_values}')
            
    # Call functions here
    arduino_data = 0
    list_in_floats.clear()
    list_values.clear()
    arduino.close()
    print('Connection closed')
    print('<----------------------------->')


# ----------------------------------------Main Code------------------------------------
# Declare variables to be used
list_values = []
list_in_floats = []

print('Program started')

# Setting up the Arduino
schedule.every(5).seconds.do(main_func)

while True:
    schedule.run_pending()
    time.sleep(1)