def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

TIEMPO_CORTO = 0
TIEMPO = 0
basic.show_icon(IconNames.HAPPY)
# Se fija el valor de la variable "GRADOS" a 90. Para que al iniciar el programa, el robot verifique el ángulo en que se encuentra el servo-motor, y lo coloque a 90°.
GRADOS = 90
neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)

def on_forever():
    global GRADOS, TIEMPO, TIEMPO_CORTO
    GRADOS = 70
    TIEMPO = 700
    TIEMPO_CORTO = 70
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J4,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) > 0 and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J4,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 90:
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J4,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 0:
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 60)
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J3,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) > 0 and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J3,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 20:
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
        GRADOS += -15
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
        TIEMPO_CORTO += 10
        basic.pause(TIEMPO_CORTO)
        GRADOS += 9
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J1,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) > 0 and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J1,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 25:
        neZha.set_motor_speed(neZha.MotorList.M1, -25)
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 110)
        basic.pause(TIEMPO)
    neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
