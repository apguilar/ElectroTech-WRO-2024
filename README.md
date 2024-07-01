  La categoría de “Futuros Ingenieros” presenta un desafío que consiste en diseñar
un vehículo robótico capaz de conducir de manera autónoma en un circuito que
cambia aleatoriamente en cada ronda de la competencia.
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/2292ca68-a602-4a9a-b7a4-dd045cdf7080)


# _**1. Gestión de Movilidad**_

  Para la movilidad del vehículo por la pista se seleccionaron un motor DC y un
servo-motor del Kit “Nezha Inventor’s Kit for micro:bit”. Conectados al módulo Nezha
y utilizados, el motor DC para la conducción, y el servo-motor para la dirección.
Siendo la función del servo-motor indispensable para llevar a cabo el reto, se realizó
un sistema de engranajes y tornillos sin fin que permiten girar las ruedas hacia la
derecha o izquierda según lo detectado por los sensores y ejecutado por el
servo-motor. El módulo Nezha incluye una batería de litio de 900mAh que permite
alimentar la placa micro:bit y representa la fuente de energía para el movimiento de
los motores conectados a él.
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/a778dcc0-6422-4fc4-8db1-dfc2bc4641cc)


# _**2. Gestión de Energía**_
   
  El vehículo cuenta con el módulo Nezha como fuente de alimentación; éste
incluye una batería de litio de 900mAh que permite alimentar la placa micro:bit y
conectar todos los componentes simultáneamente. El módulo posee cuatro entradas
para motores DC y servo-motores, así como para los diversos sensores que ofrece.

  Para la ejecución del reto se seleccionaron 3 sensores de ultrasonido y una
Cámara “Smart AI Lens” de ELECFREAKS. Los sensores de ultrasonido son
programados para detectar cuerpos a distancias específicas, por lo que en el reto
permiten detectar la distancia entre el vehículo y las barreras para realizar los giros
por la pista o evitar chocar con ellas. Por otra parte, la cámara permite detectar
objetos, rostros, números, figuras, y colores, más detalladamente, por lo que fue
programada para detectar las señales de tráfico colocadas en la pista, para que el
vehículo las esquive según corresponda

![0](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/a7845a30-1426-4ad5-b9ec-6d9a528fc529)
Imagen 1. Diagrama de cableado.
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/2b50123b-23c0-4eaf-bcae-6d6c00d09fb6)


# _**3. Gestión de Obstáculos**_

La estrategia del vehículo para superar los obstáculos consiste en la detección
del color de las señales de tráfico con la cámara, para así tomar la decisión lógica
de esquivarla por el lado izquierdo o derecho, ejecutando los giros mediante el
servo-motor.

![Captura de pantalla 2024-06-29 070403](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/d4c514ae-a148-4246-9983-f20674cd1f81)
Imagen 2. Código en bloques.
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/2cf3ec96-cb89-4e6a-802e-85a30e660b34)

Código en Python:

![Captura de pantalla 2024-07-01 001617](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/7c59db39-5bfa-410c-8177-030d57503c98)
![Captura de pantalla 2024-07-01 001656](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/40232292-fe3a-4c78-b385-ffa14c04e0d6)
![Captura de pantalla 2024-07-01 001738](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/d74938f3-f9ac-4bd5-b467-e22e419a1b3a)
![Captura de pantalla 2024-07-01 001751](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/7264c8cd-01ba-4cfa-b591-e2cf75e26da4)
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/40aaf292-d0b0-4360-b6c9-9a2fae9806c3)


Código en JavaScript:

![Captura de pantalla 2024-07-01 002214](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/8d3d0b43-715e-49e4-98bf-d9133b6b3783)
![Captura de pantalla 2024-07-01 002236](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/7a3461eb-7784-4006-bd46-43782696a2f4)
![Captura de pantalla 2024-07-01 002256](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/e17d2824-d0f7-493b-bee0-19544b097739)
![Captura de pantalla 2024-07-01 002307](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/93c8d17f-9344-4083-9673-fbcccb3db46f)
![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/40aaf292-d0b0-4360-b6c9-9a2fae9806c3)
![0](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/a9060da3-d755-426d-9e8c-71bf26ff1258)
Imagen 3. Diagrama de flujo.

![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/2cf3ec96-cb89-4e6a-802e-85a30e660b34)

# _**5. Videos de Rendimiento**_

Se realizó un video para demostrar el rendimiento del vehículo durante el
desplazamiento en pista. Puede accederse a él a través del enlace:
https://youtu.be/ANmnAtssnoo?si=y03vp8YUODDqMHdq

![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/de835020-0acb-4733-93bf-3a969b802746)
# _**Solución del reto**_


Para solucionar el reto planteado en la categoría de Futuros Ingenieros, se realizó un vehículo robótico con el Nezha Inventor's Kit for micro:bit. Se utilizaron vigas, ejes, poleas, un engranaje, dos tornillos sin fin, un motor DC, un servo-motor, tres sensores de ultrasonido, una cámara Smart AI Lens de ELECFREAKS, y el módulo Nezha.

Se diseñó un programa mediante el software Microsoft MakeCode for micro:bit, para que el vehículo se desplace con una trayectoria lineal mientras detecte la barrera interna a determinada distancia con los sensores de ultrasonido, y una vez que deje de detectarla, gire para desplazarse por la pista. De igual forma, se realizó un código que permita al vehículo reconocer las señales de tráfico situadas en la pista, y así esquivarlas por el lado izquierdo o derecho según el color de la señal. Finalmente, se utilizó el sensor de ultrasonido fronta para que en caso de detectar la barrera frente a él, retroceda y ejecute un giro con el motor DC y servo-motor según sea necesario, para evitar chocar con ella.

El código diseñado en Microsoft MakeCode for micro:bit, fue compilado en el programa y cargado a la tarjeta micro:bit mediante un cable de conexión.

![Captura de pantalla 2024-07-01 000134](https://github.com/apguilar/ElectroTech-WRO-2024/assets/174073328/502269ef-9b0c-460f-a320-e3765f0b8920)

**Translation:**

To solve the challenge posed in the Future Engineers category, we designed a robotic vehicle with the Nezha Inventor's Kit for micro:bit, using beams, axles, pulleys, a gear, two worm screws, a DC motor, a servo motor, three ultrasound sensors, an ELECFREAKS Smart AI Lens camera, and the Nezha module.

  The program was designed using the Microsoft MakeCode for micro:bit software, so that the vehicle moves with a linear trajectory while it detects the internal barrier at a certain distance with the ultrasound sensors, and once it stops detecting it, it turns to move along track. Likewise, the code allows the vehicle to recognize the traffic signs located on the track, and thus avoid them on the left or right side depending on the color of the sign. Finally, the front ultrasound sensor was used so that if it detects the barrier in front of it, it moves back and executes a turn with the DC motor and servo motor as necessary, to avoid colliding with it.

 The code designed in Microsoft MakeCode for micro:bit was compiled in the program and uploaded to the micro:bit card using a connection cable.


