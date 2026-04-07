const questions = [
  // Pregunta 1
  {
    question: "Está permitido en la vía:",
    options: [
      "Recoger o dejar pasajeros o carga en cualquier lugar.",
      "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito.",
      "Recoger o dejar pasajeros en lugares autorizados.",
      "Ejercer el comercio ambulatorio o estacionario.",
    ],
    correct: 2,
  },

  // Pregunta 2
  {
    question:
      "Respecto de los dispositivos de control o regulación del tránsito:",
    options: [
      "Solo los peatones están obligados a su obediencia.",
      "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario.",
      "Solo los conductores están obligados a su obediencia.",
      "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.",
    ],
    correct: 1,
  },

  // Pregunta 3
  {
    question:
      "La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda?, significa que:",
    options: [
      "Está prohibido voltear a la izquierda y, por lo tanto, también está prohibido el giro en U.",
      "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
      "El único sentido de desplazamiento es continuar de frente.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 4
  {
    question: "La señal vertical reglamentaria R-3 significa:",
    image: "../data/img/4.jpg",
    options: [
      "Nos acercamos a una zona restringida al tránsito.",
      "Está permitido adelantar vehículos.",
      "El único sentido de desplazamiento es continuar de frente.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 5
  {
    question:
      "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
    options: [
      "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
      "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
      "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
      "Se está frente a un lugar de cruce peatonal.",
    ],
    correct: 0,
  },

  // Pregunta 6
  {
    question: "El color ámbar o amarillo del semáforo significa que:",
    options: [
      "Los vehículos deben avanzar.",
      "Los vehículos deben detenerse.",
      "Los vehículos deben acelerar la marcha.",
      "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.",
    ],
    correct: 3,
  },

  // Pregunta 7
  {
    question:
      "Los colores del semáforo tienen el siguiente significado: rojo: ___ ; ámbar o amarillo: ___ ; verde: ___.",
    options: [
      "Detención - prevención - paso.",
      "Detención - paso con prevención - circulación rápida.",
      "Disminución de la velocidad - prevención - paso rápido.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 8
  {
    question: "¿Qué indica una flecha verde en un semáforo vehicular?",
    options: [
      "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.",
      "No está permitida la circulación en el sentido que indica la flecha.",
      "Se debe respetar únicamente la luz circular.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 9
  {
    question: "La siguiente señal vertical reglamentaria R-53 significa:",
    image: "../data/img/9.jpg",
    options: [
      "Prohíbe estacionar.",
      "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
      "Prohíbe la carga y descarga.",
      "Prohíbe la circulación de vehículos motorizados.",
    ],
    correct: 1,
  },

  // Pregunta 10
  {
    question:
      "Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    options: [
      "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
      "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.",
      "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 11
  {
    question:
      "Si llega a una intersección donde el semáforo muestra una luz intermitente, ¿qué afirmación es correcta?",
    options: [
      "Si la luz intermitente es roja, ésta es equivalente a un CEDA EL PASO.",
      "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
      "Si la luz intermitente es verde, ésta es equivalente a un PARE.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 12
  {
    question: "¿La luz intermitente roja es igual que una señal de PARE?",
    options: [
      "Verdad.",
      "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
      "Falso.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 13
  {
    question:
      "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
    options: [
      "Girar desde cualquier carril.",
      "Colocarse en el carril derecho, luego girar con precaución.",
      "Colocarse en el carril más despejado de tráfico, luego girar con precaución.",
      "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicarse con anticipación el vehículo en el carril de circulación de la izquierda y girar con precaución.",
    ],
    correct: 3,
  },

  // Pregunta 14
  {
    question:
      "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
    options: [
      "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.",
      "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.",
      "Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.",
      "Está prohibido el cambio de carril en vías de un solo sentido.",
    ],
    correct: 0,
  },

  // Pregunta 15
  {
    question:
      "Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:",
    options: [
      "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.",
      "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.",
      "El vehículo que llegue primero tiene preferencia.",
      "Tiene preferencia el conductor que viene por la derecha del otro.",
    ],
    correct: 0,
  },

  // Pregunta 16
  {
    question:
      "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
    options: [
      "Detenerse hasta que cambie a luz verde.",
      "Continuar la marcha.",
      "Estar prevenido.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 17
  {
    question: "Está prohibido estacionar un vehículo:",
    options: [
      "En las curvas.",
      "Dentro de una intersección.",
      "Frente a la entrada de garajes y de recintos militares o policiales.",
      "Todas las alternativas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 18
  {
    question: "La siguiente señal vertical reglamentaria R-29 significa:",
    image: "../data/img/18.jpg",
    options: [
      "Prohíbe el uso de la bocina en vías urbanas.",
      "Prohíbe el uso de la bocina en carreteras.",
      "Prohíbe el uso de la bocina.",
      "Prohíbe hacer ruido.",
    ],
    correct: 2,
  },

  // Pregunta 19
  {
    question:
      "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
    options: [
      "Conduzca un vehículo automotor sin tener licencia de conducir.",
      "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
      "Conduzca un vehículo sin contar con el SOAT.",
      "a y c son correctas.",
    ],
    correct: 0,
  },

  // Pregunta 20
  {
    question:
      "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    options: [
      "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
      "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
      "Debe disminuir drásticamente la velocidad de su vehículo.",
      "Debe detener su vehículo.",
    ],
    correct: 1,
  },

  // Pregunta 21
  {
    question: "¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
      "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
      "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 22
  {
    question:
      "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
    options: [
      "Bajas.",
      "Altas.",
      "Luces altas en las intersecciones y bajas en las avenidas.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 23
  {
    question: "En caso de accidentes, el SOAT cubre los daños que sufren:",
    options: [
      "Solo los ocupantes del vehículo.",
      "Los ocupantes y terceros no ocupantes del vehículo.",
      "Solo terceros afectados.",
      "Solo el conductor del vehículo.",
    ],
    correct: 1,
  },

  // Pregunta 24
  {
    question:
      "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
    options: [
      "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
      "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.",
      "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
      "No es obligatorio contar con un seguro.",
    ],
    correct: 2,
  },

  // Pregunta 25
  {
    question:
      "¿Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial?",
    options: [
      "Cuando emita señales visibles.",
      "Cuando emita señales audibles.",
      "Cuando emita señales audibles y visibles.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 26
  {
    question:
      "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
    options: [
      "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
      "Adelantar por el lado izquierdo, pero con precaución.",
      "Tocar el claxon para alertar que está pasando.",
      "Adelantar muy despacio.",
    ],
    correct: 0,
  },

  // Pregunta 27
  {
    question:
      "¿Qué significa un triángulo rojo de seguridad colocado en la calzada?",
    options: [
      "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
      "Zona de obras por reparación en la calzada.",
      "Que el vehículo que lo enfrenta debe detenerse.",
      "a y c son correctas.",
    ],
    correct: 0,
  },

  // Pregunta 28
  {
    question: "La siguiente señal vertical reglamentaria P-22C indica que:",
    image: "../data/img/28.jpg",
    options: [
      "Está permitido adelantar.",
      "Se aproxima un carril adicional.",
      "Está permitido cambiar de carril.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 29
  {
    question:
      "Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:",
    options: [
      "Para girar en las intersecciones y para advertir los cambios de carril.",
      "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.",
      "Durante toda la circulación del vehículo.",
      "En cada intersección.",
    ],
    correct: 1,
  },

  // Pregunta 30
  {
    question:
      "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
    options: [
      "No.",
      "Sí.",
      "Depende de la intersección.",
      "No se encuentra regulado en el reglamento.",
    ],
    correct: 1,
  },

  // Pregunta 31
  {
    question:
      "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
    options: [
      "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
      "Disminuir su velocidad y pasar con cuidado.",
      "Solo parar y pasar rápidamente.",
      "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.",
    ],
    correct: 3,
  },

  // Pregunta 32
  {
    question: "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
    image: "../data/img/32.jpg",
    options: [
      "No hay diferencia, se usan indistintamente.",
      "La señal P-2A se utiliza en situaciones de mayor riesgo.",
      "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.",
      "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.",
    ],
    correct: 2,
  },

  // Pregunta 33
  {
    question: "¿Qué indica la señal R-30F?",
    image: "../data/img/33.jpg",
    options: [
      "Tener precaución con vehículos lentos.",
      "Regula la velocidad máxima permitida en curvas.",
      "Regula la velocidad máxima en zonas rurales.",
      "No se encuentra regulada en el reglamento.",
    ],
    correct: 1,
  },

  // Pregunta 34
  {
    question:
      "¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?",
    options: [
      "Luces direccionales.",
      "Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.",
      "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.",
      "Luces bajas.",
    ],
    correct: 2,
  },

  // Pregunta 35
  {
    question:
      "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    image: "../data/img/35.jpg",
    options: [
      "Cualquiera de los dos.",
      "El que se aproxime por la derecha del otro.",
      "El que se aproxime por la izquierda del otro.",
      "El que haga sonar la bocina primero.",
    ],
    correct: 1,
  },

  // Pregunta 36
  {
    question:
      "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
    options: [
      "El vehículo que ingresó primero a la intersección.",
      "El vehículo que haga sonar la bocina primero.",
      "El vehículo que haga cambio de luces primero.",
      "Cualquier vehículo.",
    ],
    correct: 0,
  },

  // Pregunta 37
  {
    question: "En una rotonda, tiene prioridad de paso el vehículo que:",
    options: [
      "Quiere ingresar a la rotonda.",
      "Circula por ella.",
      "Acelera primero.",
      "Hace sonar la bocina.",
    ],
    correct: 1,
  },

  // Pregunta 38
  {
    question:
      "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la ______, retornando el vehículo después de la maniobra a su carril original.",
    options: [
      "Derecha.",
      "Izquierda.",
      "Berma.",
      "Por la derecha o izquierda.",
    ],
    correct: 1,
  },

  // Pregunta 39
  {
    question:
      "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
    options: [
      "Manejar normalmente.",
      "Manejar despacio.",
      "Abstenerse de manejar.",
      "Manejar con un copiloto.",
    ],
    correct: 2,
  },

  // Pregunta 40
  {
    question:
      "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
    options: [
      "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.",
      "Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
      "Contrato de compraventa del vehículo.",
      "Todas las alternativas son correctas.",
    ],
    correct: 0,
  },

  // Pregunta 41
  {
    question:
      "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
    options: [
      "No tiene preferencia de paso.",
      "Tiene preferencia de paso.",
      "Debe detenerse.",
      "Debe retroceder.",
    ],
    correct: 1,
  },

  // Pregunta 42
  {
    question: "Al cambiar de dirección, un conductor debe:",
    options: [
      "Señalizar toda la maniobra hasta su culminación.",
      "Cambiar de dirección y luego señalizar.",
      "No existe ninguna obligación.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 43
  {
    question: "¿Se puede conducir un vehículo con el motor en punto neutro?",
    options: [
      "Sí, pero solo si está bajando una pendiente.",
      "No, está prohibido.",
      "Sí, en caso de que el conductor no sea novato.",
      "No se encuentra regulado en la norma.",
    ],
    correct: 1,
  },

  // Pregunta 44
  {
    question:
      "Para girar o cambiar de carril hacia la derecha, el conductor debe utilizar las luces direccionales y, en casos de fuerza mayor, la siguiente señal manual:",
    options: [
      "Brazo, antebrazo izquierdo y mano extendidos hacia afuera del vehículo.",
      "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo.",
      "Brazo, antebrazo derecho y mano extendidos hacia afuera del vehículo.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 45
  {
    question:
      "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
    options: [
      "No podrán ser conducidos.",
      "Podrán ser conducidos únicamente en zonas urbanas.",
      "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
      "Podrán ser conducidos con normalidad hasta que renueve su licencia.",
    ],
    correct: 0,
  },

  // Pregunta 46
  {
    question:
      "De acuerdo con el sistema de control de licencias de conducir por puntos:",
    options: [
      "Determinadas infracciones suman puntos.",
      "Una infracción puede sumar o disminuir puntos, a elección del infractor.",
      "Determinadas infracciones restan puntos.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 47
  {
    question:
      "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
    options: [
      "Suspensión de licencia de conducir.",
      "Anulación de la Placa Única Nacional de Rodaje.",
      "Inhabilitación definitiva para obtener una licencia de conducir.",
      "Internamiento vehicular.",
    ],
    correct: 0,
  },

  // Pregunta 48
  {
    question: "Se entiende por carril a la:",
    options: [
      "Parte de la vía destinada a la circulación de peatones.",
      "Parte de la calzada destinada al tránsito de una fila de vehículos.",
      "Vía rural destinada a la circulación de peatones y animales.",
      "Todas las alternativas son correctas.",
    ],
    correct: 1,
  },

  // Pregunta 49
  {
    question: "Se entiende por línea de parada a:",
    options: [
      "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo.",
      "Las líneas que se encuentran en los lugares del estacionamiento.",
      "El lugar utilizado para embarcar y desembarcar pasajeros.",
      "Todas las alternativas son correctas.",
    ],
    correct: 0,
  },

  // Pregunta 50
  {
    question: "La siguiente señal vertical reglamentaria P-17A indica:",
    image: "../data/img/50.jpg",
    options: [
      "Reducción de la calzada al lado derecho.",
      "Reducción de la calzada al lado izquierdo.",
      "Reducción de la calzada en ambos lados.",
      "Ensanchamiento de la calzada en ambos lados.",
    ],
    correct: 2,
  },

  // Pregunta 51
  {
    question:
      "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    options: [
      "Se puede adelantar en ambos sentidos.",
      "No está permitido adelantar en ningún sentido.",
      "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
      "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar).",
    ],
    correct: 2,
  },

  // Pregunta 52
  {
    question: "Se define como zona rígida al:",
    options: [
      "Área donde se prohíbe la circulación de vehículos.",
      "Área donde se prohíbe la circulación de peatones.",
      "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
      "Todas las alternativas son correctas.",
    ],
    correct: 2,
  },

  // Pregunta 53
  {
    question:
      "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
    options: [
      "Obligación de detenerse de quien así lo enfrente.",
      "Continuar la marcha por el carril izquierdo de la calzada.",
      "Continuar la marcha.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 54
  {
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
    options: ["30 km/h.", "40 km/h.", "60 km/h.", "80 km/h."],
    correct: 1,
  },

  // Pregunta 55
  {
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
    options: ["30 km/h.", "40 km/h.", "60 km/h.", "80 km/h."],
    correct: 2,
  },

  // Pregunta 56
  {
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en vías expresas es de:",
    options: ["60 km/h.", "70 km/h.", "80 km/h.", "100 km/h."],
    correct: 2,
  },

  // Pregunta 57
  {
    question:
      "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
    options: ["20 km/h.", "30 km/h.", "35 km/h.", "50 km/h."],
    correct: 1,
  },

  // Pregunta 58
  {
    question:
      "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    options: ["80 km/h.", "90 km/h.", "100 km/h.", "110 km/h."],
    correct: 2,
  },

  // Pregunta 59
  {
    question:
      "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
    options: [
      "30 km/h.",
      "La mitad de la velocidad máxima establecida para cada tipo de vía.",
      "20 km/h.",
      "15 km/h.",
    ],
    correct: 1,
  },

  // Pregunta 60
  {
    question:
      "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal o bajo efectos de drogas, o negarse al examen respectivo, o haber participado en un accidente?",
    options: [
      "Multa.",
      "Cancelación de licencia de conducir.",
      "Suspensión de la licencia de conducir.",
      "Multa, cancelación de la licencia e inhabilitación definitiva para obtener una licencia.",
    ],
    correct: 3,
  },

  // Pregunta 61
  {
    question:
      "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal?",
    options: [
      "Una multa.",
      "Suspensión de la licencia de conducir.",
      "Multa y suspensión de la licencia de conducir por 3 años.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 62
  {
    question:
      "La frecuencia de la inspección técnica de un vehículo particular es:",
    options: [
      "Cada medio año.",
      "Cada año.",
      "Cada dos años.",
      "Cada tres años.",
    ],
    correct: 1,
  },

  // Pregunta 63
  {
    question:
      "¿A partir de qué año de antigüedad debe realizarse la inspección técnica de un vehículo particular para transporte de personas hasta 9 asientos?",
    options: [
      "A partir del segundo año.",
      "A partir del cuarto año.",
      "A partir del quinto año.",
      "No está sujeto a inspección.",
    ],
    correct: 1,
  },

  // Pregunta 64
  {
    question: "¿Cuál es el plazo de vigencia del SOAT?",
    options: ["1 año.", "6 meses.", "4 años.", "2 años."],
    correct: 0,
  },

  // Pregunta 65
  {
    question:
      "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, propietario o prestador del servicio?",
    options: [
      "Dar aviso a los bomberos.",
      "Dar aviso solo a la compañía de seguros.",
      "Dar aviso a la compañía de seguros y a la Policía Nacional.",
      "Dar aviso únicamente a la Policía.",
    ],
    correct: 2,
  },

  // Pregunta 66
  {
    question:
      "Si una licencia de conducir consigna alguna restricción, es correcto afirmar que:",
    options: [
      "Es meramente informativa.",
      "Es obligatorio cumplirla.",
      "No genera riesgo no cumplirla.",
      "Ninguna es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 67 (CON IMAGEN)
  {
    question: "La señal preventiva P-33A significa:",
    image: "../data/img/67.jpg",
    options: [
      "Curva sinuosa.",
      "Proximidad a un badén.",
      "Proximidad de un reductor de velocidad tipo resalto.",
      "Ninguna es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 68
  {
    question: "Si su vehículo se avería en la autopista, ¿qué debe hacer?",
    options: [
      "Activar las luces intermitentes.",
      "Parar en su posición.",
      "Salir rápidamente del vehículo.",
      "Ninguna es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 69
  {
    question:
      "¿Está permitido usar la bocina para advertir a un vehículo que será adelantado?",
    options: [
      "Sí, si no es estridente.",
      "Sí, salvo prohibición.",
      "No, está prohibido.",
      "Ninguna es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 70
  {
    question: "Si se aproxima una ambulancia sin sirena ni luces, ¿qué hacer?",
    options: [
      "No estamos obligados a darle paso.",
      "Dar prioridad por ser ambulancia.",
      "Indica que está en emergencia.",
      "Ninguna es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 71
  {
    question:
      "Si el semáforo está en verde pero la intersección no está libre, ¿qué hacer?",
    options: [
      "No avanzar hasta que esté libre.",
      "Tocar el claxon.",
      "Bajar a reclamar.",
      "Ninguna es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 72
  {
    question: "En señalización vial, el color usado para sentidos opuestos es:",
    options: [
      "Amarillo - blanco.",
      "Blanco - amarillo.",
      "Azul - rojo.",
      "Rojo - amarillo.",
    ],
    correct: 0,
  },

  // Pregunta 73
  {
    question: "Si escolares cruzan fuera del cruce peatonal, ¿qué hacer?",
    options: [
      "Usar claxon.",
      "Advertir a viva voz.",
      "Parar y ceder el paso.",
      "Continuar lentamente.",
    ],
    correct: 2,
  },

  // Pregunta 74
  {
    question: "Al aproximarse a una zona escolar, ¿qué debe hacer?",
    options: [
      "No hay obligación.",
      "Reducir a 40 km/h.",
      "Reducir a 30 km/h.",
      "Reducir a 35 km/h.",
    ],
    correct: 2,
  },

  // Pregunta 75
  {
    question: "Señales que notifican limitaciones y prohibiciones:",
    options: [
      "Señales reguladoras.",
      "Señales preventivas.",
      "Señales informativas.",
      "Señales horizontales.",
    ],
    correct: 0,
  },

  // Pregunta 76
  {
    question: "Señales que advierten peligros en la vía:",
    options: ["Reguladoras.", "Preventivas.", "Informativas.", "Horizontales."],
    correct: 1,
  },

  // Pregunta 77
  {
    question: "Es una infracción de tránsito:",
    options: [
      "No detenerse en PARE.",
      "Arrojar objetos en la vía.",
      "Usar bocina innecesariamente.",
      "Todas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 78
  {
    question: "¿Qué hacer ante una señal de CEDA EL PASO?",
    options: [
      "Ceder a emergencia.",
      "Mantener velocidad.",
      "Reducir y ceder paso.",
      "Detenerse totalmente.",
    ],
    correct: 2,
  },

  // Pregunta 79
  {
    question: "No se debe conducir un vehículo:",
    options: [
      "Sin SOAT.",
      "En retroceso indebido.",
      "Sin licencia adecuada.",
      "Todas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 80
  {
    question:
      "¿Qué debe hacer si se aproxima a una intersección sin semáforo y observa que un peatón está cruzando por el paso peatonal?",
    options: [
      "Disminuir la velocidad y pasar con cuidado.",
      "Detener el vehículo y ceder el paso al peatón.",
      "Continuar porque usted tiene la prioridad.",
      "Incrementar la velocidad para adelantar el cruce.",
    ],
    correct: 1,
  },

  // Pregunta 81
  {
    question:
      "Sobre el uso del cinturón de seguridad en los vehículos en circulación, es correcto afirmar que:",
    options: [
      "Es obligatorio solo para los asientos delanteros.",
      "En los asientos posteriores depende del vehículo.",
      "No es obligatorio para el conductor.",
      "Todas las alternativas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 82
  {
    question:
      "En una vía de dos carriles en el mismo sentido, si circula lentamente debe ir por el carril _____ y los vehículos más rápidos por el carril _____.",
    options: [
      "Izquierdo / Derecho.",
      "Derecho / Derecho.",
      "Derecho / Izquierdo.",
      "Ninguna es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 83
  {
    question:
      "Sobre el uso de la bocina del vehículo, es correcto afirmar que:",
    options: [
      "Debe evitarse su uso innecesario.",
      "No es infracción usarla innecesariamente.",
      "Solo debe usarse para evitar situaciones peligrosas.",
      "a y c son correctas.",
    ],
    correct: 2,
  },

  // Pregunta 84
  {
    question: "Una línea blanca continua longitudinal en la vía indica:",
    options: [
      "Se puede adelantar.",
      "Está prohibido cruzarla sin excepción.",
      "Está prohibido cruzarla salvo excepciones.",
      "Es zona peatonal.",
    ],
    correct: 2,
  },

  // Pregunta 85
  {
    question:
      "¿Cuál es el número máximo de personas que puede transportar un vehículo particular?",
    options: [
      "El número de asientos del vehículo.",
      "No existe límite.",
      "Solo aplica para asientos delanteros.",
      "Cualquier número si son familia.",
    ],
    correct: 0,
  },

  // Pregunta 86
  {
    question: "La acción correcta al abastecer de combustible su vehículo es:",
    options: [
      "Mantener pasajeros dentro del vehículo.",
      "No fumar durante el abastecimiento.",
      "Mantener el motor encendido.",
      "Todas son correctas.",
    ],
    correct: 1,
  },

  // Pregunta 87
  {
    question:
      "Mientras conduce, ¿puede llevar a una persona sujetando una bicicleta desde su vehículo?",
    options: [
      "Sí, si se sujeta atrás.",
      "Sí, con medidas de seguridad.",
      "Sí, a baja velocidad.",
      "No, está prohibido y es sancionable.",
    ],
    correct: 3,
  },

  // Pregunta 88
  {
    question:
      "Para realizar competencias automovilísticas, ¿dónde está permitido?",
    options: [
      "Calles en horario nocturno.",
      "Circuitos autorizados por la autoridad competente.",
      "Calles con permiso municipal.",
      "Todas son correctas.",
    ],
    correct: 1,
  },

  // Pregunta 89
  {
    question: "¿Cuál de las siguientes conductas es una infracción?",
    options: [
      "Conducir con puertas abiertas.",
      "Circular lento por la izquierda causando congestión.",
      "Conducir en neutro.",
      "Todas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 90
  {
    question: "Las marcas en el pavimento tienen como función:",
    options: [
      "Reemplazar señales verticales.",
      "Guiar solo en zonas peligrosas.",
      "Reglamentar, advertir y guiar el tránsito.",
      "Todas son correctas.",
    ],
    correct: 2,
  },

  // Pregunta 91
  {
    question:
      "Las marcas en el pavimento de color ______ complementan señales informativas:",
    options: ["Blanco.", "Azul.", "Rojo.", "Gris."],
    correct: 1,
  },

  // Pregunta 92
  {
    question: "La línea central amarilla continua indica:",
    options: [
      "No está permitido cruzar al otro carril.",
      "Se puede adelantar.",
      "Es doble sentido y se puede cruzar.",
      "Separa carriles del mismo sentido.",
    ],
    correct: 0,
  },

  // Pregunta 93 (CON IMAGEN)
  {
    question:
      "Si circula por el carril derecho y observa la situación de la imagen, ¿qué debe hacer?",
    image: "../data/img/93.jpg",
    options: [
      "Continuar por su carril.",
      "Adelantar por la izquierda.",
      "No adelantar y mantenerse.",
      "Cambiarse al carril izquierdo con precaución.",
    ],
    correct: 3,
  },

  // Pregunta 94
  {
    question: "Si un policía solicita una prueba de alcoholemia, usted debe:",
    options: [
      "Someterse obligatoriamente a la prueba.",
      "Puede negarse.",
      "Solo es obligatorio en accidentes.",
      "Ninguna es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 95
  {
    question: "¿Cuál de las siguientes NO es una infracción?",
    options: [
      "Placa mal ubicada.",
      "Seguir vehículos de emergencia.",
      "Arrojar objetos a la vía.",
      "Detenerse en PARE sin peatones.",
    ],
    correct: 3,
  },

  // Pregunta 96
  {
    question: "Al salir de una propiedad hacia la vía, usted debe:",
    options: [
      "Dar preferencia solo a vehículos.",
      "Dar preferencia a vehículos y peatones.",
      "Usar claxon para advertir.",
      "Salir rápidamente.",
    ],
    correct: 1,
  },

  // Pregunta 97
  {
    question: "Una línea blanca continua entre carril y berma indica:",
    options: [
      "Carril exclusivo.",
      "Divide peatones y vehículos.",
      "Se puede cruzar en congestión.",
      "No debe cruzarse salvo emergencia.",
    ],
    correct: 3,
  },

  // Pregunta 98
  {
    question:
      "Si maneja de noche con neblina y tiene luces rompenieblas, debe usar:",
    options: [
      "Luces bajas junto con rompenieblas.",
      "Solo luces altas.",
      "Solo luces bajas.",
      "Ninguna es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 99
  {
    question:
      "En el caso representado en el siguiente gráfico ¿el vehículo rojo puede rebasar al azul?",
    image: "../data/img/99.jpg",
    options: [
      "Puede hacerlo si no viene un vehículo en el sentido contrario.",
      "Puede hacerlo solo si el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
      "No puede hacerlo.",
      "Puede hacerlo por la izquierda.",
    ],
    correct: 2,
  },

  // Pregunta 100
  {
    question: "La siguiente señal (R-17), significa:",
    image: "../data/img/100.jpg",
    options: [
      "Prohibido estacionar.",
      "Prohibida la circulación de vehículos automotores.",
      "Prohibida la circulación de autos particulares.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 101
  {
    question:
      "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
    image: "../data/img/101.jpg",
    options: [
      "Que la calle está clausurada.",
      "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
      "Que debe parar totalmente antes de poder ingresar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 102
  {
    question: "La siguiente señal (P-36), significa:",
    image: "../data/img/102.jpg",
    options: [
      "Proximidad de un túnel.",
      "Superficie deslizante.",
      "Prender las luces bajas.",
      "Mantener la distancia entre vehículos por seguridad.",
    ],
    correct: 1,
  },

  // Pregunta 103
  {
    question: "La siguiente señal (R-14), significa:",
    image: "../data/img/103.jpg",
    options: [
      "Circular por el carril de la derecha.",
      "Circular por el carril central.",
      "Circular solo en el sentido indicado por la flecha.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 104
  {
    question:
      "Si usted circula por una vía y se encuentra con la señal (R-11a), ésta le indica:",
    image: "../data/img/104.jpg",
    options: [
      "Que es una vía de tres carriles de un solo sentido.",
      "Que es una vía de tres carriles y usted puede utilizar solo uno de ellos.",
      "Que es una vía de tres carriles y usted puede utilizar los dos de la derecha.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 105
  {
    question: "La siguiente señal (R-30c), significa:",
    image: "../data/img/105.jpg",
    options: [
      "Que la velocidad máxima de la vía es de 50 km/h.",
      "Que la velocidad mínima de la vía es de 50 km/h.",
      "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
      "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h.",
    ],
    correct: 2,
  },

  // Pregunta 106
  {
    question: "La siguiente señal (R-5-4), significa:",
    image: "../data/img/106.jpg",
    options: [
      "Que la vía no continúa y los conductores deben girar a la izquierda.",
      "Que la intersección contiene giros tangentes a la izquierda en ambos sentidos.",
      "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 107
  {
    question: "La siguiente señal (R-9), significa:",
    image: "../data/img/107.jpg",
    options: [
      "Que no está permitido girar en U.",
      "Que está permitido el giro en U.",
      "Que si desea puede girar a la izquierda.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 108
  {
    question: "La siguiente señal (R-5-2), significa:",
    image: "../data/img/108.jpg",
    options: [
      "Que la vía solo permite girar a la izquierda.",
      "Prevención por bifurcación de la vía.",
      "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
      "No es una señal válida en el Perú.",
    ],
    correct: 2,
  },

  // Pregunta 109
  {
    question: "La siguiente señal (R-20), significa:",
    image: "../data/img/109.jpg",
    options: [
      "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
      "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
      "Que los peatones deben circular por la izquierda.",
      "Que los peatones deben circular por la derecha.",
    ],
    correct: 2,
  },

  // Pregunta 110
  {
    question: "La siguiente señal (R-40), significa:",
    image: "../data/img/110.jpg",
    options: [
      "Crucero tipo cebra.",
      "Control policial.",
      "Pavimento deslizante.",
      "Circular con luces bajas.",
    ],
    correct: 3,
  },

  // Pregunta 111
  {
    question: "La siguiente señal (R-48), significa:",
    image: "../data/img/111.jpg",
    options: [
      "Los peatones deben circular por la derecha y los camiones por la izquierda.",
      "Los peatones deben tener cuidado con los camiones.",
      "Zona de carga y descarga.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 112
  {
    question: "La siguiente señal (R-49), significa:",
    image: "../data/img/112.jpg",
    options: [
      "Está permitido cambiar de carril por la izquierda y por la derecha.",
      "Se debe mantener la distancia de seguridad entre vehículos.",
      "Está permitido cambiar de carril por la izquierda para adelantar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 113
  {
    question: "La siguiente señal (R-50), significa:",
    image: "../data/img/113.jpg",
    options: [
      "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
      "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
      "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe dar el paso al del sentido contrario.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 114
  {
    question: "La señal (R-5-1), es:",
    image: "../data/img/114.jpg",
    options: [
      "Una señal informativa.",
      "Una señal preventiva.",
      "Una señal de obligación.",
      "No es una señal válida en el Perú.",
    ],
    correct: 2,
  },

  // Pregunta 115
  {
    question: "La señal (P-3a), le indica al conductor que:",
    image: "../data/img/115.jpg",
    options: [
      "Hay una curva y contra-curva a la izquierda.",
      "Hay una curva y contra-curva a la derecha.",
      "Hay una curva y contra-curva pronunciada a la derecha.",
      "Hay una curva y contra-curva pronunciada a la izquierda.",
    ],
    correct: 2,
  },

  // Pregunta 116
  {
    question: "La siguiente señal (P-5-1a), le advierte al conductor que:",
    image: "../data/img/116.jpg",
    options: [
      "Se aproxima a una curva y contra-curva a la izquierda.",
      "Se aproxima a una curva y contra-curva a la derecha.",
      "Se aproxima a un camino sinuoso a la derecha.",
      "Se aproxima a un camino sinuoso a la izquierda.",
    ],
    correct: 3,
  },

  // Pregunta 117
  {
    question: "La siguiente señal (P-61), le advierte al conductor que:",
    image: "../data/img/117.jpg",
    options: [
      "El sentido del tránsito es el que indica la flecha.",
      "Se aproxima a una reducción de la vía en ambos sentidos.",
      "Está circulando por una curva horizontal.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 118
  {
    question: "La siguiente señal (P-34), le advierte al conductor que:",
    image: "../data/img/118.jpg",
    options: [
      "La vía está en mal estado y tiene baches.",
      "Se aproxima a un resalto.",
      "Se aproxima a un rompe muelles.",
      "Se aproxima a un badén.",
    ],
    correct: 3,
  },

  // Pregunta 119
  {
    question: "La siguiente señal (P-60), es:",
    image: "../data/img/119.jpg",
    options: [
      "Una señal turística.",
      "Una señal informativa.",
      "Una señal preventiva.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 120
  {
    question: "La siguiente señal (P-46), indica:",
    image: "../data/img/120.jpg",
    options: [
      "Existencia de una ciclovía.",
      "Autorización para el cruce de ciclistas.",
      "Ciclistas en la vía.",
      "Cercanía de una ciclovía.",
    ],
    correct: 2,
  },

  // Pregunta 121
  {
    question: "La siguiente señal (P-46a), indica:",
    image: "../data/img/121.jpg",
    options: [
      "Que los ciclistas deben usar la ciclovía.",
      "Que nos aproximamos a un cruce de ciclovía.",
      "Que la ciclovía es solo para los ciclistas.",
      "Todas las alternativas son correctas.",
    ],
    correct: 1,
  },

  // Pregunta 122
  {
    question: "La siguiente señal (P-46b), indica:",
    image: "../data/img/122.jpg",
    options: [
      "Que los ciclistas deben detenerse en ese punto.",
      "Que nos aproximamos a un cruce de ciclovía.",
      "Que la ciclovía es solo para los ciclistas.",
      "La ubicación de un cruce de ciclistas.",
    ],
    correct: 3,
  },

  // Pregunta 123
  {
    question: "La siguiente señal (P-48), indica:",
    image: "../data/img/123.jpg",
    options: [
      "Vía es de uso exclusivo de los peatones.",
      "Zona con presencia de peatones.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 124
  {
    question: "La siguiente señal (P-48a), indica:",
    image: "../data/img/124.jpg",
    options: [
      "Vía es de uso exclusivo de peatones.",
      "Proximidad a un cruce peatonal.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 125
  {
    question: "La siguiente señal (P-48b), indica:",
    image: "../data/img/125.jpg",
    options: [
      "Ubicación de un cruce escolar.",
      "Proximidad a una calzada.",
      "Ubicación de un cruce peatonal.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 126
  {
    question: "La siguiente señal (P-49), indica:",
    image: "../data/img/126.jpg",
    options: [
      "Zona escolar.",
      "Proximidad a un cruce peatonal.",
      "Zona transitada.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 127
  {
    question: "La siguiente señal (P-49a), indica:",
    image: "../data/img/127.jpg",
    options: [
      "Zona escolar.",
      "Proximidad a un cruce escolar.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 128
  {
    question: "La siguiente señal (P-49b), indica:",
    image: "../data/img/128.jpg",
    options: [
      "Zona transitada.",
      "Proximidad a un cruce peatonal.",
      "Ubicación de un cruce escolar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 129
  {
    question: "La siguiente señal (P-50), indica:",
    image: "../data/img/129.jpg",
    options: [
      "Zona de deportes.",
      "Proximidad a campo deportivo.",
      "Proximidad a zona urbana.",
      "Niños jugando.",
    ],
    correct: 3,
  },

  // Pregunta 130
  {
    question: "La siguiente señal (P-51), indica:",
    image: "../data/img/130.jpg",
    options: [
      "Zona de parqueo de vehículos pesados.",
      "Proximidad a zona rural.",
      "Maquinaria agrícola en la vía.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 131
  {
    question: "La siguiente señal (P-53), indica:",
    image: "../data/img/131.jpg",
    options: [
      "Proximidad a un establo.",
      "Proximidad a zona agrícola.",
      "Animales en la vía.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 132
  {
    question: "La siguiente señal (P-55), indica:",
    image: "../data/img/132.jpg",
    options: [
      "Semáforo malogrado.",
      "Proximidad a un semáforo.",
      "Semáforos en ola verde.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 133
  {
    question: "La siguiente señal (P-58), le indica:",
    image: "../data/img/133.jpg",
    options: [
      "Que usted se aproxima a una señal de PARE.",
      "Que usted debe parar donde está la señal P-58.",
      "Que se trata de un PARE, pero puede seguir adelante.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 134
  {
    question: "La siguiente señal (P-59), le indica:",
    image: "../data/img/134.jpg",
    options: [
      "Que usted se aproxima a una señal de CEDA EL PASO.",
      "Que usted debe ceder el paso donde está la señal P-59.",
      "Que se trata de un PARE, pero puede seguir adelante.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 135
  {
    question: "La siguiente señal (P-41), le indica:",
    image: "../data/img/135.jpg",
    options: [
      "Que usted se aproxima a una zona de camiones.",
      "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
      "Que usted se aproxima a un túnel.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 136
  {
    question: "La siguiente señal (P-45), indica:",
    image: "../data/img/136.jpg",
    options: [
      "Proximidad a un aeropuerto.",
      "Proximidad a una pista de aviones.",
      "Vuelo de aviones a baja altura.",
      "Aviones que generan ruido.",
    ],
    correct: 2,
  },

  // Pregunta 137
  {
    question: "La siguiente señal (P-52), le indica:",
    image: "../data/img/137.jpg",
    options: [
      "Que usted debe dar prioridad de paso a las ambulancias.",
      "Que usted debe dar prioridad de paso a los bomberos.",
      "Que se aproxima a una salida de vehículos de bomberos.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 138
  {
    question: "La siguiente señal (P-66), le indica:",
    image: "../data/img/138.jpg",
    options: [
      "Que se aproxima un desierto.",
      "Que se aproxima una zona donde hay ráfagas de viento lateral.",
      "Que se acerca a una zona de arenamiento en la vía.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 139
  {
    question: "La siguiente señal (P-66a), le indica:",
    image: "../data/img/139.jpg",
    options: [
      "Que se aproxima una tormenta.",
      "Que está pasando por una zona donde hay ráfagas de viento lateral.",
      "Que se acerca a una zona de arenamiento en la vía.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 140
  {
    question:
      "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    image: "../data/img/140.jpg",
    options: [
      "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
      "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 141
  {
    question:
      "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    image: "../data/img/141.jpg",
    options: [
      "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
      "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo una cuadra antes.",
      "En esa dirección hay una zona de parqueo.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 142
  {
    question: "La siguiente señal (I-14), significa:",
    image: "../data/img/142.jpg",
    options: [
      "Señal de hostal.",
      "Señal de hospedaje.",
      "Señal de hospital.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 143
  {
    question: "La siguiente señal (I-31), significa:",
    image: "../data/img/143.jpg",
    options: [
      "Proximidad de una bahía de taxis.",
      "Proximidad a un estacionamiento permitido.",
      "Proximidad de una zona de parqueo para vecinos.",
      "Proximidad de un estacionamiento para emergencias.",
    ],
    correct: 3,
  },

  // Pregunta 144
  {
    question: "La siguiente señal (I-9), significa:",
    image: "../data/img/144.jpg",
    options: [
      "Zona de control policial.",
      "Zona de control de aduanas.",
      "Zona militar.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 145
  {
    question: "La siguiente señal (I-18), se utiliza para indicar:",
    image: "../data/img/145.jpg",
    options: [
      "Cercanía a una ferretería.",
      "Cercanía a un servicio mecánico.",
      "Cercanía a un grifo.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 146
  {
    question: "La siguiente señal (I-19), se utiliza para indicar:",
    image: "../data/img/146.jpg",
    options: [
      "Cercanía a un servicio mecánico.",
      "Cercanía a una tienda.",
      "Cercanía a un grifo.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 147
  {
    question: "La siguiente señal (I-20), se utiliza para indicar:",
    image: "../data/img/147.jpg",
    options: [
      "Cercanía a un servicio mecánico.",
      "Cercanía a una zona donde debe circular con cadenas en las llantas.",
      "Cercanía a un grifo.",
      "Cercanía a una llantería.",
    ],
    correct: 3,
  },

  // Pregunta 148
  {
    question: "La siguiente señal (R-16a), se utiliza para indicar:",
    image: "../data/img/148.jpg",
    options: [
      "Fin de la restricción de circulación de automotores.",
      "Fin de la restricción de prohibido adelantar.",
      "Fin de la restricción de circulación en doble sentido.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 149
  {
    question:
      "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
    options: [
      "Valor por la vida.",
      "Respeto por la integridad física del resto de los usuarios.",
      "Respeto a la autoridad encargada de la vigilancia y disciplina de tránsito.",
      "Todas las alternativas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 150
  {
    question:
      "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
    options: [
      "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
      "Únicamente los peatones y ciclistas.",
      "Únicamente los peatones y niños.",
      "Todas las alternativas son correctas, con excepción de los ciclistas.",
    ],
    correct: 0,
  },

  // Pregunta 151
  {
    question: "La siguiente señal (P-61), muestra:",
    image: "../data/img/151.jpg",
    options: [
      "Flechas retroreflectivas que indican peligro.",
      "Delineadores de curva, que guían al conductor.",
      "Advertencia al conductor sobre la proximidad de un puente.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 152
  {
    question:
      "Si usted es titular de una licencia particular A-I, está autorizado a conducir el siguiente vehículo:",
    options: [
      "Camión, tipo volquete.",
      "Ómnibus, tipo panorámico.",
      "Mototaxi.",
      "Automóvil, tipo sedan.",
    ],
    correct: 3,
  },

  // Pregunta 153
  {
    question: "Mientras la persona conduce, le está permitido:",
    options: [
      "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad.",
      "Que otra persona tome el control de la dirección del vehículo.",
      "Conducir con una mano sobre el volante, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 154
  {
    question:
      "El conductor está ________ a ________ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicación por alcohol, drogas, estupefacientes u otros tóxicos.",
    options: [
      "En su derecho - negarse.",
      "Facultado - rechazar.",
      "Obligado - someterse.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 155
  {
    question:
      "Ante un conductor con evidente discapacidad física, la cual no figura en el rubro de restricciones de su licencia de conducir, procede:",
    options: [
      "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación.",
      "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
      "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
      "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo.",
    ],
    correct: 0,
  },

  // Pregunta 156
  {
    question:
      "¿Una persona con discapacidad física puede obtener una licencia de conducir particular?",
    options: [
      "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente.",
      "No, está terminantemente prohibido.",
      "Depende del criterio del centro de emisión de la licencia de conducir.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 157
  {
    question: "¿Puede una persona menor de edad conducir un vehículo?",
    options: [
      "Nunca.",
      "Sí, siempre y cuando vaya acompañada de una persona mayor de edad y titular de una licencia de conducir.",
      "No, salvo que conduzca un vehículo de dimensión reducida.",
      "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir.",
    ],
    correct: 3,
  },

  // Pregunta 158
  {
    question:
      "Es una obligación general de tránsito que, los ________, las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
    options: [
      "Peatones - los letreros instalados en las vías públicas.",
      "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
      "Vehículos - los medios de comunicación.",
      "Menores de edad - los adultos mayores.",
    ],
    correct: 1,
  },

  // Pregunta 159
  {
    question: "Marque la afirmación incorrecta:",
    options: [
      "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda dificultar la circulación.",
      "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la vía.",
      "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día.",
      "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones para evitar mojar la acera y los peatones.",
    ],
    correct: 2,
  },

  // Pregunta 160
  {
    question:
      "Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a la norma el límite máximo de velocidad en dicha vía es de 60 km/h, usted:",
    options: [
      "Debe obedecer la señal de velocidad instalada en la vía.",
      "Puede ir a una velocidad máxima de 60 km/h.",
      "Debe ir a una velocidad máxima de 60 km/h.",
      "Debe ir a una velocidad entre 50 y 60 km/h.",
    ],
    correct: 0,
  },

  // Pregunta 161
  {
    question: "Sobre la conducción en retroceso, marque la opción correcta:",
    options: [
      "Está prohibida, salvo en casos estrictamente justificados.",
      "Nunca debe realizarse.",
      "Está permitida.",
      "Está permitida, salvo en carreteras.",
    ],
    correct: 0,
  },

  // Pregunta 162
  {
    question:
      "El uso de la luz ________ es obligatorio en ________, debiendo cambiar por luz ________ momentos previos al cruce con otro vehículo que circule en sentido contrario.",
    options: [
      "Baja - carreteras - alta.",
      "Alta - vías urbanas - baja.",
      "Rompenieblas - carreteras - baja.",
      "Alta - carreteras - baja.",
    ],
    correct: 3,
  },

  // Pregunta 163
  {
    question: "Indique la conducta permitida:",
    options: [
      "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
      "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
      "El estacionamiento de un vehículo después de 1 metro de un paso peatonal.",
      "El estacionamiento de un vehículo sobre las aceras.",
    ],
    correct: 1,
  },

  // Pregunta 164
  {
    question: "Se considera el abandono de un vehículo cuando:",
    options: [
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 72 horas.",
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 96 horas.",
      "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 48 horas.",
      "La norma de tránsito no establece nada sobre el abandono del vehículo.",
    ],
    correct: 2,
  },

  // Pregunta 165
  {
    question: "Al transportar carga en su vehículo, usted debe:",
    options: [
      "Asegurarse, en caso la carga sobresalga lateralmente de la carrocería, esté bien sujeta.",
      "Evitar todo riesgo de caída de la carga que sobresale lateralmente de la carrocería.",
      "Tratar que la carga no sea arrastrada.",
      "Asegurarse que la carga no sobrepase las dimensiones de la carrocería.",
    ],
    correct: 3,
  },

  // Pregunta 166
  {
    question:
      "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
    options: [
      "Está permitida.",
      "Está prohibida, en un índice superior al límite máximo que permite la norma.",
      "Está prohibida en el ámbito urbano.",
      "La norma no regula sobre ello.",
    ],
    correct: 1,
  },

  // Pregunta 167
  {
    question:
      "La autoridad competente, __________ puede prohibir o restringir __________ en determinadas vías públicas.",
    options: [
      "Cuando la situación lo justifique - la circulación o estacionamiento de vehículos.",
      "Aun cuando la situación lo justifique no - circulación o estacionamiento de vehículos.",
      "No se encuentra facultada ni - circulación de vehículos.",
      "Únicamente con el consentimiento del conductor - circulación de vehículos.",
    ],
    correct: 0,
  },

  // Pregunta 168
  {
    question:
      "Si al conducir en una carretera de noche se aproxima un vehículo en sentido contrario; usted debe:",
    options: [
      "Cambiar de luces bajas a luces altas.",
      "Encender las luces de emergencia.",
      "Cambiar de luces altas a luces bajas.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 169
  {
    question: "La detención de un vehículo debe efectuarse:",
    options: [
      "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
      "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces altas.",
      "En el sentido de la circulación y en el carril izquierdo de la vía, utilizando las luces intermitentes.",
      "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces intermitentes.",
    ],
    correct: 3,
  },

  // Pregunta 170
  {
    question:
      "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
    options: [
      "Acudir a la estación de bomberos.",
      "Llamar a un familiar.",
      "Solicitar la intervención de la autoridad policial.",
      "Abandonar el lugar donde ocurrió el accidente.",
    ],
    correct: 2,
  },

  // Pregunta 171
  {
    question:
      "El conductor antes de iniciar la conducción de un vehículo no está obligado a:",
    options: [
      "Portar la tarjeta de identificación vehicular del vehículo que conduce.",
      "Portar y exhibir la Placa Única de Rodaje.",
      "Constatar que el vehículo tiene SOAT vigente.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 3,
  },

  // Pregunta 172
  {
    question:
      "La __________ faculta y autoriza la circulación del vehículo por la vía pública, identifica el bien y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
    options: [
      "Tarjeta de identificación vehicular.",
      "Municipalidad provincial.",
      "La Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT.",
      "Placa Única Nacional de Rodaje.",
    ],
    correct: 3,
  },

  // Pregunta 173
  {
    question:
      "A fin de determinar la presencia de alcohol o sustancias estupefacientes en el conductor, el efectivo de la Policía de Tránsito puede exigirle al momento de la intervención:",
    options: [
      "Que realice pruebas de coordinación y equilibrio.",
      "Uso del alcoholímetro.",
      "Prueba de alcoholemia.",
      "Todas las alternativas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 174
  {
    question:
      "¿El Reglamento Nacional de Tránsito considera la reincidencia en las infracciones de tránsito?",
    options: [
      "No, el conductor puede cometer la misma infracción varias veces y la sanción será la misma.",
      "Sí, cuando el conductor comete la misma infracción dentro de los 12 meses será sancionado con el doble de la multa.",
      "Solo en los casos en que se cometan infracciones gravísimas.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 175
  {
    question:
      "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
    options: ["06 meses.", "12 meses.", "24 meses.", "36 meses."],
    correct: 1,
  },

  // Pregunta 176
  {
    question:
      "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
    options: [
      "Tramitar el duplicado de su licencia de conducir.",
      "Tramitar la revalidación de su licencia de conducir.",
      "Tramitar la recategorización de su licencia de conducir.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 3,
  },

  // Pregunta 177
  {
    question:
      "Las __________ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía.",
    options: [
      "Señales de localización.",
      "Señales de salida inmediata.",
      "Señales de servicios generales.",
      "Señales ordinarias.",
    ],
    correct: 2,
  },

  // Pregunta 178
  {
    question:
      "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
    options: [
      "No constituye una infracción.",
      "Solo cuando la licencia ha sido retenida por una infracción muy grave.",
      "Sí, constituye una infracción.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 2,
  },

  // Pregunta 179
  {
    question:
      "Las marcas en el pavimento constituyen la señalización __________ y se emplean para __________ la circulación.",
    options: [
      "Horizontal - reglamentar.",
      "Vertical - reglamentar.",
      "Más importante - mejorar.",
      "Menos importante - adornar.",
    ],
    correct: 0,
  },

  // Pregunta 180
  {
    question: "Ciclista es a ciclovía como:",
    options: [
      "Conductor - acera.",
      "Conductor - calzada.",
      "Conductor - berma.",
      "Peatón - autopista.",
    ],
    correct: 1,
  },

  // Pregunta 181
  {
    question:
      "La siguiente señal (P-15), se utiliza para advertir al conductor:",
    image: "../data/img/181.jpg",
    options: [
      "La proximidad a una vía de tres carriles.",
      "La proximidad a un huracán.",
      "La proximidad a un camino sinuoso.",
      "La proximidad de una intersección rotatoria (óvalo o rotonda).",
    ],
    correct: 3,
  },

  // Pregunta 182
  {
    question: "La siguiente señal (P-31a), indica:",
    image: "../data/img/182.jpg",
    options: [
      "La proximidad del final de la vía.",
      "La proximidad de una vía asfaltada.",
      "La proximidad de una pendiente leve.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 183
  {
    question:
      "Es una línea transversal a la calzada que indica al conductor que debe detener completamente el vehículo:",
    options: [
      "Línea de carril.",
      "Línea de borde de calzada.",
      "Línea de pare.",
      "Todas las alternativas son correctas.",
    ],
    correct: 2,
  },

  // Pregunta 184
  {
    question: "Los semáforos son:",
    options: [
      "Dispositivos de control del tránsito que regulan y controlan el tránsito vehicular, motorizado y no motorizado, y el peatonal.",
      "Dispositivos que regulan únicamente el tránsito vehicular.",
      "Señales de color rojo, verde y amarillo para regular la corriente vehicular.",
      "Artefactos que emiten luces de colores.",
    ],
    correct: 0,
  },

  // Pregunta 185
  {
    question:
      "La conducción requiere un alto nivel de atención, pues existen distracciones como:",
    options: [
      "Preocupaciones.",
      "Uso del teléfono celular.",
      "Manipulación de la radio.",
      "Todas las alternativas son correctas.",
    ],
    correct: 3,
  },

  // Pregunta 186
  {
    question: "¿Influye la somnolencia en la capacidad de conducir?",
    options: [
      "Sí, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
      "Sí, ya que el conductor está de mal genio.",
      "No, siempre que conduzca lentamente.",
      "No, si va acompañado.",
    ],
    correct: 0,
  },

  // Pregunta 187
  {
    question:
      "¿Cuál es la acción correcta del conductor en la situación mostrada?",
    image: "../data/img/187.jpg",
    options: [
      "Girar rápidamente antes que el peatón cruce.",
      "Dar preferencia de paso al peatón.",
      "Girar lentamente antes que el peatón cruce.",
      "Tocar el claxon para que no cruce.",
    ],
    correct: 1,
  },

  // Pregunta 188
  {
    question:
      "¿En cuál de las siguientes opciones, los factores contribuyen a una colisión vehicular?",
    options: [
      "Pavimento seco, somnolencia, frenos desgastados.",
      "Pavimento húmedo, neumáticos desgastados, cansancio.",
      "Reductores de velocidad, falta de atención, uso del celular.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 1,
  },

  // Pregunta 189
  {
    question:
      "La __________ es la parte de una carretera contigua a la calzada destinada a detenciones de emergencia.",
    options: ["Berma.", "Autopista.", "Acera.", "Demarcación."],
    correct: 0,
  },

  // Pregunta 190
  {
    question: "Es una parte de la vía destinada a la circulación de vehículos:",
    options: [
      "La calzada.",
      "La acera.",
      "La berma.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 191
  {
    question: "Es una parte de la vía destinada al uso de peatones:",
    options: ["La acera.", "La calzada.", "La berma.", "La autopista."],
    correct: 0,
  },

  // Pregunta 192
  {
    question: "Son señales que regulan el tránsito:",
    options: [
      "Las bocinas y marcas en la calzada.",
      "Las bocinas y señales verticales.",
      "Las señales verticales, marcas en la calzada o señales horizontales y las bocinas.",
      "Las señales verticales y las marcas en la calzada o señales horizontales.",
    ],
    correct: 3,
  },

  // Pregunta 193
  {
    question: "Los vehículos deben ser conducidos con:",
    options: [
      "Puertas y capot cerrados, permitiendo maletera entreabierta.",
      "Puertas, capot y maletera cerrados.",
      "Puertas y maletera cerradas, salvo autorización especial.",
      "Capot y maletera cerrados, permitiendo puertas entreabiertas.",
    ],
    correct: 1,
  },

  // Pregunta 194
  {
    question:
      "En vía urbana, la señal direccional debe realizarse por lo menos:",
    options: [
      "2 segundos antes.",
      "1 metro antes.",
      "20 metros antes.",
      "3 metros antes.",
    ],
    correct: 2,
  },

  // Pregunta 195
  {
    question:
      "En carretera, la señal direccional debe realizarse por lo menos:",
    options: [
      "2 segundos antes.",
      "2 metros antes.",
      "30 metros antes.",
      "1 metro antes.",
    ],
    correct: 2,
  },

  // Pregunta 196
  {
    question: "La licencia A-I permite conducir motos:",
    options: ["Sí.", "No.", "Solo en zona urbana.", "Solo en carretera."],
    correct: 1,
  },

  // Pregunta 197
  {
    question: "El siguiente gráfico muestra:",
    image: "../data/img/197.jpg",
    options: [
      "Señalización vertical y horizontal en zona escolar.",
      "Solo señalización vertical.",
      "Solo señalización horizontal.",
      "Ninguna de las alternativas es correcta.",
    ],
    correct: 0,
  },

  // Pregunta 198
  {
    question:
      "Las __________ canalizadoras conforman islas de tránsito en una __________.",
    options: [
      "Islas - vía.",
      "Líneas - intersección.",
      "Vías - intersección.",
      "Todas las alternativas.",
    ],
    correct: 1,
  },

  // Pregunta 199
  {
    question: "La malla amarilla en una intersección indica:",
    image: "../data/img/199.jpg",
    options: [
      "Que no debe detener el vehículo dentro del área.",
      "Que hay trabajos de emergencia.",
      "Que puede detenerse dentro del área.",
      "Que es zona peatonal.",
    ],
    correct: 0,
  },

  // Pregunta 200
  {
    question: "De acuerdo al gráfico, es correcto afirmar que:",
    image: "../data/img/200.jpg",
    options: [
      "La zona de adelantamiento inicia con líneas continuas.",
      "Se puede estacionar en líneas continuas.",
      "La zona de no adelantar inicia con líneas continuas.",
      "El camión puede estacionarse antes de la línea.",
    ],
    correct: 2,
  },
];
