input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
})
basic.showIcon(IconNames.Happy)
let GRADOS = 90
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
//  Ult modificación
//  
//  Pausa 100 + lo de abajo
basic.forever(function on_forever() {
    
    GRADOS = 70
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 0 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 160) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    }
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) == 0) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 60)
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    }
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 0 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 13) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        GRADOS += -15
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
        basic.pause(100)
        GRADOS += 8
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
    }
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
})
