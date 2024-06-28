def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HAPPY)
GRADOS = 90
neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
# Ult modificación
# 
# Pausa 100 + lo de abajo

def on_forever():
    global GRADOS
    GRADOS = 70
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J2,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) > 0 and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J2,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 160:
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J2,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) == 0:
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 60)
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
    while PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J1,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) > 0 and PlanetX_Basic.ultrasound_sensor(PlanetX_Basic.DigitalRJPin.J1,
        PlanetX_Basic.Distance_Unit_List.DISTANCE_UNIT_CM) < 13:
        neZha.set_motor_speed(neZha.MotorList.M1, 25)
        GRADOS += -15
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
        basic.pause(100)
        GRADOS += 8
        neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
    neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
basic.forever(on_forever)
