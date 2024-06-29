// Segmento de código para el reconocimiento de las señales de tráfico. Inicia al presionarse el botón A de la tarjeta micro:bit. 
// 
// Al ejecutarse, inicializa la cámara y la configura, así como determina el valor 0 para la variable "Número". Además, fija el ángulo del servo-motor a 90° y enciende el motor DC con una potencia del 25%.
input.onButtonPressed(Button.A, function () {
    // Inicializa la cámara para su uso.
    PlanetX_AILens.initModule()
    // Determina la función de reconocimiento de la cámara para: Detección de color.
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
    Número = 0
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    // Bucle que confirma la igualdad entre la dos variables para ejecutar el código.
    while (Número == Número) {
        // Realiza una pausa de 0.1 segundos antes de cada repetición.
        basic.pause(100)
        // Analiza la imagen detectada por la cámara.
        PlanetX_AILens.cameraImage()
        // Indica que cuando la cámara detecte el color verde, se fijará el ángulo del servo-motor a 105° y la potencia del motor DC a 25%. Luego de 1 segundo, fijará el ángulo del servo-motor a 70°. Y luego de 1 segundo, fijará el ángulo a 90°; para posteriormente realizar una pausa de 0,2 segundos.
        // 
        // 
        // Esto permitirá al vehículo esquivar la señal de tráfico verde por el lado izquierdo.
        if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.green)) {
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 105)
            neZha.setMotorSpeed(neZha.MotorList.M1, 25)
            basic.pause(1000)
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
            basic.pause(1000)
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
            basic.pause(200)
        }
        // Indica que cuando la cámara detecte el color rojo, se fijará el ángulo del servo-motor a 70° y la potencia del motor DC a 25%. Luego de 1 segundo, fijará el ángulo del servo-motor a 105°. Y luego de 1 segundo, fijará el ángulo a 90°; para posteriormente realizar una pausa de 0,2 segundos.
        // 
        // Esto permitirá al vehículo esquivar la señal de tráfico roja por el lado derecho.
        if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
            neZha.setMotorSpeed(neZha.MotorList.M1, 25)
            basic.pause(1000)
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 105)
            basic.pause(1000)
            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
            basic.pause(200)
        }
    }
})
// Acciones que se ejecutan al encender el vehículo. Comienza mostrando una imagen en la tarjeta micro:bit, que permite identificar el programa.
let TIEMPO_CORTO = 0
let TIEMPO = 0
let Número = 0
basic.showIcon(IconNames.Happy)
// Se fija el valor de la variable "GRADOS" a 90. Para que al iniciar el programa, el robot verifique el ángulo en que se encuentra el servo-motor, y lo coloque a 90°.
let GRADOS = 90
// Coloca el servo-motor a los grados que indica la variable.
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
// Acciones que se repiten en bucle desde que se enciende el vehículo. Inicialmente se declaran las variables "GRADOS", "TIEMPO", y "TIEMPO_CORTO"
basic.forever(function () {
    GRADOS = 70
    TIEMPO = 700
    TIEMPO_CORTO = 80
    // Indica que mientras el sensor de ultrasonido conectado al puerto J4 detecte una distancia mayor de 0cm y menor de 90cm, encienda el motor DC a una potencia de 25% y fije el ángulo del servo-motor a 90°.
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 0 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 90) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    }
    // Indica que mientras el sensor de ultrasonido conectado al puerto J4 detecte una distancia igual a 0cm, encienda el motor DC a una potencia de 25% y fije el ángulo del servo-motor a 60°. Esto le permite realizar los giros en la pista.
    // 
    // El vehículo detecta la distancia de la barrera interna de la pista y se mantiene conduciendo de forma recta. Una vez que ya no la detecta, comienza a girar hasta detectarla nuevamente.
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) == 0) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 60)
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    }
    // Indica que mientras el sensor de ultrasonido conectado al puerto J3 detecte una distancia mayor de 0cm y menor de 20cm, encienda el motor DC a una potencia de 25% y reste 15° al ángulo del servo-motor. Luego de 0,08 segundos, añade 9° al ángulo del vehículo.
    // 
    // Esta función permite que cuando el vehículo detecte una barrera a menos de 20cm por su lado izquierdo, no choque con ella.
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 0 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 20) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        GRADOS += -15
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
        TIEMPO_CORTO += 10
        basic.pause(TIEMPO_CORTO)
        GRADOS += 9
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, GRADOS)
    }
    // Indica que mientras el sensor de ultrasonido conectado al puerto J1 detecte una distancia mayor de 0cm y menor de 25cm, que encienda el motor DC a una potencia de -25% para que el vehículo retroceda. Y fije el ángulo del servo-motor a 110°, por un tiempo de 0,7 segundos.
    // 
    // De esta manera, si el vehículo se dirige de frente hacia una barrera, es capaz de retroceder y rectificar su trayectoria.
    while (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 0 && PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) < 25) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -25)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 110)
        basic.pause(TIEMPO)
    }
    // Indica que el ángulo del servo-motor sea fijado a 90°.
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
})
