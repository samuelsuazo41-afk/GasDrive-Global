// ========== GASDRIVE DGT V10.5.2 ES - BLOQUE DATOS ==========
// === INICIO BLOQUE DATOS - NO TOCAR AL EDITAR LÓGICA ===
// Aquí van TODOS tus bancos. Solo los pegas 1 vez y te olvidas.

const DATOS = {
 senales: [
  {q: "¿Qué significa la señal R-1?", a: ["Stop","Ceda el paso","Prohibido entrar"], ok: 0, codigo: "r-1"},
  {q: "¿Qué significa la señal R-2?", a: ["Ceda el paso","Parada obligatoria total","Ceda en intersección"], ok: 0, codigo: "r-2"},
  {q: "¿Qué indica la señal R-3?", a: ["Fin de prioridad","Calzada con prioridad","Intersección con prioridad"], ok: 1, codigo: "r-3"},
  {q: "¿Qué indica la señal R-4?", a: ["Inicio de prioridad","Fin de calzada con prioridad","Ceda el paso"], ok: 1, codigo: "r-4"},
  {q: "¿Qué significa la señal R-5?", a: ["Usted tiene prioridad","Prioridad para sentido contrario","Stop obligatorio"], ok: 0, codigo: "r-5"},
  {q: "¿Qué significa la señal R-6?", a: ["Ceda el paso","Tiene prioridad respecto al sentido contrario","Prohibido pasar"], ok: 1, codigo: "r-6"},
  {q: "¿Qué significa la señal R-101?", a: ["Obligación de girar","Prohibición de entrada a toda clase de vehículos","Fin de prohibiciones"], ok: 1, codigo: "r-101"},
  {q: "¿Qué significa la señal R-102?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a vehículos de motor","Prohibida entrada a peatones"], ok: 1, codigo: "r-102"},
  {q: "¿Qué significa la señal R-103?", a: ["Prohibida entrada a turismos","Prohibida entrada a camiones","Prohibida entrada a autobuses"], ok: 0, codigo: "r-103"},
  {q: "¿Qué significa la señal R-104?", a: ["Prohibida entrada a ciclomotores","Prohibida entrada a motocicletas","Prohibida entrada a turismos"], ok: 1, codigo: "r-104"},
  {q: "¿Qué significa la señal R-105?", a: ["Prohibida entrada a turismos","Prohibida entrada a camiones","Prohibida entrada a autobuses"], ok: 1, codigo: "r-105"},
  {q: "¿Qué significa la señal R-106?", a: ["Prohibida entrada a camiones","Prohibida entrada a autobuses","Prohibida entrada a taxis"], ok: 0, codigo: "r-106"},
  {q: "¿Qué significa la señal R-107?", a: ["Prohibida entrada a motocicletas","Prohibida entrada a bicicletas","Prohibida entrada a peatones"], ok: 2, codigo: "r-107"},
  {q: "¿Qué significa la señal R-108?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a ciclomotores","Prohibida entrada a motocicletas"], ok: 0, codigo: "r-108"},
  {q: "¿Qué significa la señal R-109?", a: ["Prohibida entrada a vehículos agrícolas","Prohibida entrada a turismos","Prohibida entrada a autobuses"], ok: 0, codigo: "r-109"},
  {q: "¿Qué significa la señal R-110?", a: ["Prohibida entrada a carros de mano","Prohibida entrada a peatones","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-110"},
  {q: "¿Qué significa la señal R-111?", a: ["Prohibida entrada a camiones","Prohibida entrada a vehículos agrícolas","Prohibida entrada a autobuses"], ok: 1, codigo: "r-111"},
  {q: "¿Qué significa la señal R-112?", a: ["Prohibida entrada a peatones","Prohibida entrada a animales de montura","Prohibida entrada a bicicletas"], ok: 1, codigo: "r-112"},
  {q: "¿Qué significa la señal R-113?", a: ["Prohibida entrada a peatones","Prohibida entrada a carros de mano","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-113"},
  {q: "¿Qué significa la señal R-114?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a peatones","Prohibida entrada a motos"], ok: 0, codigo: "r-114"},
  {q: "¿Qué significa la señal R-115?", a: ["Prohibida entrada a animales sueltos","Prohibida entrada a peatones","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-115"},
  {q: "¿Qué significa la señal R-116?", a: ["Prohibida entrada a peatones","Prohibida entrada a animales sueltos","Prohibida entrada a bicicletas"], ok: 1, codigo: "r-116"},
  {q: "¿Qué significa la señal R-300?", a: ["Velocidad mínima 50 km/h","Velocidad máxima 50 km/h","Velocidad recomendada 50 km/h"], ok: 1, codigo: "r-300"},
  {q: "¿Qué significa la señal R-301?", a: ["Inicio limitación 50","Fin de limitación de velocidad máxima","Nueva limitación 50"], ok: 1, codigo: "r-301"},
  {q: "¿Qué significa la señal R-302?", a: ["Giro izquierda permitido","Prohibido girar a la izquierda","Obligatorio girar izquierda"], ok: 1, codigo: "r-302"},
  {q: "¿Qué significa la señal R-303?", a: ["Giro derecha permitido","Prohibido girar a la derecha","Obligatorio girar derecha"], ok: 1, codigo: "r-303"},
  {q: "¿Qué significa la señal R-304?", a: ["Cambio sentido permitido","Prohibido efectuar cambio de sentido","Obligatorio cambio sentido"], ok: 1, codigo: "r-304"},
  {q: "¿Qué significa la señal R-305?", a: ["Adelantamiento permitido","Prohibido adelantar","Obligatorio adelantar"], ok: 1, codigo: "r-305"},
  {q: "¿Qué significa la señal R-306?", a: ["Inicio prohibición","Fin de prohibición de adelantar","Adelantamiento obligatorio"], ok: 1, codigo: "r-306"},
  {q: "¿Qué significa la señal R-307?", a: ["Prohibido turismos adelantar","Prohibido adelantar a camiones","Prohibido autobuses adelantar"], ok: 1, codigo: "r-307"},
  {q: "¿Qué significa la señal R-308?", a: ["Inicio prohibición camiones","Fin de prohibición de adelantar a camiones","Turismos pueden adelantar"], ok: 1, codigo: "r-308"},
  {q: "¿Qué significa la señal R-309?", a: ["Zona adelantar permitido","Zona con prohibición de adelantar","Fin prohibición adelantar"], ok: 1, codigo: "r-309"},
  {q: "¿Qué significa la señal R-310?", a: ["Uso obligatorio claxon","Prohibido uso de señales acústicas","Fin prohibición claxon"], ok: 1, codigo: "r-310"},
  {q: "¿Qué significa la señal R-311?", a: ["Velocidad mínima 30 km/h","Velocidad máxima 30 km/h","Fin velocidad mínima"], ok: 0, codigo: "r-311"},
  {q: "¿Qué significa la señal R-400?", a: ["Prohibición","Sentido obligatorio","Fin de obligación"], ok: 1, codigo: "r-400"},
  {q: "¿Qué significa la señal R-401?", a: ["Prohibido girar derecha","Sentido obligatorio a la derecha","Giro derecha recomendado"], ok: 1, codigo: "r-401"},
  {q: "¿Qué significa la señal R-402?", a: ["Prohibido girar izquierda","Sentido obligatorio a la izquierda","Giro izquierda recomendado"], ok: 1, codigo: "r-402"},
  {q: "¿Qué significa la señal R-403?", a: ["Prohibido pasar derecha","Paso obligatorio por la derecha del obstáculo","Fin obligación"], ok: 1, codigo: "r-403"},
  {q: "¿Qué significa la señal R-404?", a: ["Prohibido pasar izquierda","Paso obligatorio por la izquierda del obstáculo","Fin obligación"], ok: 1, codigo: "r-404"},
  {q: "¿Qué significa la señal R-405?", a: ["Giro obligatorio","Sentido obligatorio de frente","Prohibido recto"], ok: 1, codigo: "r-405"},
  {q: "¿Qué significa la señal R-406?", a: ["Prohibido recto","Sentido obligatorio a la derecha o izquierda","Obligatorio girar"], ok: 1, codigo: "r-406"},
  {q: "¿Qué significa la señal R-407?", a: ["Prohibido encender luces","Vía obligatoria para ciclistas","Vía recomendada ciclistas"], ok: 1, codigo: "r-407"},
  {q: "¿Qué significa la señal R-408?", a: ["Prohibido peatones","Vía obligatoria para peatones","Solo bicicletas"], ok: 1, codigo: "r-408"},
  {q: "¿Qué significa la señal R-409?", a: ["Prohibido peatones","Vía obligatoria para peatones y ciclos","Solo peatones"], ok: 1, codigo: "r-409"},
  {q: "¿Qué significa la señal R-410?", a: ["Prohibido peatones","Vía obligatoria para peatones y ciclos","Solo peatones"], ok: 1, codigo: "r-410"},
  {q: "¿Qué significa la señal R-411?", a: ["Velocidad máxima 30","Velocidad mínima 30 km/h","Fin velocidad mínima"], ok: 1, codigo: "r-411"},
  {q: "¿Qué significa la señal R-412?", a: ["Inicio velocidad mínima","Fin de velocidad mínima","Nueva velocidad mínima"], ok: 0, codigo: "r-412"},
  {q: "¿Qué significa la señal R-413?", a: ["Prohibido encender luces","Uso obligatorio alumbrado de cruce","Recomendado luces"], ok: 1, codigo: "r-413"},
  {q: "¿Qué significa la señal R-414?", a: ["Inicio obligación luces","Fin uso obligatorio alumbrado de cruce","Luces prohibidas"], ok: 1, codigo: "r-414"},
  {q: "¿Qué significa la señal R-415?", a: ["Prohibido cadenas","Cadenas para nieve obligatorias","Cadenas recomendadas"], ok: 1, codigo: "r-415"},
  {q: "¿Qué significa la señal R-416?", a: ["Inicio cadenas","Fin cadenas para nieve obligatorias","Cadenas recomendadas"], ok: 1, codigo: "r-416"},
  {q: "¿Qué significa la señal R-417?", a: ["Prohibido cinturón","Uso obligatorio cinturón de seguridad","Cinturón recomendado"], ok: 1, codigo: "r-417"},
  {q: "¿Qué significa la señal R-418?", a: ["Prohibido coches","Vía reservada para automóviles","Vía recomendada coches"], ok: 1, codigo: "r-418"},
  {q: "¿Qué significa la señal R-419?", a: ["Prohibido camiones","Vía reservada para camiones","Vía recomendada camiones"], ok: 1, codigo: "r-419"},
  {q: "¿Qué significa la señal R-420?", a: ["Prohibido autobuses","Vía reservada para autobuses","Vía recomendada autobuses"], ok: 1, codigo: "r-420"},
  {q: "¿Qué significa la señal R-421?", a: ["Prohibido taxis","Vía reservada para taxis","Vía recomendada taxis"], ok: 1, codigo: "r-421"},
  {q: "¿Qué significa la señal R-422?", a: ["Inicio vía reservada","Fin vía reservada para automóviles","Vía compartida"], ok: 0, codigo: "r-422"},
  {q: "¿Qué indica la señal P-1?", a: ["Peligro específico","Peligro indefinido","Fin peligro"], ok: 1, codigo: "p-1"},
  {q: "¿Qué indica la señal P-2?", a: ["Intersección sin prioridad","Intersección con prioridad a la derecha","Ceda el paso"], ok: 0, codigo: "p-2"},
  {q: "¿Qué indica la señal P-3?", a: ["Semáforo apagado","Peligro por proximidad de semáforos","Prohibido semáforos"], ok: 1, codigo: "p-3"},
  {q: "¿Qué indica la señal P-4?", a: ["Prohibido girar","Intersección de sentido giratorio obligatorio","Ceda en rotonda"], ok: 1, codigo: "p-4"},
  {q: "¿Qué indica la señal P-13a?", a: ["Curva suave derecha","Curva peligrosa a la derecha","Giro obligatorio derecha"], ok: 1, codigo: "p-13a"},
  {q: "¿Qué indica la señal P-13b?", a: ["Curva suave izquierda","Curva peligrosa a la izquierda","Giro obligatorio izquierda"], ok: 1, codigo: "p-13b"},
  {q: "¿Qué indica la señal P-14a?", a: ["Curva única","Sucesión de curvas peligrosas, primera a derecha","Prohibido curvar"], ok: 1, codigo: "p-14a"},
  {q: "¿Qué indica la señal P-14b?", a: ["Curva única","Sucesión de curvas peligrosas, primera a izquierda","Prohibido curvar"], ok: 1, codigo: "p-14b"},
  {q: "¿Qué indica la señal P-15?", a: ["Calzada lisa","Perfil irregular de la calzada, badenes","Zona obras"], ok: 1, codigo: "p-15"},
  {q: "¿Qué indica la señal P-16a?", a: ["Ascenso pendiente","Descenso con fuerte pendiente","Curva peligrosa"], ok: 1, codigo: "p-16a"},
  {q: "¿Qué indica la señal P-16b?", a: ["Descenso pendiente","Ascenso con fuerte pendiente","Curva peligrosa"], ok: 0, codigo: "p-16b"},
  {q: "¿Qué indica la señal P-17?", a: ["Ensanchamiento calzada","Estrechamiento de calzada","Puente estrecho"], ok: 1, codigo: "p-17"},
  {q: "¿Qué indica la señal P-20?", a: ["Prohibido peatones","Peligro por proximidad de paso de peatones","Zona peatonal"], ok: 1, codigo: "p-20"},
  {q: "¿Qué indica la señal P-21?", a: ["Zona escolar, peligro por proximidad de niños","Parque infantil","Prohibido niños"], ok: 0, codigo: "p-21"},
  {q: "¿Qué indica la señal P-22?", a: ["Prohibido bicis","Peligro por proximidad de ciclistas","Carril bici"], ok: 1, codigo: "p-22"},
  {q: "¿Qué indica la señal P-23?", a: ["Prohibido animales","Peligro por proximidad de animales domésticos","Granja"], ok: 1, codigo: "p-23"},
  {q: "¿Qué indica la señal P-24?", a: ["Prohibido cazar","Peligro por proximidad de animales salvajes","Zona zoo"], ok: 1, codigo: "p-24"},
  {q: "¿Qué indica la señal P-25?", a: ["Sentido único","Circulación en ambos sentidos","Prohibido adelantar"], ok: 1, codigo: "p-25"},
  {q: "¿Qué indica la señal P-26?", a: ["Zona segura","Zona con desprendimientos","Prohibido parar"], ok: 1, codigo: "p-26"},
  {q: "¿Qué indica la señal P-27?", a: ["Calzada asfaltada","Peligro por proyección de gravilla","Zona obras"], ok: 1, codigo: "p-27"},
  {q: "¿Qué indica la señal P-28?", a: ["Calzada asfaltada","Peligro por proyección de gravilla","Zona obras"], ok: 1, codigo: "p-28"},
  {q: "¿Qué indica la señal P-29?", a: ["Viento frontal","Peligro por viento lateral fuerte","Prohibido circular"], ok: 1, codigo: "p-29"},
  {q: "¿Qué indica la señal P-30?", a: ["Baden","Peligro por escalón lateral en la calzada","Zona obras"], ok: 1, codigo: "p-30"},
  {q: "¿Qué indica la señal P-31?", a: ["Vía libre","Peligro por congestión de tráfico","Fin congestión"], ok: 1, codigo: "p-31"},
  {q: "¿Qué indica la señal P-32?", a: ["Calzada libre","Peligro por obstrucción en la calzada","Prohibido parar"], ok: 1, codigo: "p-32"},
  {q: "¿Qué indica la señal P-33?", a: ["Día claro","Peligro por visibilidad reducida, niebla","Túnel"], ok: 1, codigo: "p-33"},
  {q: "¿Qué indica la señal P-34?", a: ["Pavimento mojado","Pavimento deslizante por hielo o nieve","Zona obras"], ok: 1, codigo: "p-34"},
  {q: "¿Qué indica la señal P-50?", a: ["Peligro concreto","Peligro por otros motivos","Fin peligros"], ok: 1, codigo: "p-50"},
  {q: "¿Qué indica la señal S-50?", a: ["Carril bus","Carriles reservados sentido contrario al habitual","Carril bici"], ok: 1, codigo: "s-50"},
  {q: "¿Qué indica la señal S-114?", a: ["Prohibido estacionar","Aparcamiento","Parada bus"], ok: 1, codigo: "s-114"},
  {q: "¿Qué indica la señal S-115?", a: ["Aparcamiento","Aparcamiento cubierto","Prohibido aparcar"], ok: 0, codigo: "s-115"},
  {q: "¿Qué indica la señal S-116?", a: ["Aparcamiento","Aparcamiento vigilado","Prohibido aparcar"], ok: 0, codigo: "s-116"},
  {q: "¿Qué indica la señal S-117?", a: ["Hotel","Hospital","Helipuerto"], ok: 1, codigo: "s-117"},
  {q: "¿Qué indica la señal S-118?", a: ["Hospital","Puesto de socorro","Farmacia"], ok: 1, codigo: "s-118"},
  {q: "¿Qué indica la señal S-119?", a: ["Taller","Báscula para camiones","Gasolinera"], ok: 0, codigo: "s-119"},
  {q: "¿Qué indica la señal S-120?", a: ["Hotel","Control de policía","Aduana"], ok: 1, codigo: "s-120"},
  {q: "¿Qué indica la señal S-121?", a: ["Gasolinera","Extintor de incendios","Taller"], ok: 1, codigo: "s-121"},
  {q: "¿Qué indica la señal S-122?", a: ["Información","Salida de emergencia","Prohibición"], ok: 0, codigo: "s-122"},
  {q: "¿Qué indica la señal S-123?", a: ["Gasolinera","Área de servicio completa","Hotel"], ok: 1, codigo: "s-123"},
  {q: "¿Qué indica la señal S-124?", a: ["Gasolinera","Punto de recarga vehículo eléctrico","Taller"], ok: 1, codigo: "s-124"},
  {q: "¿Qué indica la señal S-125?", a: ["Hotel","Punto de información turística","Policía"], ok: 1, codigo: "s-125"},
  {q: "¿Qué indica la señal S-126?", a: ["Taller","Centro inspección técnica vehículos","Gasolinera"], ok: 1, codigo: "s-126"},
  {q: "¿Qué indica la señal S-230?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-230"},
  {q: "¿Qué indica la señal S-231?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-231"},
  {q: "¿Qué indica la señal S-232?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-232"},
  {q: "¿Qué indica la señal S-233?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-233"},
  {q: "¿Qué indica la señal S-234?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-234"},
  {q: "¿Qué indica la señal S-235?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-235"},
  {q: "¿Qué indica la señal S-236?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-236"},
  {q: "¿Qué indica la señal S-237?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-237"},
  {q: "¿Qué indica la señal S-238?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-238"},
  {q: "¿Qué indica la señal S-239?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-239"},
  {q: "¿Qué indica la señal S-240?", a: ["Carril de aceleración","Carril de deceleración","Prohibido incorporar"], ok: 0, codigo: "s-240"},
  {q: "¿Qué indica la señal S-241?", a: ["Carril de aceleración","Carril de deceleración","Prohibido salir"], ok: 0, codigo: "s-241"},
  {q: "¿Qué indica la señal S-200?", a: ["Calle sin salida","Dirección obligatoria","Prohibido pasar"], ok: 0, codigo: "s-200"},
  {q: "¿Qué indica la señal S-201?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-201"},
  {q: "¿Qué indica la señal S-202?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-202"},
  {q: "¿Qué indica la señal S-203?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-203"},
  {q: "¿Qué indica la señal S-204?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-204"},
  {q: "¿Qué indica la señal S-205?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-205"},
  {q: "¿Qué significa la señal S-206?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-206"},
  {q: "¿Qué significa la señal S-207?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-207"},
  {q: "¿Qué significa la señal S-208?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-208"},
  {q: "¿Qué significa la señal S-209?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-209"},
  {q: "¿Qué indica la señal S-210?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-210"},
  {q: "¿Qué indica la señal S-211?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-211"},
  {q: "¿Qué indica la señal S-212?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-212"},
  {q: "Qué indica la señal S-213?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-213"},
  {q: "¿Qué indica la señal S-214?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-214"},
  {q: "¿Qué indica la señal S-215?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-215"},
  {q: "¿Qué indica la señal S-216?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-216"},
  {q: "¿Qué indica la señal S-217?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-217"},
  {q: "¿Qué indica la señal S-218?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-218"},
  {q: "¿Qué indica la señal S-219?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-219"},
  {q: "¿Qué indica la señal S-220?", a: ["Salida derecha","Desvío obligatorio derecha","Prohibido girar derecha"], ok: 0, codigo: "s-220"},
  {q: "¿Qué indica la señal S-370?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-370"},
  {q: "¿Qué indica la señal S-371?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-371"},
  {q: "¿Qué indica la señal S-372?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-372"},
  {q: "¿Qué indica la señal S-373?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-373"},
  {q: "¿Qué indica la señal S-374?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-374"},
  {q: "¿Qué indica la señal S-375?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-375"},
  {q: "¿Qué indica la señal S-376?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-376"},
  {q: "¿Qué indica la señal S-377?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-377"},
  {q: "¿Qué indica la señal S-221?", a: ["Salida izquierda","Desvío obligatorio izquierda","Prohibido girar izquierda"], ok: 0, codigo: "s-221"},
  {q: "¿Qué indica la señal S-222?", a: ["Solo recto","Desvío obligatorio de frente","Prohibido recto"], ok: 0, codigo: "s-222"},
  {q: "¿Qué indica la señal S-223?", a: ["Solo giro","Direcciones obligatorias derecha o izquierda","Prohibido girar"], ok: 1, codigo: "s-223"},
  {q: "¿Qué indica la señal S-224?", a: ["Solo recto","Direcciones obligatorias recto o derecha","Prohibido derecha"], ok: 1, codigo: "s-224"},
  {q: "¿Qué indica la señal S-225?", a: ["Solo recto","Direcciones obligatorias recto o izquierda","Prohibido izquierda"], ok: 1, codigo: "s-225"},
  {q: "¿Qué indica la señal S-226?", a: ["Solo giro","Direcciones obligatorias derecha o izquierda","Prohibido girar"], ok: 1, codigo: "s-226"},
  {q: "¿Qué indica la señal S-227?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-227"},
  {q: "¿Qué indica la señal S-228?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-228"},
  {q: "¿Qué indica la señal S-229?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-229"},
  {q: "¿Qué indica la señal S-320?", a: ["Carretera nacional","Autopista A-1","Carretera comarcal"], ok: 0, codigo: "s-320"},
  {q: "¿Qué indica la señal S-330?", a: ["Autopista","Carretera nacional N-340","Carretera local"], ok: 0, codigo: "s-330"},
  {q: "¿Qué indica la señal S-340?", a: ["Carretera nacional","Autopista de peaje AP-7","Carretera comarcal"], ok: 1, codigo: "s-340"},
  {q: "¿Qué indica la señal S-350?", a: ["Carretera nacional","Itinerario europeo E-15","Carretera local"], ok: 1, codigo: "s-350"},
  {q: "¿Qué indica la señal S-351?", a: ["Carretera nacional","Itinerario europeo E-90","Carretera local"], ok: 1, codigo: "s-351"},
  {q: "¿Qué indica la señal S-352?", a: ["Carretera nacional","Itinerario europeo E-80","Carretera local"], ok: 1, codigo: "s-352"},
  {q: "¿Qué indica la señal S-500?", a: ["Fin población","Inicio de población con 20.000+ hab","Prohibido entrar población"], ok: 0, codigo: "s-500"},
  {q: "¿Qué indica la señal S-510?", a: ["Inicio población","Fin de población","Prohibido entrar población"], ok: 0, codigo: "s-510"},
  {q: "¿Qué indica la señal S-520?", a: ["Fin población","Inicio de población <5.000 hab","Prohibido entrar población"], ok: 0, codigo: "s-520"},
  {q: "¿Qué indica la señal S-521?", a: ["Inicio población","Fin de población <5.000 hab","Prohibido entrar población"], ok: 0, codigo: "s-521"},
  {q: "¿Qué indica la señal S-360?", a: ["Distancia a la próxima población","Velocidad recomendada","Prohibido entrar"], ok: 0, codigo: "s-360"},
  {q: "¿Qué indica la señal S-361?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-361"},
  {q: "¿Qué indica la señal S-362?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-362"},
  {q: "¿Qué indica la señal S-363?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-363"},
  {q: "¿Qué indica la señal S-364?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-364"},
  {q: "¿Qué indica la señal S-365?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-365"},
  {q: "¿Qué indica la señal S-366?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-366"},
  {q: "¿Qué indica la señal S-367?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-367"},
  {q: "¿Qué indica la señal S-368?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-368"},
  {q: "¿Qué indica la señal S-369?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-369"},
  {q: "¿Qué indica la señal S-440?", a: ["Zona peatonal","Zona residencial","Prohibido circular"], ok: 1, codigo: "s-440"},
  {q: "¿Qué indica la señal S-441?", a: ["Inicio zona residencial","Fin de zona residencial","Zona peatonal"], ok: 0, codigo: "s-441"},
    {q: "¿Qué indica la señal S-442?", a: ["Zona 30","Velocidad máxima 30","Prohibido 30"], ok: 0, codigo: "s-442"},
  {q: "¿Qué indica la señal S-443?", a: ["Inicio zona 30","Fin de zona 30","Velocidad mínima 30"], ok: 0, codigo: "s-443"},
  {q: "¿Qué indica la señal S-444?", a: ["Zona escolar","Prohibido niños","Parque"], ok: 0, codigo: "s-444"},
  {q: "¿Qué indica la señal S-445?", a: ["Inicio zona escolar","Fin de zona escolar","Prohibido niños"], ok: 0, codigo: "s-445"},
  {q: "¿Qué indica la señal S-446?", a: ["Zona peatonal","Zona comercial","Prohibido comprar"], ok: 0, codigo: "s-446"},
  {q: "¿Qué indica la señal S-447?", a: ["Inicio zona comercial","Fin de zona comercial","Zona peatonal"], ok: 0, codigo: "s-447"},
  {q: "¿Qué indica la señal S-600?", a: ["Vía rápida","Autopista","Túnel"], ok: 1, codigo: "s-600"},
  {q: "¿Qué indica la señal S-601?", a: ["Inicio autopista","Fin de autopista","Salida autopista"], ok: 0, codigo: "s-601"},
  {q: "¿Qué indica el panel S-800?", a: ["Indica anchura","Panel que indica distancia al peligro","No sirve"], ok: 1, codigo: "s-800"},
  {q: "¿Qué indica el panel S-810?", a: ["Indica anchura","Panel que indica longitud del tramo peligroso","Indica altura"], ok: 1, codigo: "s-810"},
  {q: "¿Qué indica el panel S-820?", a: ["Inicio señal","Panel que indica extensión de prohibición","Fin señal"], ok: 1, codigo: "s-820"},
  {q: "¿Qué indica el panel S-830?", a: ["Inicio señal","Panel que indica fin de prohibición","Continúa prohibición"], ok: 1, codigo: "s-830"},
  {q: "¿Qué indica el panel S-840a?", a: ["No indica nada","Panel que indica dirección del tramo peligroso a la derecha","Panel decorativo"], ok: 1, codigo: "s-840a"},
  {q: "¿Qué indica el panel S-840b?", a: ["No indica nada","Panel que indica dirección del tramo peligroso a la izquierda","Panel decorativo"], ok: 1, codigo: "s-840b"},
  {q: "¿Qué indica el panel S-850?", a: ["Panel decorativo","Panel que indica itinerario de desvío obligatorio","No sirve"], ok: 1, codigo: "s-850"},
  {q: "¿Qué indica el panel S-860?", a: ["Lluvia en la calzada","Panel que indica peligro por nieve o hielo","Viento lateral fuerte"], ok: 1, codigo: "s-860"},
  {q: "¿Qué indica el panel S-861?", a: ["Panel decorativo","Panel que indica peligro por sol deslumbrante","No indica peligro"], ok: 1, codigo: "s-861"},
  {q: "¿Qué indica el panel S-870?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-870"},
  {q: "¿Qué indica el panel S-871?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-871"},
  {q: "¿Qué indica el panel S-872?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-872"},
  {q: "¿Qué indica el panel S-873?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-873"},
  {q: "¿Qué indica el panel S-874?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-874"},
  {q: "¿Qué indica el panel S-875?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-875"},
  {q: "¿Qué indica el panel S-876?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-876"},
  {q: "¿Qué indica la señal S-877?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-877"},
  {q: "¿Qué indica la señal S-878?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-878"},
  {q: "¿Qué indica la señal S-879?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-879"},
  {q: "¿Qué indica el panel S-880?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-880"}
],
  normas: [
  {q: "Tasa de alcohol general turismos:", a: ["0,5 g/l sangre", "0,3 g/l sangre", "0,0 g/l sangre"], ok: 0},
  {q: "Tasa de alcohol noveles y profesionales:", a: ["0,5 g/l", "0,3 g/l", "0,0 g/l"], ok: 2},
  {q: "Tasa de alcohol ciclomotor:", a: ["0,5 g/l", "0,3 g/l", "0,15 g/l"], ok: 1},
  {q: "Negarse a prueba alcoholemia:", a: ["Multa 500€", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Alcohol >0,6 g/l sangre:", a: ["Multa 500€", "Delito penal", "Retirada 3 meses"], ok: 1},
  {q: "Drogas al volante:", a: ["Multa", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Medicamentos con somnolencia:", a: ["Se puede conducir", "No conducir si afecta", "Solo trayecto corto"], ok: 1},
  {q: "Límite ciudad genérico 2026:", a: ["30 km/h", "50 km/h", "40 km/h"], ok: 1},
  {q: "Límite calle plataforma única:", a: ["20 km/h", "30 km/h", "50 km/h"], ok: 0},
  {q: "Límite autovía turismos:", a: ["100 km/h", "120 km/h", "130 km/h"], ok: 1},
  {q: "Límite autopista turismos:", a: ["100 km/h", "120 km/h", "140 km/h"], ok: 1},
  {q: "Límite convencional 90 km/h:", a: ["Turismos", "Camiones", "Todos"], ok: 0},
  {q: "Límite convencional camiones:", a: ["90 km/h", "80 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad +60km/h en vía 50:", a: ["Multa grave", "Delito penal", "Solo multa"], ok: 1},
  {q: "Velocidad mínima autopista:", a: ["50 km/h", "60 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad mínima autovía:", a: ["50 km/h", "60 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad zona escolar:", a: ["50 km/h", "30 km/h", "20 km/h"], ok: 1},
  {q: "Cinturón obligatorio:", a: ["Solo delante", "Solo conductor", "Todos los ocupantes"], ok: 2},
  {q: "Multa no llevar cinturón:", a: ["3 puntos + 200€", "Solo 100€", "Aviso"], ok: 0},
  {q: "Multa no llevar cinturón detrás:", a: ["2 puntos", "3 puntos", "4 puntos"], ok: 1},
  {q: "Casco moto obligatorio:", a: ["Solo ciudad", "Siempre", "Solo carretera"], ok: 1},
  {q: "Multa no llevar casco moto:", a: ["2 puntos", "3 puntos + 200€", "4 puntos"], ok: 1},
  {q: "SRI grupo 0 hasta:", a: ["9 kg", "13 kg", "18 kg"], ok: 1},
  {q: "SRI grupo 1:", a: ["9-18 kg", "15-25 kg", "22-36 kg"], ok: 0},
  {q: "SRI de espaldas hasta:", a: ["9 meses", "15 meses", "2 años"], ok: 1},
  {q: "Multa niño sin SRI:", a: ["3 puntos + 200€", "Solo 100€", "Aviso"], ok: 0},
  {q: "Edad mínima carnet B:", a: ["16 años", "17 años", "18 años"], ok: 2},
  {q: "Puntos carnet nuevo:", a: ["8 puntos", "12 puntos", "15 puntos"], ok: 1},
  {q: "Puntos máximo sin infracciones:", a: ["12 puntos", "15 puntos", "20 puntos"], ok: 1},
  {q: "Pérdida total puntos:", a: ["Suspensión 3 meses", "Suspensión 6 meses + curso", "Retirada definitiva"], ok: 1},
  {q: "Recuperar puntos parcial:", a: ["Curso 12h + 6 puntos", "Curso 24h + 12 puntos", "Automático 2 años"], ok: 0},
  {q: "Recuperar puntos total:", a: ["Curso 12h", "Curso 24h + examen", "Automático 3 años"], ok: 1},
  {q: "Caducidad permiso B hasta 65 años:", a: ["5 años", "10 años", "15 años"], ok: 1},
  {q: "Caducidad permiso B desde 65 años:", a: ["2 años", "3 años", "5 años"], ok: 2},
  {q: "Años sin infracciones +2 puntos:", a: ["1 año", "2 años", "3 años"], ok: 1},
  {q: "Años sin infracciones +1 punto:", a: ["1 año", "3 años", "5 años"], ok: 1},
  {q: "Documentación obligatoria:", a: ["Solo DNI", "Permiso + ITV + Seguro", "Solo permiso"], ok: 1},
  {q: "ITV turismo nuevo primera:", a: ["2 años", "4 años", "6 años"], ok: 1},
  {q: "ITV turismo 4-10 años:", a: ["Anual", "Cada 2 años", "Cada 4 años"], ok: 1},
  {q: "ITV turismo +10 años:", a: ["Anual", "Cada 2 años", "Cada 6 meses"], ok: 0},
  {q: "Multa sin ITV en vigor:", a: ["100€", "200€ + inmovilización", "Solo aviso"], ok: 1},
  {q: "Seguro obligatorio mínimo:", a: ["Solo RC", "RC + robo", "Todo riesgo"], ok: 0},
  {q: "Multa circular sin seguro:", a: ["500€ a 3000€", "100€", "Solo aviso"], ok: 0},
  {q: "Chaleco reflectante obligatorio:", a: ["Solo noche", "Al bajar del vehículo en vía", "No obligatorio"], ok: 1},
  {q: "Multa no llevar chaleco:", a: ["80€", "200€", "Solo aviso"], ok: 0},
  {q: "Triángulos avería:", a: ["1 triángulo", "2 triángulos a 50m", "No obligatorios"], ok: 1},
  {q: "Multa no señalizar avería autovía:", a: ["80€", "200€", "Solo aviso"], ok: 1},
  {q: "Multa móvil en mano:", a: ["3 puntos + 200€", "6 puntos + 200€", "Solo 100€"], ok: 1},
  {q: "Multa saltarse STOP:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa saltarse semáforo rojo:", a: ["3 puntos", "4 puntos + 200€", "6 puntos"], ok: 1},
  {q: "Multa saltarse ceda el paso:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa adelantar línea continua:", a: ["3 puntos", "4 puntos + 200€", "6 puntos"], ok: 1},
  {q: "Multa no ceder paso peatón cebra:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa circular arcén sin causa:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Conducir sin carnet:", a: ["Multa 500€", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Huir accidente con heridos:", a: ["Multa", "Delito penal", "Retirada 6 meses"], ok: 1},
  {q: "Velocidad +20km/h ciudad:", a: ["Multa leve", "Multa grave + 2 puntos", "Solo aviso"], ok: 1},
  {q: "Velocidad +50km/h autopista:", a: ["Multa leve", "Multa muy grave + 6 puntos", "Solo aviso"], ok: 1},
  {q: "Peatón tiene preferencia:", a: ["Nunca", "Siempre en paso cebra", "Solo con semáforo"], ok: 1},
  {q: "Ciclista tiene preferencia:", a: ["Nunca", "En carril bici y rotonda", "Siempre"], ok: 1},
  {q: "Bus tiene preferencia:", a: ["Nunca", "Saliendo de parada señalizada", "Siempre"], ok: 1},
  {q: "Ambulancia tiene preferencia:", a: ["Nunca", "Con luces y sonido prioritario", "Siempre"], ok: 1},
  {q: "Policía tiene preferencia:", a: ["Nunca", "En servicio urgente", "Siempre"], ok: 1},
  {q: "Prioridad derecha:", a: ["Nunca", "En cruce sin señales", "Siempre"], ok: 1},
  {q: "Prioridad rotonda:", a: ["El que entra", "El que circula dentro", "El más rápido"], ok: 1},
  {q: "Prioridad subida cuesta estrecha:", a: ["Baja", "Sube", "El más grande"], ok: 1},
  {q: "Prioridad tranvía:", a: ["Nunca", "Siempre", "Solo de noche"], ok: 1},
  {q: "Prioridad tren paso nivel:", a: ["Nunca", "Siempre", "Solo de día"], ok: 1},
  {q: "Prioridad bus escolar parando:", a: ["Nunca", "Cuando para con luces", "Siempre"], ok: 1},
  {q: "Coche sin etiqueta en ZBE:", a: ["Puede entrar siempre", "Prohibido salvo excepciones", "Solo de noche"], ok: 1},
  {q: "Etiqueta B en ZBE Madrid 2026:", a: ["Acceso libre", "Prohibido lunes-viernes 7-20h", "Solo residentes"], ok: 1},
  {q: "Etiqueta C en ZBE Barcelona:", a: ["Acceso libre", "Prohibido laborables 7-20h", "Solo fines semana"], ok: 1},
  {q: "Etiqueta ECO en ZBE:", a: ["Prohibido", "Acceso libre", "Solo residentes"], ok: 1},
  {q: "Etiqueta 0 en ZBE:", a: ["Prohibido", "Acceso libre + aparcar gratis", "Solo residentes"], ok: 1},
  {q: "Multa entrar ZBE sin etiqueta:", a: ["80€", "200€", "Solo aviso"], ok: 1},
  {q: "Moto sin etiqueta en ZBE:", a: ["Prohibido", "Permitido", "Solo de noche"], ok: 0},
  {q: "Vehículo histórico en ZBE:", a: ["Prohibido", "Exento con autorización", "Solo fines semana"], ok: 1},
  {q: "ZBE activa fines de semana:", a: ["Sí siempre", "Depende ciudad", "Nunca"], ok: 1},
  {q: "Cómo saber si mi coche puede entrar ZBE:", a: ["Preguntar", "Web DGT + etiqueta parabrisas", "Solo ITV"], ok: 1},
  {q: "Patinete eléctrico por acera:", a: ["Permitido", "Prohibido, solo calzada", "Solo si hay carril"], ok: 1},
  {q: "Velocidad máxima patinete:", a: ["45 km/h", "25 km/h", "50 km/h"], ok: 1},
  {q: "Patinete necesita seguro:", a: ["No", "Sí obligatorio", "Solo si >25km/h"], ok: 1},
  {q: "Casco patinete obligatorio:", a: ["Nunca", "Menores 16 años", "Siempre"], ok: 1},
  {q: "Patinete por carril bici:", a: ["Prohibido", "Obligatorio si existe", "Opcional"], ok: 1},
  {q: "Patinete con auriculares:", a: ["Permitido", "Prohibido", "Solo uno"], ok: 1},
  {q: "Patinete con pasajero:", a: ["Permitido", "Prohibido", "Solo niños"], ok: 1},
  {q: "Patinete alcohol:", a: ["0,5 g/l", "0,0 g/l", "0,3 g/l"], ok: 1},
  {q: "Patinete móvil en mano:", a: ["Permitido", "Prohibido 200€ multa", "Solo parado"], ok: 1},
  {q: "Edad mínima patinete:", a: ["14 años", "16 años", "18 años"], ok: 1},
  {q: "Tacógrafo obligatorio:", a: ["Todos coches", "Vehículos >3,5t o 9 plazas", "Solo camiones"], ok: 1},
  {q: "Tiempo conducción máximo sin pausa:", a: ["2h", "4h 30min", "6h"], ok: 1},
  {q: "Pausa mínima tras 4h 30min:", a: ["15min", "30min", "45min"], ok: 2},
  {q: "Conducción diaria máxima:", a: ["8h", "9h ampliable 10h", "12h"], ok: 1},
  {q: "Descanso diario mínimo:", a: ["8h", "11h", "12h"], ok: 1},
  {q: "Conducción semanal máxima:", a: ["45h", "56h", "60h"], ok: 1},
  {q: "Descanso semanal mínimo:", a: ["24h", "45h", "36h"], ok: 1},
  {q: "Remolque ligero hasta:", a: ["350 kg", "750 kg", "1000 kg"], ok: 1},
  {q: "Remolque >750kg necesita:", a: ["Nada", "Permiso B+E", "Permiso C"], ok: 1},
  {q: "Carga sobresale detrás máximo:", a: ["1 metro", "2 metros", "3 metros"], ok: 0},
  {q: "Carga sobresale señalizar:", a: ["No hace falta", "Panel V-20", "Luces emergencia"], ok: 1},
  {q: "Carga sobresale de noche:", a: ["Panel V-20", "Luz roja detrás", "Nada"], ok: 1},
  {q: "Peso maletero:", a: ["Peso alto", "Peso bajo y bien sujeto", "Como sea"], ok: 1},
  {q: "Bicicleta en portabicis:", a: ["No señalizar", "Panel V-20 si sobresale", "Solo luces"], ok: 1},
  {q: "Distancia seguridad seco:", a: ["1 segundo", "2 segundos", "3 segundos"], ok: 1},
  {q: "Distancia seguridad lluvia:", a: ["Igual", "Doble", "Triple"], ok: 1},
  {q: "Distancia adelantar ciclista:", a: ["1 metro", "1,5 metros", "2 metros"], ok: 1},
  {q: "Intermitente antes girar:", a: ["1 segundo", "3 segundos", "5 segundos"], ok: 1},
  {q: "Cambio carril:", a: ["Gira volante", "Espejo + ángulo muerto + intermitente", "Solo espejo"], ok: 1},
  {q: "Obstrucción calzada:", a: ["Para en medio", "Chaleco + triángulos 50m", "Toca claxon"], ok: 1},
  {q: "Coche parado arcén:", a: ["Acelera", "Pasa lento + 1,5m distancia", "Cambia carril"], ok: 1},
  {q: "Túnel luces obligatorias:", a: ["Posición", "Cruce", "Largas"], ok: 1},
  {q: "Obras señal naranja:", a: ["Sigue señales viejas", "Respeta señales provisionales", "Ignora señales"], ok: 1},
  {q: "Cambio sentido:", a: ["Donde quieras", "Solo permitido", "Nunca"], ok: 1},
  {q: "Marcha atrás:", a: ["Cuando quieras", "Solo imprescindible y corto", "Nunca"], ok: 1},
  {q: "Adelantamiento seguro:", a: ["Lento y largo", "Rápido y volver pronto", "Con música alta"], ok: 1},
  {q: "Adelantar paso peatones:", a: ["Sí, con cuidado", "No, nunca", "Solo bicis"], ok: 1},
  {q: "Adelantar en intersección:", a: ["Sí siempre", "No, salvo rotonda", "Solo motos"], ok: 1},
  {q: "Incorporación carril aceleración:", a: ["Para al final", "Acelera para igualar velocidad", "Entra lento"], ok: 1},
  {q: "Salida autopista carril izquierdo:", a: ["Corta carriles", "Cambia con tiempo + señaliza", "Sigue recto"], ok: 1},
  {q: "Ceda paso incorporación:", a: ["Acelera", "Cede a los de vía principal", "Tienes preferencia"], ok: 1},
  {q: "STOP incorporación sin línea:", a: ["Para en medio", "Para antes intersección", "No pares"], ok: 1},
  {q: "Glorieta 2 carriles salir 2ª:", a: ["Carril derecho", "Carril izquierdo interior", "Cualquiera"], ok: 1},
  {q: "Glorieta 2 carriles salir 1ª:", a: ["Carril derecho exterior", "Carril izquierdo", "Cualquiera"], ok: 0},
  {q: "Conductor novel señal V-13:", a: ["L verde", "L blanca fondo verde", "N naranja"], ok: 1},
  {q: "Vehículo lento V-4:", a: ["Triángulo rojo", "Triángulo naranja", "Círculo rojo"], ok: 1},
  {q: "Transporte escolar V-10:", a: ["Cuadrado azul", "Cuadrado amarillo niños", "Triángulo rojo"], ok: 1},
  {q: "Mercancías peligrosas:", a: ["Panel naranja", "Panel amarillo", "Panel rojo"], ok: 0},
  {q: "Vehículo prioritario parado:", a: ["Acelera", "Reduce y cede paso", "Toca claxon"], ok: 1},
  {q: "Conducción eficiente reduce:", a: ["Solo ruido", "Consumo + CO2 15%", "Velocidad"], ok: 1},
  {q: "Apagar motor parado >:", a: ["Nunca", "30 segundos", "5 minutos"], ok: 1},
  {q: "Marcha larga rpm bajas:", a: ["Fuerza motor", "Ahorra combustible", "Rompe coche"], ok: 1},
  {q: "Aire acondicionado:", a: ["Reduce consumo", "Aumenta consumo 10%", "No afecta"], ok: 1},
  {q: "Neumáticos desinflados:", a: ["Menos consumo", "Más consumo + CO2", "Menos ruido"], ok: 1},
  {q: "Peso innecesario 100kg:", a: ["No afecta", "Aumenta consumo 6%", "Reduce consumo"], ok: 1},
  {q: "Baca en techo:", a: ["Reduce consumo", "Aumenta resistencia + consumo", "No afecta"], ok: 1},
  {q: "Arrancar en frío:", a: ["Acelerar fuerte", "Arrancar y salir suave", "Esperar 5 min"], ok: 1},
  {q: "Animal en vía:", a: ["Tocar claxon fuerte", "Frenar suave, no volantazo", "Acelerar"], ok: 1},
  {q: "Tractor vía interurbana:", a: ["Adelantar rápido", "Paciencia, adelantar seguro", "Tocar claxon"], ok: 1},
  {q: "Final autovía incorporación:", a: ["Acelera", "Cede al incorporarte", "Tienes preferencia"], ok: 1},
  {q: "Zona ORA:", a: ["Aparca libre", "Mira panel horario/pago", "Solo residentes"], ok: 1},
  {q: "Park & Ride:", a: ["Aparca y bus/tren", "Solo bus", "Solo coche"], ok: 0},
  {q: "Carril bus:", a: ["Prohibido excepto bus/taxi", "Abierto todos", "Solo bici"], ok: 0},
  {q: "Carril bici línea continua:", a: ["Se puede aparcar", "Nunca circular ni aparcar", "Solo para girar"], ok: 1},
  {q: "Paso nivel sin barreras:", a: ["Cruza rápido", "Para, mira, escucha", "Toca claxon"], ok: 1},
  {q: "Puente móvil:", a: ["Acelera para pasar", "Para antes barrera", "Rodea barrera"], ok: 1},
  {q: "Vado permanente:", a: ["Aparca", "Prohibido aparcar", "Solo 5 min"], ok: 1},
  {q: "Luz de cruce obligatoria:", a: ["Solo noche", "Noche + túneles + niebla + lluvia", "Solo túneles"], ok: 1},
  {q: "Luz carretera/corta:", a: ["Carretera se usa en ciudad", "Cruce alumbra 40m, carretera 100m", "Son iguales"], ok: 1},
  {q: "Antiniebla delantera:", a: ["Siempre encendida", "Niebla intensa, lluvia fuerte o nieve", "De noche"], ok: 1},
  {q: "Antiniebla trasera:", a: ["Con lluvia normal", "Solo niebla intensa o lluvia muy fuerte", "Siempre"], ok: 1},
  {q: "Avería luces noche en vía:", a: ["Seguir con posición", "Parar, señalizar y pedir ayuda", "Pon largas"], ok: 1},
  {q: "Luces emergencia:", a: ["Solo accidente", "Inmovilización, emergencia, obras", "Adelantar"], ok: 1},
  {q: "Luz posición sola:", a: ["Permitida siempre", "Prohibida en marcha, solo parado", "Obligatoria ciudad"], ok: 1},
  {q: "Intermitente averiado:", a: ["Sacar brazo señalando", "Seguir sin avisar", "Tocar claxon"], ok: 0},
  {q: "Luz marcha atrás:", a: ["Blanca, se enciende al meter marcha atrás", "Roja fija", "Amarilla"], ok: 0},
  {q: "Túnel alumbrado encendido:", a: ["Posición", "Cruce obligatoria", "Largas"], ok: 1},
  {q: "Distancia frontal camión >3,5t:", a: ["30 metros", "50 metros mínimo", "10 metros"], ok: 1},
  {q: "Adelantar en intersección:", a: ["Sí, si hay prioridad", "No, prohibido salvo rotonda", "Solo motos"], ok: 1},
  {q: "Adelantar en paso peatones:", a: ["Sí, con cuidado", "No, nunca", "Solo bicis"], ok: 1},
  {q: "Adelantar línea continua:", a: ["Sí, rápido", "No, salvo ciclista a <10km/h", "Siempre"], ok: 1},
  {q: "Adelantar curva sin visibilidad:", a: ["Sí, con claxon", "No, prohibido", "Solo si hay 2 carriles"], ok: 1},
  {q: "Vehículo adelantado debe:", a: ["Acelerar", "Mantener velocidad/dar facilidades", "Frenar"], ok: 1},
  {q: "Adelantar por derecha:", a: ["Nunca", "Permitido en ciudad 2+ carriles si tráfico denso", "Siempre"], ok: 1},
  {q: "Separación lateral ciclista:", a: ["1 metro", "1,5 metros mínimo", "0,5 metros"], ok: 1},
  {q: "Distancia mínima borde calzada:", a: ["1 metro", "3 metros mínimo", "5 metros"], ok: 1},
  {q: "Parar en vado permanente:", a: ["5 minutos máximo", "Prohibido siempre", "Permitido si no molesta"], ok: 1},
  {q: "Estacionar carga/descarga horario:", a: ["Permitido siempre", "Prohibido en horario señalizado", "Solo 10 min"], ok: 1},
  {q: "Parar en paso peatones:", a: ["Permitido sin obstaculizar", "Prohibido", "Solo 30 seg"], ok: 1},
  {q: "Estacionar doble fila:", a: ["Permitido con conductor", "Prohibido siempre", "Solo 2 min"], ok: 1},
  {q: "Parar mediana/separador:", a: ["Permitido moto", "Prohibido siempre", "Permitido coche"], ok: 1},
  {q: "Colocar vehículo parado:", a: ["Como quieras", "Paralelo al borde salvo señal", "En diagonal siempre"], ok: 1},
  {q: "Semáforo ámbar fijo:", a: ["Acelera para pasar", "Detente salvo no puedas con seguridad", "Sigue igual"], ok: 1},
  {q: "Semáforo ámbar intermitente:", a: ["Pare obligatorio", "Precaución, paso regulado por prioridad", "Acelera"], ok: 1},
  {q: "Agente brazo extendido horizontal:", a: ["Pare todos", "Avance todos", "Pare los que vienen de frente"], ok: 2},
  {q: "Agente brazo vertical arriba:", a: ["Siga", "Pare todos salvo que ya estén en cruce", "Acelere"], ok: 1},
  {q: "Agente brazo balanceando:", a: ["Pare", "Exige acelerar", "Exige disminuir velocidad"], ok: 2},
  {q: "Marcha atrás:", a: ["Cuando quieras", "Solo imprescindible y trayecto corto", "Nunca"], ok: 1},
  {q: "Cambio sentido:", a: ["Donde quieras", "Solo donde esté permitido y sin peligro", "Nunca en ciudad"], ok: 1},
  {q: "Incorporación vía desde arcén:", a: ["Sales directo", "Cedes paso a los de vía principal", "Tienes preferencia"], ok: 1},
  {q: "Desplazamiento lateral carril:", a: ["Giras volante", "Espejo + ángulo muerto + intermitente", "Solo espejo"], ok: 1},
  {q: "Obstrucción calzada sin señalizar:", a: ["Multa", "Multa + retirada vehículo", "Solo aviso"], ok: 0},
  {q: "Transporte niños <135cm:", a: ["Delante siempre", "Atrás con SRI adecuado a peso/talla", "Sin SRI si trayecto corto"], ok: 1},
  {q: "Puertas abiertas:", a: ["Prohibido circular", "Permitido en atasco", "Solo moto"], ok: 0},
  {q: "Publicidad en vehículo particular:", a: ["Libre", "Prohibida salvo autorización", "Solo luna trasera"], ok: 1},
  {q: "Abandono vehículo vía pública:", a: ["6 meses = residuo sólido", "1 mes = residuo sólido", "Nunca es residuo"], ok: 0},
  {q: "Deteriorar señal :", a: ["Multa leve", "Multa grave + retirada puntos", "Solo aviso"], ok: 1}
],
  mecanica: [
  {q: "Presión baja causa:", a: ["Mayor consumo", "Menor adherencia", "Las dos + riesgo reventón"], ok: 2},
  {q: "Neumático liso profundidad mínima:", a: ["1mm", "1,6mm", "2mm"], ok: 1},
  {q: "Neumático liso consecuencias:", a: ["Multa 200€", "Multa + accidente", "Solo multa"], ok: 1},
  {q: "Presión alta causa:", a: ["Mayor consumo", "Menor adherencia centro", "No pasa nada"], ok: 1},
  {q: "Desgaste irregular neumático:", a: ["Normal", "Paralelismo mal o amortiguadores", "Presión correcta"], ok: 1},
  {q: "Neumáticos M+S significa:", a: ["Solo verano", "Mud+Snow barro y nieve", "Máxima velocidad"], ok: 1},
  {q: "Neumáticos 3PMSF significa:", a: ["Solo lluvia", "Homologado nieve severa", "Máxima carga"], ok: 1},
  {q: "Rotar neumáticos cada:", a: ["5000km", "10000km", "20000km"], ok: 1},
  {q: "Neumático reventón a 120km/h:", a: ["Frena fuerte", "Sujeta volante, reduce gas, no frenes brusco", "Frena a fondo"], ok: 1},
  {q: "Líquido de frenos bajo:", a: ["Desgaste pastillas", "Fuga", "Las dos pueden ser"], ok: 2},
  {q: "Pastillas frenos gastadas síntoma:", a: ["Mejor frenada", "Ruido metálico + menor frenada", "No pasa nada"], ok: 1},
  {q: "Discos frenos rayados síntoma:", a: ["Mejor frenada", "Vibración al frenar", "No pasa nada"], ok: 1},
  {q: "Pedal freno esponjoso:", a: ["Normal", "Aire en circuito", "Pastillas nuevas"], ok: 1},
  {q: "Pedal freno se hunde:", a: ["Normal", "Fuga líquido o bomba rota", "Pastillas gastadas"], ok: 1},
  {q: "ABS bloquea ruedas:", a: ["Sí", "No, evita bloqueo", "Solo en mojado"], ok: 1},
  {q: "Testigo ABS encendido:", a: ["No frena nada", "Frenos funcionan pero sin ABS", "No pasa nada"], ok: 1},
  {q: "Frenar con ABS:", a: ["Bombea pedal", "Pisa fuerte y mantenido", "Frena suave"], ok: 1},
  {q: "ESP qué hace:", a: ["Frena solo", "Corrige trayectoria si derrapa", "Aumenta potencia"], ok: 1},
  {q: "Testigo ESP encendido fijo:", a: ["ESP actuando", "ESP desconectado o avería", "Normal"], ok: 1},
  {q: "Testigo aceite rojo encendido:", a: ["Revisar nivel", "Para motor YA, sin presión", "Cambiar aceite"], ok: 1},
  {q: "Testigo aceite amarillo:", a: ["Para YA", "Nivel bajo, revisar pronto", "Cambiar aceite"], ok: 1},
  {q: "Aceite muy alto varilla:", a: ["Mejor lubricación", "Puede dañar catalizador", "No pasa nada"], ok: 1},
  {q: "Aceite muy bajo varilla:", a: ["Mejor consumo", "Fricción, gripaje motor", "No pasa nada"], ok: 1},
  {q: "Humo azul escape significa:", a: ["Normal", "Aceite quemado en cilindros", "Exceso combustible"], ok: 1},
  {q: "Humo negro escape significa:", a: ["Normal", "Exceso combustible, mezcla rica", "Aceite quemado"], ok: 1},
  {q: "Humo blanco denso escape:", a: ["Normal frío", "Refrigerante en cilindros, junta culata", "Aceite quemado"], ok: 1},
  {q: "Motor pierde potencia cuesta:", a: ["Normal", "Filtro aire sucio o avería", "No pasa nada"], ok: 1},
  {q: "Motor se cala al ralentí:", a: ["Normal", "Válvula ralentí o inyección", "No pasa nada"], ok: 1},
  {q: "Consumo aceite normal:", a: ["0 litros", "Hasta 1L cada 1000km", "5L cada 1000km"], ok: 1},
  {q: "Anticongelante sirve para:", a: ["Solo frío", "Frío y calor, anti-corrosión", "Solo calor"], ok: 1},
  {q: "Nivel refrigerante bajo:", a: ["Añade agua", "Añade refrigerante mismo color", "No toques"], ok: 1},
  {q: "Sobrecalentamiento motor:", a: ["Acelera para enfriar", "Para, apaga motor, espera", "Abre tapón caliente"], ok: 1},
  {q: "Testigo temperatura rojo:", a: ["Revisa pronto", "Para YA, motor sobrecalentado", "Normal"], ok: 1},
  {q: "Ventilador no salta:", a: ["Normal", "Termostato o ventilador roto", "No pasa nada"], ok: 1},
  {q: "Calefacción no calienta:", a: ["Normal invierno", "Termostato cerrado o sin refrigerante", "Radiador roto"], ok: 1},
  {q: "Batería descargada arrancar:", a: ["Empujar solo", "Pinzas +12V con +12V", "Las dos"], ok: 2},
  {q: "Testigo batería encendido:", a: ["Batería cargando", "Alternador no carga", "No pasa nada"], ok: 1},
  {q: "Bornes batería sulfatados:", a: ["Normal", "Limpia con agua + bicarbonato", "Cambia batería"], ok: 1},
  {q: "Batería dura media:", a: ["1 año", "4-5 años", "10 años"], ok: 1},
  {q: "Luces no encienden:", a: ["Bombilla fundida", "Fusible roto", "Las dos pueden ser"], ok: 2},
  {q: "Intermitente va rápido:", a: ["Normal", "Bombilla fundida mismo lado", "Relé roto"], ok: 1},
  {q: "Claxon no suena:", a: ["Normal", "Fusible o claxon roto", "No pasa nada"], ok: 1},
  {q: "Fusible fundido:", a: ["Puente con cable", "Cambia por mismo amperaje", "Pon más amperios"], ok: 1},
  {q: "Amortiguadores gastados:", a: ["Mejor confort", "Menor adherencia, balanceo", "No pasa nada"], ok: 1},
  {q: "Dirección dura:", a: ["Mejor control", "Falta líquido dirección asistida", "No pasa nada"], ok: 1},
  {q: "Volante vibra 80-120km/h:", a: ["Normal", "Ruedas desequilibradas", "Dirección rota"], ok: 1},
  {q: "Coche tira a un lado:", a: ["Normal", "Paralelismo mal o neumático bajo", "No pasa nada"], ok: 1},
  {q: "Ruido al girar volante:", a: ["Normal", "Palier o rótula rota", "Dirección rota"], ok: 1},
  {q: "Holguera dirección:", a: ["Normal", "Rótulas o caja dirección gastadas", "No pasa nada"], ok: 1},
  {q: "Embrague patina síntoma:", a: ["Mejor salida", "Motor revoluciona pero no avanza", "No pasa nada"], ok: 1},
  {q: "Caja cambios rasca marchas:", a: ["Normal", "Sincronizadores gastados", "No pasa nada"], ok: 1},
  {q: "Ruido al acelerar:", a: ["Normal", "Correa distribución o alternador", "Motor roto"], ok: 1},
  {q: "Vibración al acelerar:", a: ["Normal", "Palier o soporte motor roto", "No pasa nada"], ok: 1},
  {q: "Cambio automático tirones:", a: ["Normal", "Nivel aceite caja bajo", "No pasa nada"], ok: 1},
  {q: "Escape ruidoso:", a: ["Mejor potencia", "Agujero o junta rota, multa", "No pasa nada"], ok: 1},
  {q: "Humo negro ITV:", a: ["Pasa ITV", "No pasa, exceso CO", "Normal diésel"], ok: 1},
  {q: "Catalizador roto síntoma:", a: ["Más potencia", "Ruido metálico + más consumo", "No pasa nada"], ok: 1},
  {q: "Filtro partículas diésel:", a: ["No existe", "Reduce partículas, se regenera", "Aumenta potencia"], ok: 1},
  {q: "AdBlue para qué sirve:", a: ["Combustible", "Reduce NOx en diésel Euro 6", "Aceite"], ok: 1},
  {q: "Testigo AdBlue encendido:", a: ["Normal", "Rellenar AdBlue o no arranca", "No pasa nada"], ok: 1},
  {q: "Coche híbrido etiqueta:", a: ["Siempre ECO", "Depende autonomía eléctrica", "Siempre 0"], ok: 1},
  {q: "Híbrido enchufable PHEV 50km:", a: ["Etiqueta ECO", "Etiqueta 0", "Etiqueta C"], ok: 1},
  {q: "Híbrido no enchufable HEV:", a: ["Etiqueta 0", "Etiqueta ECO", "Etiqueta C"], ok: 1},
  {q: "Coche eléctrico en túnel luces:", a: ["Apagar luces", "Luces encendidas igual que combustión", "No necesita"], ok: 1},
  {q: "Cargar eléctrico en lluvia:", a: ["Peligroso", "Seguro, conectores estancos IP67", "Prohibido"], ok: 1},
  {q: "Batería híbrido 12V descargada:", a: ["Empujar", "Pinzas como coche normal", "No se puede"], ok: 1},
  {q: "Mantenimiento eléctrico vs combustión:", a: ["Igual", "Menor: sin aceite, filtros, correas", "Mayor"], ok: 1},
  {q: "Freno regenerativo eléctrico:", a: ["No existe", "Recarga batería al frenar", "Solo híbridos"], ok: 1},
  {q: "Coche eléctrico se queda sin batería:", a: ["Empujar", "Grúa, no se puede remolcar", "Remolcar normal"], ok: 1},
  {q: "Cable carga eléctrico dañado:", a: ["Usar igual", "No usar, riesgo electrocución", "Solo lento"], ok: 1},
  {q: "Líquido limpia parabrisas:", a: ["Solo agua", "Agua + producto anti-mosquitos", "Solo producto"], ok: 1},
  {q: "Limpiaparabrisas no limpia bien:", a: ["Normal", "Gomas gastadas o sucias", "Motor roto"], ok: 1},
  {q: "Cristales empañados rápido:", a: ["Abrir ventana", "A/C + desempañar", "Poner calor máximo"], ok: 1},
  {q: "Luneta térmica no funciona:", a: ["Normal", "Fusible o luneta rota", "No pasa nada"], ok: 1},
  {q: "Coche no arranca, hace clack:", a: ["Normal", "Batería descargada o motor arranque", "No pasa nada"], ok: 1},
  {q: "Coche se para en marcha:", a: ["Normal", "Falta combustible o avería grave", "No pasa nada"], ok: 1},
  {q: "Coche pierde potencia cuesta:", a: ["Normal", "Filtro aire sucio o turbo roto", "No pasa nada"], ok: 1},
  {q: "Coche consume mucho de repente:", a: ["Normal", "Presión baja, freno agarrotado o avería", "No pasa nada"], ok: 1},
  {q: "Coche humea mucho:", a: ["Normal frío", "Avería motor grave", "No pasa nada"], ok: 1},
  {q: "Coche huele a quemado:", a: ["Normal", "Embrague, frenos o cortocircuito", "No pasa nada"], ok: 1},
  {q: "Coche huele a gasolina:", a: ["Normal", "Fuga combustible, peligro incendio", "No pasa nada"], ok: 1},
  {q: "Coche huele a aceite quemado:", a: ["Normal", "Fuga aceite sobre escape", "No pasa nada"], ok: 1},
  {q: "Coche huele dulce refrigerante:", a: ["Normal", "Fuga refrigerante", "No pasa nada"], ok: 1},
  {q: "Ruido al pasar baches:", a: ["Normal", "Amortiguadores o rótulas gastadas", "Ruedas nuevas"], ok: 1},
  {q: "Puerta no cierra bien:", a: ["Normal", "Cerradura rota o puerta caída", "Goma desgastada"], ok: 1},
  {q: "Ventana no baja:", a: ["Normal", "Motor elevalunas o fusible roto", "No pasa nada"], ok: 1},
  {q: "Asiento no se mueve:", a: ["Normal", "Motor asiento o guía rota", "Palanca rota"], ok: 1},
  {q: "Aire acondicionado no enfría:", a: ["Normal", "Falta gas o compresor roto", "Filtro sucio"], ok: 1}
],
  auxilios: [
  {q: "¿Qué haces primero ante un accidente?", a: ["Llamar al 112", "Proteger la zona", "Socorrer heridos"], ok: 1},
  {q: "Orden correcto protocolo PAS:", a: ["Socorrer, Avisar, Proteger", "Proteger, Avisar, Socorrer", "Avisar, Proteger, Socorrer"], ok: 1},
  {q: "Para proteger en autopista:", a: ["Triángulos 50m", "Triángulos 100m + chaleco", "Solo luces emergencia"], ok: 1},
  {q: "En una hemorragia arterial, ¿qué haces?", a: ["Compresión directa fuerte", "Elevar extremidad", "Dar aspirina"], ok: 0},
  {q: "Hemorragia nasal: ¿qué haces?", a: ["Inclinar cabeza atrás", "Pellizcar nariz e inclinar adelante", "Sonarse fuerte"], ok: 1},
  {q: "Herida que no para de sangrar:", a: ["Poner torniquete ya", "Compresión directa + 112", "Agua oxigenada"], ok: 1},
  {q: "Hemorragia externa grave:", a: ["Esperar que pare", "Compresión directa + elevar miembro", "Poner alcohol"], ok: 1},
  {q: "Torniquete se usa cuando:", a: ["Siempre", "Solo si amputación o compresión no funciona", "Nunca"], ok: 1},
  {q: "Posición lateral de seguridad sirve para:", a: ["Evitar asfixia por vómito", "Acelerar recuperación", "Reducir dolor"], ok: 0},
  {q: "Ante pérdida de conocimiento breve:", a: ["Sentar inmediato", "PLS si respira", "Dar azúcar"], ok: 1},
  {q: "Ante vómito con inconsciencia:", a: ["PLS inmediato", "Boca arriba", "Sentado"], ok: 0},
  {q: "Convulsión acabada, paciente dormido:", a: ["Despertar a golpes", "PLS", "Sentado"], ok: 1},
  {q: "Inconsciente no respira:", a: ["PLS", "Iniciar RCP 30:2", "Solo ventilaciones"], ok: 1},
  {q: "RCP en adulto: compresión/ventilación:", a: ["15/2", "30/2", "20/3"], ok: 1},
  {q: "RCP en niño 1-8 años:", a: ["30/2 igual adulto", "15/2", "5 ventilaciones inicio + 30/2"], ok: 2},
  {q: "RCP en lactante <1 año:", a: ["30/2", "15/2 con 2 dedos", "5 ventilaciones + 30/2"], ok: 1},
  {q: "Profundidad compresión adulto:", a: ["3-4 cm", "5-6 cm", "7-8 cm"], ok: 1},
  {q: "Profundidad compresión niño:", a: ["2-3 cm", "4-5 cm", "5-6 cm"], ok: 1},
  {q: "Profundidad compresión lactante:", a: ["1-2 cm", "4 cm", "2-3 cm"], ok: 0},
  {q: "Frecuencia compresiones RCP:", a: ["60/min", "100-120/min", "150/min"], ok: 1},
  {q: "Parada respiratoria: frecuencia ventilación:", a: ["6-8/min", "12/min", "20/min"], ok: 0},
  {q: "Niño inconsciente que no respira:", a: ["5 ventilaciones iniciales + RCP", "30 compresiones directas", "Respirarle a cara"], ok: 0},
  {q: "¿Cuándo usas DEA?", a: ["Si no respira", "Si inconsciente y no respira", "Si está dormido"], ok: 1},
  {q: "DEA en niño 1-8 años:", a: ["No usar", "Usar con parches pediátricos", "Usar parches adulto"], ok: 1},
  {q: "DEA en lactante <1 año:", a: ["No usar nunca", "Usar si no hay pediátricos", "Solo manual"], ok: 1},
  {q: "DEA con parche mojado:", a: ["Poner igual", "Secar pecho antes", "No usar"], ok: 1},
  {q: "DEA dice 'no tocar paciente':", a: ["Seguir RCP", "No tocar durante análisis/descarga", "Tocar igual"], ok: 1},
  {q: "¿Qué haces si alguien se atraganta consciente?", a: ["Dar agua", "5 golpes espalda + 5 compresiones abdominales", "Respiración boca-boca"], ok: 1},
  {q: "Atragantado queda inconsciente:", a: ["Seguir golpes", "Iniciar RCP", "Dar agua"], ok: 1},
  {q: "Atragantamiento lactante:", a: ["Heimlich normal", "5 golpes espalda + 5 compresiones torácicas", "Dar agua"], ok: 1},
  {q: "Embarazada atragantada:", a: ["Heimlich normal", "Compresiones torácicas", "Golpes espalda"], ok: 1},
  {q: "Ante una fractura abierta:", a: ["Reducir hueso", "Cubrir con gasa estéril sin tocar hueso", "Mover extremidad"], ok: 1},
  {q: "Fractura de clavícula: inmovilización:", a: ["Con férula", "Cabestrillo", "Estirando brazo"], ok: 1},
  {q: "Trauma craneal con vómito:", a: ["Normal", "Signo de alarma, no mover", "Dar agua"], ok: 1},
  {q: "Trauma torácico con dificultad respiratoria:", a: ["Normal", "Grave, posible neumotórax", "No importa"], ok: 1},
  {q: "Fractura abierta sangrando mucho:", a: ["Quitar hueso", "Compresión directa alrededor herida", "Elevar extremidad"], ok: 1},
  {q: "Ante caída de más de 3m:", a: ["No mover + 112", "Levantar rápido", "Mover suavemente"], ok: 0},
  {q: "¿Cuándo NO debes quitar el casco a un motorista?", a: ["Si respira mal", "Si hay riesgo lesión cervical", "Si está consciente"], ok: 1},
  {q: "Trauma columna sospecha:", a: ["Sentar", "No mover, mantener alineación", "PLS"], ok: 1},
  {q: "Ante quemaduras de 2º grado:", a: ["Agua fría 10-20 min", "Hielo directo", "Pomada grasa"], ok: 0},
  {q: "Quemadura química en el ojo:", a: ["Frotar", "Lavado abundante agua 15 min", "Tapar con gasa seca"], ok: 1},
  {q: "Quemadura eléctrica:", a: ["Tocar paciente", "Cortar corriente antes de tocar", "Agua inmediata"], ok: 1},
  {q: "Quemadura grave >10% cuerpo:", a: ["Pomada", "No pomada, tapar estéril + 112", "Hielo"], ok: 1},
  {q: "Ropa pegada a quemadura:", a: ["Arrancar", "No quitar, cortar alrededor", "Mojar"], ok: 1},
  {q: "Síntoma de infarto:", a: ["Dolor torácico opresivo", "Dolor de rodilla", "Visión borrosa"], ok: 0},
  {q: "Síntoma de angina de pecho:", a: ["Dolor rodilla", "Opresión pecho que cede reposo", "Dolor cabeza"], ok: 1},
  {q: "Síntoma de ictus FAST:", a: ["Fiebre Alta", "Cara caída, Brazo débil, Habla rara", "Dolor estómago"], ok: 1},
  {q: "Ataque de asma grave:", a: ["Agua fría", "Posición sentado + inhalador", "Estirar en suelo"], ok: 1},
  {q: "Shock hipovolémico: posición:", a: ["Sentado", "Tumbado con piernas elevadas", "Boca abajo"], ok: 1},
  {q: "Hipoglucemia consciente:", a: ["Insulina", "Azúcar por boca 15g", "Agua sola"], ok: 1},
  {q: "Convulsión: ¿qué NO haces?", a: ["Proteger cabeza", "Poner objeto en boca", "Cronometrar tiempo"], ok: 1},
  {q: "Golpe de calor: síntoma:", a: ["Piel fría y húmeda", "Piel caliente y seca + confusión", "Temblores"], ok: 1},
  {q: "Hipotermia grave: ¿qué haces?", a: ["Friccionar piel", "Aislar del frío + calentar lento", "Dar alcohol"], ok: 1},
  {q: "Síntoma de alergia grave anafilaxia:", a: ["Dificultad respirar + hinchazón", "Dolor estómago", "Picor de nariz"], ok: 0},
  {q: "Anafilaxia adrenalina:", a: ["Oral", "Intramuscular muslo", "Intravenosa"], ok: 1},
  {q: "Intoxicación: ¿qué NO haces?", a: ["Llamar 112", "Provocar vómito sin indicación", "Observar paciente"], ok: 1},
  {q: "Ante intoxicación por gas:", a: ["Encender luz", "Ventilar + salir + 112", "Dar agua"], ok: 1},
  {q: "Mordedura de serpiente:", a: ["Cortar herida", "Inmovilizar extremidad + 112", "Succionar veneno"], ok: 1},
  {q: "Esguince tobillo:", a: ["Calor inmediata", "Frío + compresión + elevación", "Masaje fuerte"], ok: 1},
  {q: "Deshidratación grave: síntoma:", a: ["Orina abundante", "Sed intensa + piel seca", "Sudoración excesiva"], ok: 1},
  {q: "Herida con objeto clavado:", a: ["Quitar objeto", "Inmovilizar objeto + 112", "Presionar alrededor"], ok: 1},
  {q: "Ante amputación dedo:", a: ["Poner parte en hielo directo", "Envolver gasa estéril + bolsa + hielo externo", "Guardar seco"], ok: 1},
  {q: "Picadura abeja alergia:", a: ["Esperar", "Adrenalina si hay + 112", "Vinagre"], ok: 1}
],
  medioambiente: [
  {q: "¿Qué es la etiqueta ambiental B?", a: ["Eléctrico", "Gasolina Euro 3/4/5/6 y Diésel Euro 4/5", "Híbrido"], ok: 1},
  {q: "Etiqueta B: diésel de:", a: ["Euro 3", "Euro 4, 5 y 6", "Euro 2"], ok: 1},
  {q: "Etiqueta B: gasolina de:", a: ["Euro 2", "Euro 3, 4, 5 y 6", "Euro 1"], ok: 1},
  {q: "Etiqueta B: color:", a: ["Verde", "Amarillo", "Azul"], ok: 1},
  {q: "Etiqueta C: coche gasolina de:", a: ["Euro 3", "Euro 4, 5 y 6", "Eléctrico"], ok: 1},
  {q: "Etiqueta C: diésel de:", a: ["Euro 3", "Euro 4, 5 y 6", "Euro 2"], ok: 1},
  {q: "Etiqueta C: color:", a: ["Verde", "Amarillo", "Gris"], ok: 0},
  {q: "Etiqueta ECO: incluye:", a: ["Solo eléctrico", "Híbridos, GLP, GNC", "Diésel Euro 6"], ok: 1},
  {q: "Etiqueta ECO: híbridos enchufables:", a: ["No", "Sí, con autonomía <40km", "Sí, todos"], ok: 1},
  {q: "Etiqueta ECO: gas natural:", a: ["No", "Sí, GNC y GLP", "Solo biogás"], ok: 1},
  {q: "Etiqueta ECO: color:", a: ["Azul", "Verde-azul", "Amarillo"], ok: 1},
  {q: "Coche con etiqueta 0 emite:", a: ["CO2 bajo", "Cero emisiones tubo escape", "Solo CO"], ok: 1},
  {q: "Etiqueta 0: ejemplos:", a: ["Diésel Euro 6", "Eléctrico, H2, PHEV ≥40km autonomía", "Gasolina Euro 5"], ok: 1},
  {q: "Etiqueta 0: recarga PHEV:", a: ["No hace falta", "Obligatoria para mantener etiqueta", "Solo gas"], ok: 1},
  {q: "Etiqueta A no existe porque:", a: ["Todos contaminan", "Ya es 0 y ECO las mejores", "No hay coches"], ok: 1},
  {q: "¿Qué es ZBE?", a: ["Zona azul", "Zona bajas emisiones", "Zona bus"], ok: 1},
  {q: "¿Qué prohíbe ZBE sin etiqueta?", a: ["Nada", "Acceso según ciudad y horario", "Aparcar"], ok: 1},
  {q: "Etiqueta 0: ventaja ZBE:", a: ["Ninguna", "Acceso libre + aparcar gratis", "Ha de pagar"], ok: 1},
  {q: "Etiqueta ECO: ventaja ZBE:", a: ["Gratis ZBE", "Acceso libre", "Nada"], ok: 1},
  {q: "Etiqueta C: puede entrar ZBE?", a: ["Nunca", "Depende ciudad/hora", "Siempre"], ok: 1},
  {q: "Etiqueta B: exenta ZBE?", a: ["Siempre", "Depende ciudad, cada vez más restricciones", "Nunca"], ok: 1},
  {q: "Etiqueta B: ventaja ZBE:", a: ["Gratis ZBE", "Acceso cada vez más limitado", "Nada"], ok: 1},
  {q: "Etiqueta 0: aparcamiento ZBE?", a: ["Nunca gratis", "Puede ser gratis según ayuntamiento", "Siempre paga"], ok: 1},
  {q: "Etiqueta 0: exento impuesto circulación?", a: ["Nunca", "Depende ayuntamiento", "Siempre"], ok: 1},
  {q: "Moto sin etiqueta en ZBE 2026:", a: ["Prohibido", "Permitido hasta 2027", "Solo de noche"], ok: 1},
  {q: "Multa entrar ZBE sin permiso:", a: ["50€", "200€", "Solo aviso"], ok: 1},
  {q: "Cómo saber si puedo entrar ZBE:", a: ["Preguntar", "Web DGT + etiqueta parabrisas", "Solo ITV"], ok: 1},
  {q: "Conducción eficiente reduce:", a: ["Solo ruido", "Consumo + CO2 hasta 15%", "Velocidad"], ok: 1},
  {q: "¿Cuándo debes apagar motor?", a: ["Nunca", "Parado >30 segundos", "Solo en semáforo"], ok: 1},
  {q: "Cambiar marcha antes 2500 rpm gasolina:", a: ["Gasta más", "Ahorra + contamina menos", "No cambia"], ok: 1},
  {q: "Cambiar marcha antes 2000 rpm diésel:", a: ["Fuerza motor", "Ahorra + contamina menos", "Rompe coche"], ok: 1},
  {q: "Velocidad constante ahorra:", a: ["Nada", "Combustible + emisiones", "Solo tiempo"], ok: 1},
  {q: "Marcha larga con rpm bajas:", a: ["Fuerza motor", "Conducción eficiente", "Rompen coche"], ok: 1},
  {q: "Frenar con motor:", a: ["Gasta más", "Ahorra combustible + frenos", "No cambia"], ok: 1},
  {q: "Anticipar tráfico:", a: ["No sirve", "Reduce frenadas + consumo", "Aumenta velocidad"], ok: 1},
  {q: "Arrancar y marchar sin esperar:", a: ["Mal", "Correcto, no calentar parado", "Solo frío"], ok: 1},
  {q: "Dejar ralentí calentando:", a: ["Necesario", "Contamina y gasta innecesario", "Obligatorio invierno"], ok: 1},
  {q: "Apagar motor bajando cuesta:", a: ["Correcto", "Peligroso, pierdes dirección/frenos", "Obligatorio"], ok: 1},
  {q: "Usar marcha adecuada:", a: ["No importa", "Reduce emisiones + consumo", "Aumenta velocidad"], ok: 1},
  {q: "Conducir a revoluciones altas:", a: ["Ahorra", "Contamina + gasta más", "No afecta"], ok: 1},
  {q: "Circular a 120 vs 100 km/h:", a: ["Mismo consumo", "Gasta +30% combustible", "Gasta -10%"], ok: 1},
  {q: "Conducción brusca:", a: ["Ahorra", "Aumenta CO2 hasta 40%", "No afecta"], ok: 1},
  {q: "Acelerar bruscamente:", a: ["Ahorra", "Aumenta contaminación", "No afecta"], ok: 1},
  {q: "Motor frío consume:", a: ["Menos", "Más hasta 50%", "Igual"], ok: 1},
  {q: "Neumáticos desinflados provocan:", a: ["Menos consumo", "Más consumo + CO2 + desgaste", "Menos ruido"], ok: 1},
  {q: "Neumáticos en buen estado:", a: ["No importa", "Reducen consumo + seguridad", "Aumentan ruido"], ok: 1},
  {q: "Revisar presión neumáticos:", a: ["Cada año", "Cada mes en frío", "Solo ITV"], ok: 1},
  {q: "Llevar peso innecesario:", a: ["No afecta", "Aumenta consumo 6% cada 100kg", "Reduce consumo"], ok: 1},
  {q: "Carga en el techo/baca:", a: ["Reduce consumo", "Aumenta resistencia + consumo 15%", "No afecta"], ok: 1},
  {q: "Cerrar ventanas autopista:", a: ["Aumenta ruido", "Reduce resistencia aerodinámica", "No cambia"], ok: 1},
  {q: "Usar aire acondicionado:", a: ["Reduce consumo", "Aumenta consumo 5-10%", "No afecta"], ok: 1},
  {q: "A/C a 21º vs 18º:", a: ["Igual consumo", "Menor consumo", "Mayor confort"], ok: 1},
  {q: "Cambio de aceite tardío:", a: ["Mejora motor", "Contamina más + daña motor", "No afecta"], ok: 1},
  {q: "Cambiar filtro aire sucio:", a: ["No sirve", "Reduce consumo hasta 10%", "Aumenta potencia"], ok: 1},
  {q: "Revisión ITVE al día:", a: ["No afecta", "Reduce emisiones + consumo", "Aumenta consumo"], ok: 1},
  {q: "Mantenimiento coche:", a: ["No afecta medio ambiente", "Clave para contaminar menos", "Solo para ITV"], ok: 1},
  {q: "Bujías gastadas gasolina:", a: ["No afecta", "Aumenta consumo + emisiones", "Mejora potencia"], ok: 1},
  {q: "Híbrido no enchufable consume:", a: ["Igual que gasolina", "Menos en ciudad por regeneración", "Más siempre"], ok: 1},
  {q: "PHEV autonomía eléctrica 50km:", a: ["Etiqueta ECO", "Etiqueta 0", "Etiqueta C"], ok: 1},
  {q: "Eléctrico puro emisiones:", a: ["CO2 bajo", "Cero emisiones tubo escape", "Solo CO"], ok: 1},
  {q: "Freno regenerativo eléctrico:", a: ["No existe", "Recarga batería al decelerar", "Solo híbridos"], ok: 1},
  {q: "Cargar eléctrico noche:", a: ["Más caro", "Más barato + energía renovable", "Igual"], ok: 1},
  {q: "GLP/GNC vs gasolina:", a: ["Contamina más", "Contamina menos CO2 + NOx", "Igual"], ok: 1},
  {q: "Arrancar en frío:", a: ["Acelerar fuerte", "Arrancar y salir suave sin revolucionar", "Esperar 5 min"], ok: 1},
  {q: "Aparcar cuesta abajo:", a: ["Punto muerto", "Marcha atrás + freno mano", "Solo freno mano"], ok: 1},
  {q: "Aparcar cuesta arriba:", a: ["Punto muerto", "1ª marcha + freno mano", "Solo freno mano"], ok: 1},
  {q: "Repostar motor encendido:", a: ["Correcto", "Prohibido + peligroso", "Obligatorio"], ok: 1},
  {q: "Móvil repostando:", a: ["Permitido", "Prohibido por riesgo chispa", "Solo llamadas"], ok: 1}
],
  situaciones: [
  // === CLIMA ===
  {q: "Lluvia intensa: ¿qué haces?", a: ["Acelero para salir", "Reduzco velocidad y aumento distancia", "Freno en seco"], ok: 1, categoria: "clima"},
  {q: "Niebla espesa:", a: ["Luces largas", "Antiniebla + cortas", "Sin luces"], ok: 1, categoria: "clima"},
  {q: "Hielo en la calzada:", a: ["Freno fuerte", "Marchas largas sin frenar brusco", "Acelero"], ok: 1, categoria: "clima"},
  {q: "Charcos grandes:", a: ["Acelera", "Evita y reduce velocidad", "Frena fuerte"], ok: 1, categoria: "clima"},
  {q: "Viento lateral fuerte:", a: ["Sujeta el volante firme", "Deja ir el volante", "Acelera"], ok: 0, categoria: "clima"},
  {q: "Nieve en la carretera:", a: ["Acelera", "Cadenas o neumáticos M+S + marcha larga", "Frena brusco"], ok: 1, categoria: "clima"},
  {q: "Granizo:", a: ["Para bajo puente", "Sigue igual", "Acelera para pasar rápido"], ok: 0, categoria: "clima"},
  {q: "Sol de cara que deslumbra:", a: ["Apaga luces", "Visera + gafas sol", "Acelera"], ok: 1, categoria: "clima"},
  {q: "Asfalto muy caliente:", a: ["Acelera", "Vigila neumáticos, reduce velocidad", "Frena brusco"], ok: 1, categoria: "clima"},
  {q: "Lluvia después de sequía:", a: ["Conducción normal", "Muy peligroso, el asfalto resbala más", "Acelera"], ok: 1, categoria: "clima"},
  {q: "Niebla en túnel:", a: ["Apaga luces", "Antiniebla + cortas, distancia grande", "Luces largas"], ok: 1, categoria: "clima"},
  {q: "Tormenta con rayos:", a: ["Acelera", "Sigue, coche hace de jaula Faraday", "Para en campo abierto"], ok: 1, categoria: "clima"},
  {q: "Viento en puente:", a: ["Sujeta fuerte volante, reduce", "Acelera para pasar", "Deja ir volante"], ok: 0, categoria: "clima"},
  {q: "Balsa helada:", a: ["Frena encima", "Evita o pasa muy lento sin girar volante", "Acelera"], ok: 1, categoria: "clima"},
  {q: "Lluvia + línea blanca:", a: ["Pisa línea", "Evita pisar líneas, resbalan", "Acelera"], ok: 1, categoria: "clima"},
  {q: "Niebla + salida autopista:", a: ["Acelera para salir", "Reduce mucho antes, señaliza pronto", "Corta carriles"], ok: 1, categoria: "clima"},
  {q: "Sol bajo en horizonte:", a: ["Apaga luces", "Visera, aumenta distancia", "Acelera"], ok: 1, categoria: "clima"},
  {q: "Lluvia + motocicleta al lado:", a: ["Adelanta rápido", "Aumenta distancia lateral, el agua le deslumbra", "Toca claxon"], ok: 1, categoria: "clima"},
  {q: "Viento + camión adelantando:", a: ["Acelera", "Sujeta volante, mantén distancia", "Cambia carril brusco"], ok: 0, categoria: "clima"},
  {q: "Nieve honda:", a: ["Acelera fuerte", "Marcha larga, gas suave, sin giros bruscos", "Frena motor brusco"], ok: 1, categoria: "clima"},
  {q: "Granizada en autopista:", a: ["Acelera para salir", "Reduce mucho, distancia x3, manos firmes al volante", "Frena brusco"], ok: 1, categoria: "clima"},
  {q: "Cristales empañados por dentro:", a: ["Abrir ventana y A/C desempañar", "Poner calor a máximo sin aire", "Seguir igual"], ok: 0, categoria: "clima"},
  {q: "Chubasco repentino en zona urbana:", a: ["Acelera", "Reduce, vigila pasos de peatón resbaladizos", "Frena encima marcas blancas"], ok: 1, categoria: "clima"},
  {q: "Tormenta de arena:", a: ["Luces largas", "Antiniebla + reducir velocidad, cerrar ventilación", "Apagar luces"], ok: 1, categoria: "clima"},
  {q: "Hielo negro en puente:", a: ["Frenar suave", "No frenar ni girar, mantener trayectoria", "Acelerar para pasar rápido"], ok: 1, categoria: "clima"},
  {q: "Lluvia + noche:", a: ["Conducción normal", "Aumentar distancia, vigilar deslumbramientos", "Poner largas"], ok: 1, categoria: "clima"},
  {q: "Viento fuerte + moto delante:", a: ["Adelantar rápido", "Mantener distancia lateral, puede moverse brusco", "Tocar claxon"], ok: 1, categoria: "clima"},
  {q: "Niebla + curva cerrada:", a: ["Tocar claxon", "Reducir antes de la curva, cortas + antiniebla", "Largas"], ok: 1, categoria: "clima"},
  {q: "Asfalto mojado + frenada:", a: ["Frenar brusco", "Frenar progresivo, evitar bloqueo", "Acelerar"], ok: 1, categoria: "clima"},
  {q: "Nieve derretida en arcén:", a: ["Circular por arcén", "Evitar salpicar peatones, reducir", "Acelerar"], ok: 1, categoria: "clima"},
  {q: "Calor extrema y atasco:", a: ["Apagar motor", "Vigilar temperatura, mantener distancia", "Poner calefacción"], ok: 1, categoria: "clima"},
  {q: "Niebla + salida túnel:", a: ["Acelerar al salir", "Adaptar vista, reducir antes de entrar", "Largas dentro túnel"], ok: 1, categoria: "clima"},
  {q: "Lluvia + balsa de agua:", a: ["Pasar por medio rápido", "Evitar si es profunda, pasar lento por lateral", "Frenar dentro del agua"], ok: 1, categoria: "clima"},
  {q: "Viento + remolque:", a: ["Sujetar firme, reducir velocidad", "Ir normal", "Acelerar para estabilizar"], ok: 0, categoria: "clima"},
  {q: "Sol de tarde y asfalto mojado:", a: ["Largas", "Cortas, aumentar distancia, visera", "Apagar luces"], ok: 1, categoria: "clima"},
  {q: "Nieve + bajada pronunciada:", a: ["Frenar brusco", "Marcha corta, freno motor, sin bloquear ruedas", "Punto muerto"], ok: 1, categoria: "clima"},
  {q: "Niebla + cambio de carril:", a: ["Cambiar rápido", "Señalizar antes, mirar doble, cambiar lento", "Sin señalizar"], ok: 1, categoria: "clima"},
  {q: "Lluvia + bicicleta al lado:", a: ["Adelantar pegado", "Más distancia lateral, vigilar salpicaduras", "Tocar claxon"], ok: 1, categoria: "clima"},
  {q: "Hielo + semáforo en verde:", a: ["Acelerar fuerte", "Arrancar suave, marcha larga", "Frenar en el cruce"], ok: 1, categoria: "clima"},
  {q: "Viento lateral + salida túnel:", a: ["Sujetar volante firme, reducir", "Ir igual", "Acelerar para compensar"], ok: 0, categoria: "clima"},

  // === URBANO ===
  {q: "Peatón cruza fuera paso cebra:", a: ["Toca claxon", "Reduce, prepárate para parar", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Niño corre hacia calzada:", a: ["Toca claxon", "Frena, prevé que puede correr", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Bici va por acera:", a: ["Toca claxon", "Reduce, puede bajar a calzada", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Bus para en parada:", a: ["Avanza por derecha", "Reduce, puede cruzar gente", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Taxi para en doble fila:", a: ["Toca claxon", "Cambia carril con precaución", "Pasa por acera"], ok: 1, categoria: "urbano"},
  {q: "Puerta coche aparcado se abre:", a: ["Acelera", "Reduce, mira retrovisores antes", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Patinete eléctrico zigzaguea:", a: ["Avanza rápido", "Aumenta distancia, prevé giro brusco", "Toca claxon largo"], ok: 1, categoria: "urbano"},
  {q: "Perro cruza carretera:", a: ["Toca claxon fuerte", "Reduce, puede girar el perro", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Moto hace carril-bus:", a: ["Ciérrale paso", "Mantén carril, no cierres", "Acelera para adelantar"], ok: 1, categoria: "urbano"},
  {q: "Coche aparca en batería:", a: ["Acelera", "Reduce, puede salir marcha atrás", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Peatón habla teléfono cruzando:", a: ["Toca claxon", "Reduce, no te verá", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Grupo gente ocupa acera y baja a calzada:", a: ["Acelera", "Reduce, cede paso", "Toca claxon largo"], ok: 1, categoria: "urbano"},
  {q: "Coche escuela con L delante:", a: ["Avanza rápido", "Aumenta distancia, puede frenar brusco", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Camión basura marcha atrás:", a: ["Acelera para pasar", "Para, luz amarilla girando", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Ciclista sin casco en acera:", a: ["Acelera", "Reduce, puede bajar a calzada", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Semáforo en ámbar y estás cerca:", a: ["Frena fuerte", "Si no puedes parar seguro, pasa", "Acelera"], ok: 1, categoria: "urbano"},
  {q: "Cruce sin señal y coche derecha llega:", a: ["Acelera", "Cede paso al de la derecha", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Glorieta y coche dentro no sale:", a: ["Entra", "Espera que salga, él tiene preferencia", "Toca claxon"], ok: 1, categoria: "urbano"},
  {q: "Paso cebra elevado:", a: ["Acelera", "Reduce mucho, puede haber gente", "Frena encima"], ok: 1, categoria: "urbano"},
  {q: "Coche policía aparcado con luces:", a: ["Acelera", "Reduce mucho, prevé agente en vía", "Cambia carril brusco"], ok: 1, categoria: "urbano"},
  {q: "Peatón con paraguas cruza:", a: ["Acelera", "Reduce, no ve bien por lados", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Coche escuela hace maniobra:", a: ["Tocar claxon", "Aumentar distancia, paciencia", "Adelantar pegado"], ok: 1, categoria: "urbano"},
  {q: "Furgoneta hace carga en doble fila:", a: ["Pasar por acera", "Cambiar carril con precaución, mirar ciclista", "Tocar claxon largo"], ok: 1, categoria: "urbano"},
  {q: "Niño con pelota en acera:", a: ["Acelera", "Reduce, puede salir detrás coche", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Semáforo peatones en verde intermitente:", a: ["Acelerar", "No entrar si no puedes cruzar entero", "Parar sobre paso"], ok: 1, categoria: "urbano"},
  {q: "Moto filtrando entre coches:", a: ["Cerrarle paso", "Mantener trayectoria, mirar retrovisores", "Abrir puerta"], ok: 1, categoria: "urbano"},
  {q: "Bus escolar para:", a: ["Adelantar", "Reducir, niños pueden cruzar", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Glorieta pequeña y coche grande dentro:", a: ["Entrar", "Ceder paso, él tiene prioridad dentro", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Coche aparca en línea y pone marcha atrás:", a: ["Acelera para pasar", "Parar, dejar maniobrar", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Ciclista indica giro con brazo:", a: ["Adelantarle", "Respetar señal, ceder paso", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Peatón cruza con semáforo rojo:", a: ["Tocar claxon", "Frenar, ceder paso por seguridad", "Acelerar"], ok: 1, categoria: "urbano"},
  {q: "Taxi enciende luz libre:", a: ["Acelera", "Reducir, puede parar de golpe", "Cerrarle paso"], ok: 1, categoria: "urbano"},
  {q: "Coche sale de garaje sin ver:", a: ["Acelera", "Reducir, tocar claxon suave", "Pasar pegado"], ok: 1, categoria: "urbano"},
  {q: "Patinete sube a acera:", a: ["Tocar claxon", "Reducir, puede caer a calzada", "Adelantar rápido"], ok: 1, categoria: "urbano"},
  {q: "Cruce con agente regulando:", a: ["Hacer caso semáforo", "Hacer caso agente, ignorar semáforo", "Seguir recto"], ok: 1, categoria: "urbano"},
  {q: "Coche detrás muy cerca en atasco:", a: ["Frenar brusco", "Mantener distancia, evitar frenadas secas", "Acelerar"], ok: 1, categoria: "urbano"},
  {q: "Perro atado cruza tirando correa:", a: ["Acelera", "Reducir, puede atravesar entero", "Tocar claxon"], ok: 1, categoria: "urbano"},
  {q: "Peatón habla por móvil y no mira:", a: ["Tocar claxon largo", "Reducir, preparar parada", "Acelerar"], ok: 1, categoria: "urbano"},
  {q: "Camión girando derecha en cruce:", a: ["Adelantarle por derecha", "Esperar, tiene ángulo muerto grande", "Cortarle giro"], ok: 1, categoria: "urbano"},
  {q: "Paso de peatones sin pintar pero frecuentado:", a: ["Acelerar", "Reducir, ceder paso si gente espera", "Tocar claxon"], ok: 1, categoria: "urbano"},

  // === CARRETERA ===
  {q: "Has de hacer cambio sentido en carretera:", a: ["Donde sea", "Solo donde lo permite señal y visibilidad", "En rotonda siempre"], ok: 1, categoria: "carretera"},
  {q: "Coche lento delante en curva:", a: ["Adelanta en curva", "Espera recta con visibilidad", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Línea continua + coche lento:", a: ["Avanza", "No adelantar nunca", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Camión sube lento cuesta:", a: ["Avanza en cuesta", "Espera arriba si hace falta", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Animal salvaje en arcén:", a: ["Toca claxon", "Reduce, puede saltar", "Acelera"], ok: 1, categoria: "carretera"},
  {q: "Coche averiado en arcén:", a: ["Acelera", "Reduce, aléjate del arcén", "Cambia carril brusco"], ok: 1, categoria: "carretera"},
  {q: "Carretera cortada, desvío:", a: ["Sigue recto", "Sigue señales amarillas desvío", "Ignora señales"], ok: 1, categoria: "carretera"},
  {q: "Coche detrás te hace luces:", a: ["Frena", "Mantén velocidad, cambia carril cuando puedas", "Acelera"], ok: 1, categoria: "carretera"},
  {q: "Has de salir próxima salida y vas carril izquierdo:", a: ["Corta carriles", "Cambia con tiempo, espejos + ángulo muerto", "Sigue recto"], ok: 1, categoria: "carretera"},
  {q: "Incorporación con carril aceleración corto:", a: ["Para al final", "Acelera fuerte para igualar velocidad", "Entra lento"], ok: 1, categoria: "carretera"},
  {q: "Túnel sin luz:", a: ["Apaga luces", "Enciende cruce inmediato", "Sigue sin luces"], ok: 1, categoria: "carretera"},
  {q: "Puente estrecho y viene coche:", a: ["Acelera", "El que está más cerca cede", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Desprendimiento piedras en vía:", a: ["Acelera", "Reduce, esquiva si seguro", "Frena encima piedras"], ok: 1, categoria: "carretera"},
  {q: "Carretera con curvas y ciclista:", a: ["Avanza en curva", "Espera recta, 1.5m distancia", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘fin límite velocidad’:", a: ["Acelera a 140", "Sigue límite genérico vía", "Para"], ok: 1, categoria: "carretera"},
  {q: "Coche adelanta en zona prohibida:", a: ["Ciérrale paso", "Mantén carril, no aceleres", "Acelera"], ok: 1, categoria: "carretera"},
  {q: "Incorporación por carril lento:", a: ["Para", "Acelera para igualar velocidad, cede", "Entra cortando"], ok: 1, categoria: "carretera"},
  {q: "Carretera estrecha y viene coche:", a: ["Acelera", "El que puede apartarse cede", "Toca claxon"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘ceda el paso’ y no viene nadie:", a: ["Para siempre", "Reduce, mira, si libre sigue", "Acelera"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘STOP’ y visibilidad buena:", a: ["No pares", "Parada total, después mira y sigue", "Acelera"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘curva peligrosa’:", a: ["Mantener velocidad", "Reducir antes de entrar, no frenar dentro", "Acelerar a la salida"], ok: 1, categoria: "carretera"},
  {q: "Coche lento en carril derecho autopista:", a: ["Adelantar por izquierda", "Mantener carril, no adelantar por derecha", "Tocar claxon"], ok: 1, categoria: "carretera"},
  {q: "Línea discontinua y viene coche de cara:", a: ["Adelantar rápido", "Esperar, no adelantar", "Tocar largas"], ok: 1, categoria: "carretera"},
  {q: "Bajada larga y cargado:", a: ["Punto muerto", "Marcha corta, freno motor", "Frenar constante"], ok: 1, categoria: "carretera"},
  {q: "Coche adelanta y no vuelve al carril:", a: ["Cerrarle paso", "Reducir, dejar que vuelva", "Acelerar"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘viento lateral’:", a: ["Sujetar volante, reducir", "Ir igual", "Acelerar"], ok: 0, categoria: "carretera"},
  {q: "Túnel largo y atasco:", a: ["Apagar luces", "Luces encendidas, distancia, sin cambiar carril", "Avituallamiento"], ok: 1, categoria: "carretera"},
  {q: "Carretera comarcal sin arcén:", a: ["Circular por medio", "Pegarte a la derecha, vigilar ciclistas", "Adelantar en curva"], ok: 1, categoria: "carretera"},
  {q: "Coche con remolque balancea:", a: ["Adelantar rápido", "Aumentar distancia, no provocar corrientes aire", "Tocar largas"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘fin autopista’:", a: ["Acelerar", "Reducir, adaptar a nueva vía", "Seguir igual"], ok: 1, categoria: "carretera"},
  {q: "Incorporación y carril lleno:", a: ["Parar al final", "Ceder paso, esperar hueco seguro", "Entrar cortando"], ok: 1, categoria: "carretera"},
  {q: "Carretera con firme dañado:", a: ["Acelerar para salir", "Reducir, agarrar volante firme", "Cambiar carril brusco"], ok: 1, categoria: "carretera"},
  {q: "Coche detrás adelanta en zona prohibida:", a: ["Cerrarle paso", "Mantener velocidad, no acelerar", "Frenar delante"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘cruce caminos’:", a: ["Acelerar", "Reducir, mirar laterales", "Tocar claxon"], ok: 1, categoria: "carretera"},
  {q: "Puente móvil y se abre:", a: ["Acelerar para pasar", "Parar antes barrera, respetar señal", "Rodear barrera"], ok: 1, categoria: "carretera"},
  {q: "Carretera estrecha y bicicleta:", a: ["Adelantar tocando claxon", "1.5m distancia, esperar recta", "Adelantar en curva"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘animales sueltos’:", a: ["Ir igual", "Reducir, mirar arcenes", "Acelerar"], ok: 1, categoria: "carretera"},
  {q: "Coche averiado ocupa medio carril:", a: ["Pasar pegado", "Cambiar carril o reducir mucho", "Tocar largas"], ok: 1, categoria: "carretera"},
  {q: "Carretera con obras y carril desviado:", a: ["Seguir GPS", "Hacer caso señales naranja, reducir", "Ir por arcén"], ok: 1, categoria: "carretera"},
  {q: "Señal ‘prohibido adelantar’ y vas lento:", a: ["Adelantar igual", "Respetar señal, no adelantar", "Tocar claxon"], ok: 1, categoria: "carretera"},

  // === EMERGENCIA ===
  {q: "Ambulancia detrás con luces y sonido:", a: ["Acelera", "Apártate a derecha y para si hace falta", "Toca claxon"], ok: 1, categoria: "emergencia"},
  {q: "Coche en llamas delante:", a: ["Acelera para pasar", "Para lejos, avisa 112, no te acerques", "Abre capó"], ok: 1, categoria: "emergencia"},
  {q: "Accidente con herido en vía:", a: ["Sigue", "Para, señaliza, avisa 112, no muevas herido", "Mueve herido"], ok: 1, categoria: "emergencia"},
  {q: "Has pinchado rueda en autopista:", a: ["Para en carril derecho", "Arcén derecho, chaleco + triángulos a 50m", "Para en carril izquierdo"], ok: 1, categoria: "emergencia"},
  {q: "Coche pierde potencia y se para:", a: ["Para en medio", "Arcén, luces emergencia, avisa", "Sigue sin gas"], ok: 1, categoria: "emergencia"},
  {q: "Humo sale motor:", a: ["Acelera para llegar", "Para, apaga motor, no abras capó inmediato", "Abre tapón refrigerante"], ok: 1, categoria: "emergencia"},
  {q: "Frenada falla bajando puerto:", a: ["Acelera", "Usa freno motor + arcén seguridad", "Apaga motor"], ok: 1, categoria: "emergencia"},
  {q: "Conductor se encuentra mal:", a: ["Sigue", "Para seguro, llama 112, coloca en posición lateral seguro", "Sigue"], ok: 1, categoria: "emergencia"},
  {q: "Viajero tiene ataque epiléptico:", a: ["Acelera", "Para seguro, protege, no le sujetes, llama 112", "Sigue"], ok: 1, categoria: "emergencia"},
  {q: "Coche vuelca delante:", a: ["Acelera para pasar", "Para lejos, avisa 112, no muevas ocupantes", "Sácalos tú"], ok: 1, categoria: "emergencia"},
  {q: "Fuga combustible:", a: ["Acelera", "Para, apaga motor, no fumes, avisa 112", "Fuma para ver de dónde sale"], ok: 1, categoria: "emergencia"},
  {q: "Piedra rompe parabrisas:", a: ["Acelera", "Reduce, para seguro, tapa agujero si hace falta", "Sigue sin ver"], ok: 1, categoria: "emergencia"},
  {q: "Airbag salta sin choque:", a: ["Acelera", "Para seguro, apaga motor", "Sigue"], ok: 1, categoria: "emergencia"},
  {q: "Neumático revienta a 120km/h:", a: ["Frena fuerte", "Sujeta volante firme, reduce gas sin frenar brusco", "Frena a fondo"], ok: 1, categoria: "emergencia"},
  {q: "Pedal freno se hunde sin frenar:", a: ["Acelera", "Freno motor + freno mano progresivo, arcén", "Apaga motor en marcha"], ok: 1, categoria: "emergencia"},
  {q: "Dirección se bloquea:", a: ["Acelera", "Para lo más rápido posible seguro, luces emergencia", "Sigue"], ok: 1, categoria: "emergencia"},
  {q: "Coche se incendia con gente dentro:", a: ["Abre tú puertas", "Ayuda a salir, llama 112, no arriesgues vida", "Sigue"], ok: 1, categoria: "emergencia"},
  {q: "Peatón atropellado:", a: ["Sigue", "Para, señaliza, avisa 112, no muevas", "Muévelo a acera"], ok: 1, categoria: "emergencia"},
  {q: "Animal grande embestido y vivo en vía:", a: ["Acelera", "Señaliza, avisa 112, no te acerques", "Sácalo tú"], ok: 1, categoria: "emergencia"},
  {q: "Has de socorrer pero no sabes primeros auxilios:", a: ["No hagas nada", "Señaliza, avisa 112, tranquiliza herido, espera ayuda", "Mueve herido"], ok: 1, categoria: "emergencia"},
  {q: "Coche con humo blanco denso por el tubo:", a: ["Acelera", "Para seguro, apaga motor, avisa grúa", "Abre tapón aceite"], ok: 1, categoria: "emergencia"},
  {q: "Conductor delante se duerme:", a: ["Tocar largas", "Aumentar distancia, avisar 112 si peligro", "Adelantar rápido"], ok: 1, categoria: "emergencia"},
  {q: "Piedra en la vía y no puedes esquivar:", a: ["Frenar brusco", "Sujetar volante, pasar por encima recto", "Girar brusco"], ok: 1, categoria: "emergencia"},
  {q: "Airbag no salta en choque leve:", a: ["Seguir", "Parar, revisar heridos, avisar 112", "Tocar claxon"], ok: 1, categoria: "emergencia"},
  {q: "Pedal acelerador se atasca:", a: ["Apagar motor en marcha", "Punto muerto, frenar progresivo, arcén", "Acelerar más"], ok: 1, categoria: "emergencia"},
  {q: "Peatón cae a la vía:", a: ["Acelera para pasar", "Para, señaliza, avisa 112", "Moverlo tú"], ok: 1, categoria: "emergencia"},
  {q: "Coche con matrícula extranjera perdido:", a: ["Tocar claxon", "Reducir, dejar espacio, no presionar", "Adelantar pegado"], ok: 1, categoria: "emergencia"},
  {q: "Batería se descarga y coche se para:", a: ["Parar en el carril", "Arcén, luces emergencia, triángulos 50m", "Seguir sin luces"], ok: 1, categoria: "emergencia"},
  {q: "Conductor delante lanza objeto:", a: ["Acelera para pasar", "Aumentar distancia, avisar si peligro", "Tocar claxon"], ok: 1, categoria: "emergencia"},
  {q: "Rueda de repuesto cae del coche delante:", a: ["Frenar brusco", "Reducir, esquivar si seguro, avisar", "Pasar por encima"], ok: 1, categoria: "emergencia"},
  {q: "Coche con puerta abierta circulando:", a: ["Adelantar", "Tocar claxon suave, avisar", "Ignorar"], ok: 1, categoria: "emergencia"},
  {q: "Has de hacer RCP y no sabes:", a: ["No hacer nada", "Llamar 112, seguir instrucciones operador", "Mover herido"], ok: 1, categoria: "emergencia"},
  {q: "Coche con humo negro y pérdida potencia:", a: ["Acelerar", "Para seguro, apaga motor", "Seguir hasta taller"], ok: 1, categoria: "emergencia"},
  {q: "Peatón sangrando por cabeza:", a: ["Moverlo a acera", "No mover, tapar herida, avisar 112", "Dar agua"], ok: 1, categoria: "emergencia"},
  {q: "Coche con luz de freno fundida:", a: ["Ignorar", "Aumentar distancia, avisar con claxon leve", "Tocar largas"], ok: 1, categoria: "emergencia"},
  {q: "Has de evacuar coche rápido:", a: ["Salir por ventana", "Cortacinturón + rompevidrio, salir ordenado", "Abrir puerta normal"], ok: 0, categoria: "emergencia"},
  {q: "Coche con matrícula tapada:", a: ["Adelantar", "Aumentar distancia, no perseguir", "Cerrarle paso"], ok: 1, categoria: "emergencia"},
  {q: "Conductor tiene ataque de pánico:", a: ["Seguir", "Para seguro, tranquilizar, avisar si hace falta", "Presionar para seguir"], ok: 1, categoria: "emergencia"},
  {q: "Señal acústica continua del coche:", a: ["Ignorar", "Para seguro, revisa cuadro, avisa grúa", "Acelerar"], ok: 1, categoria: "emergencia"},
  {q: "Has de señalizar accidente de noche:", a: ["Poner triángulos a 10m", "Triángulos 50m vía, 100m autopista, chaleco", "Solo luces emergencia"], ok: 1, categoria: "emergencia"}
],

const SENALES_SVG = {
  // === SECCIÓN 3.2: PRIORIDAD r-1 a r-6 ===
  "r-1": `<svg viewBox="0 0 200 200"><polygon points="100,180 20,20 180,20" fill="#E74C3C"/><polygon points="100,165 35,35 165,35" fill="white"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="#000">STOP</text></svg>`,
  "r-2": `<svg viewBox="0 0 200 200"><polygon points="100,20 20,180 180,180" fill="#E74C3C"/><polygon points="100,35 35,165 165,165" fill="white"/><text x="100" y="120" text-anchor="middle" font-size="28" font-weight="bold" fill="#000">CEDA EL PASO</text></svg>`,
  "r-3": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#000" stroke-width="12"/><path d="M50 100 L100 60 L150 100 L100 140 Z" fill="none" stroke="#000" stroke-width="12"/><path d="M100 60 L100 140" stroke="#000" stroke-width="12"/></svg>`,
  "r-4": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#000" stroke-width="12"/><path d="M50 100 L100 60 L150 100 L100 140 Z" fill="none" stroke="#000" stroke-width="12"/><path d="M100 60 L100 140" stroke="#000" stroke-width="12"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-5": `<svg viewBox="0 0 200 200"><rect x="30" y="50" width="140" height="100" rx="15" fill="white" stroke="#000" stroke-width="10"/><path d="M50 80 L70 70 L90 80 M110 80 L130 70 L150 80" stroke="#000" stroke-width="8" fill="none"/><path d="M70 80 L70 120 M90 80 L90 120 M110 80 L110 120 M130 80 L130 120" stroke="#000" stroke-width="6"/></svg>`,
  "r-6": `<svg viewBox="0 0 200 200"><rect x="30" y="50" width="140" height="100" rx="15" fill="white" stroke="#000" stroke-width="10"/><path d="M50 120 L70 130 L90 120 M110 120 L130 130 L150 120" stroke="#000" stroke-width="8" fill="none"/><path d="M70 120 L70 80 M90 120 L90 80 M110 120 L110 80 M130 120 L130 80" stroke="#000" stroke-width="6"/></svg>`,

  // === SECCIÓN 3.3: PROHIBICIÓN ENTRADA r-100 a r-116 ===
  "r-100": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="50" y="90" width="100" height="20" fill="#E74C3C" rx="5"/></svg>`,
  "r-101": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="#000">STOP</text></svg>`,
  "r-102": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="70" cy="100" r="18" fill="#000"/><path d="M70 100 L70 130 M70 115 L60 130 M70 115 L80 130" stroke="#000" stroke-width="8" stroke-linecap="round"/><circle cx="130" cy="100" r="18" fill="#000"/><path d="M130 100 L130 140 M130 120 L120 140 M130 120 L140 140" stroke="#000" stroke-width="8" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-103": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="60" y="70" width="80" height="60" rx="10" fill="#000"/><circle cx="80" cy="140" r="15" fill="#000"/><circle cx="120" cy="140" r="15" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-104": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="30" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-105": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="60" y="80" width="80" height="40" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-106": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="55" y="75" width="90" height="50" rx="8" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-107": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M70 80 L130 80 L130 120 L70 120 Z" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-108": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="70" cy="100" r="18" fill="#000"/><path d="M70 100 L70 130 M70 115 L60 130 M70 115 L80 130" stroke="#000" stroke-width="8" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-109": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M60 90 L140 90 L140 110 L60 110 Z" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-110": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="20" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-111": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="60" y="80" width="80" height="40" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-112": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="20" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-113": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="20" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-114": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="70" cy="100" r="18" fill="#000"/><path d="M70 100 L70 130 M70 115 L60 130 M70 115 L80 130" stroke="#000" stroke-width="8" stroke-linecap="round"/><circle cx="130" cy="100" r="18" fill="#000"/><path d="M130 100 L130 140 M130 120 L120 140 M130 120 L140 140" stroke="#000" stroke-width="8" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-115": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="20" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-116": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><circle cx="100" cy="100" r="20" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,

  // === SECCIÓN 3.4: RESTRICCIÓN PASO r-200 a r-204 ===
  "r-200": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="#000">5t</text></svg>`,
  "r-201": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="60" font-weight="bold" fill="#000">3,5t</text></svg>`,
  "r-202": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="60" font-weight="bold" fill="#000">2,5m</text></svg>`,
  "r-203": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="#000">4m</text></svg>`,
  "r-204": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="60" font-weight="bold" fill="#000">10m</text></svg>`,

  // === SECCIÓN 3.5: PROHIBICIÓN r-300 a r-311 ===
  "r-300": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="#000">50</text></svg>`,
  "r-301": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#000" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="#000">50</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="14"/></svg>`,
  "r-302": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M100 60 Q70 100 140" stroke="#000" stroke-width="14" fill="none" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-303": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M100 60 Q130 100 140" stroke="#000" stroke-width="14" fill="none" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-304": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M100 60 Q130 100 100 140 Q70 100 100 60" stroke="#000" stroke-width="14" fill="none" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-305": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M100 40 L100 130 M60 90 L100 50 L140 90" stroke="#000" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-306": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#000" stroke-width="12"/><path d="M100 40 L100 130 M60 90 L100 50 L140 90" stroke="#000" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="14"/></svg>`,
  "r-307": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><rect x="60" y="80" width="80" height="40" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-308": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#000" stroke-width="12"/><rect x="60" y="80" width="80" height="40" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="14"/></svg>`,
  "r-309": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><text x="100" y="105" text-anchor="middle" font-size="35" font-weight="bold" fill="#000">ZONA</text><text x="100" y="130" text-anchor="middle" font-size="35" font-weight="bold" fill="#000">TURÍSTICA</text><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-310": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#E74C3C" stroke-width="12"/><path d="M70 90 L130 90 M70 110 L130 110" stroke="#000" stroke-width="12" stroke-linecap="round"/><line x1="35" y1="35" x2="165" y2="165" stroke="#E74C3C" stroke-width="14"/></svg>`,
  "r-311": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="white" stroke="#0057B8" stroke-width="12"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="#000">30</text></svg>`,

  // === SECCIÓN 3.6: OBLIGACIÓN r-400 a r-422 ===
  "r-400": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 L100 150 M60 110 L100 70 L140 110" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-401": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 L100 150 M60 90 L100 130 L140 90" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-402": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M50 100 L150 100 M90 60 L130 100 L90 140" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-403": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M50 100 L150 100 M110 60 L70 100 L110 140" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-404": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q70 100 100 150 Q130 100 100 50" stroke="white" stroke-width="16" fill="none" stroke-linecap="round"/></svg>`,
  "r-405": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q130 100 100 150 Q70 100 100 50" stroke="white" stroke-width="16" fill="none" stroke-linecap="round"/></svg>`,
  "r-406": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q130 100 100 150 M60 90 L100 130 L140 90" stroke="white" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-407": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q70 100 100 150 M60 110 L100 70 L140 110" stroke="white" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-408": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q70 100 100 150 Q130 100 100 50 M60 90 L100 130 L140 90" stroke="white" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-409": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 50 Q130 100 100 150 Q70 100 100 50 M60 110 L100 70 L140 110" stroke="white" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-410": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M50 100 L150 100" stroke="white" stroke-width="18" stroke-linecap="round"/></svg>`,
  "r-411": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M50 100 L150 100 M90 60 L130 100 M90 140 L130 100" stroke="white" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-412": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M50 100 L150 100 M110 60 L70 100 M110 140 L70 100" stroke="white" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "r-413": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><circle cx="70" cy="100" r="18" fill="white"/><path d="M70 100 L70 130 M70 115 L60 130 M70 115 L80 130" stroke="#0057B8" stroke-width="8" stroke-linecap="round"/><circle cx="130" cy="100" r="18" fill="white"/><path d="M130 100 L130 140 M130 120 L120 140 M130 120 L140 140" stroke="#0057B8" stroke-width="8" stroke-linecap="round"/></svg>`,
  "r-414": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><circle cx="100" cy="100" r="30" fill="white"/></svg>`,
  "r-415": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><rect x="60" y="80" width="80" height="40" fill="white"/></svg>`,
  "r-416": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M70 80 L130 80 L130 120 L70 120 Z" fill="white"/></svg>`,
  "r-417": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><rect x="60" y="80" width="80" height="40" fill="white"/></svg>`,
  "r-418": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="white" stroke-width="18" stroke-linecap="round"/></svg>`,
  "r-419": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><circle cx="100" cy="100" r="35" fill="white"/><circle cx="100" cy="100" r="20" fill="#0057B8"/></svg>`,
  "r-420": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 60 Q70 100 100 140 Q130 100 100 60" stroke="white" stroke-width="16" fill="none" stroke-linecap="round"/></svg>`,
  "r-421": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 60 Q130 100 100 140 Q70 100 100 60" stroke="white" stroke-width="16" fill="none" stroke-linecap="round"/></svg>`,
  "r-422": `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="95" fill="#0057B8"/><path d="M100 60 L100 140 M60 100 L140 100 M80 80 L120 120 M120 80 L80 120" stroke="white" stroke-width="14" stroke-linecap="round"/></svg>`,

  // === SECCIÓN 3.8: INDICACIÓN s-50 a s-58 ===
  "s-50": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">MIRADOR</text></svg>`,
  "s-51": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">CARGA</text></svg>`,
  "s-52": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">DESCARGA</text></svg>`,
  "s-53": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-54": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">PESO</text></svg>`,
  "s-55": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="50" font-weight="bold" fill="white">TÚNEL</text></svg>`,
  "s-56": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">PUENTE</text></svg>`,
  "s-57": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">VIADUCTO</text></svg>`,
  "s-58": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">GLORIETA</text></svg>`,

    // === SECCIÓN 3.8: INDICACIÓN s-114 a s-126 ===
  "s-114": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="80" font-weight="bold" fill="white">P</text></svg>`,
  "s-115": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="100" text-anchor="middle" font-size="40" font-weight="bold" fill="white">HOSPITAL</text><text x="100" y="130" text-anchor="middle" font-size="40" font-weight="bold" fill="white">H</text></svg>`,
  "s-116": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 Q100 60 140 100 Q100 140 60 100 M70 100 Q100 70 130 100 Q100 130 70 100" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`,
  "s-117": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="60" font-weight="bold" fill="white">GLP</text></svg>`,
  "s-118": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="55" font-weight="bold" fill="white">GNC</text></svg>`,
  "s-119": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="55" font-weight="bold" fill="white">GNC</text></svg>`,
  "s-120": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="50" font-weight="bold" fill="white">H2</text></svg>`,
  "s-121": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 80 L140 80 L130 120 L70 120 Z" fill="white"/><circle cx="80" cy="130" r="10" fill="#0057B8"/><circle cx="120" cy="130" r="10" fill="#0057B8"/></svg>`,
  "s-122": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><circle cx="100" cy="100" r="25" fill="white"/><path d="M100 75 L100 125 M75 100 L125 100" stroke="#0057B8" stroke-width="10" stroke-linecap="round"/></svg>`,
  "s-123": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="70" font-weight="bold" fill="white">i</text></svg>`,
  "s-124": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M70 100 L130 100 M100 70 L100 130" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-125": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M80 90 L120 90 L120 110 L80 110 Z" fill="white"/><path d="M90 90 L90 70 M110 90 L110 70" stroke="white" stroke-width="8" stroke-linecap="round"/></svg>`,
  "s-126": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><circle cx="70" cy="100" r="18" fill="white"/><path d="M70 100 L70 130 M70 115 L60 130 M70 115 L80 130" stroke="#0057B8" stroke-width="8" stroke-linecap="round"/><circle cx="130" cy="100" r="18" fill="white"/><path d="M130 100 L130 140 M130 120 L120 140 M130 120 L140 140" stroke="#0057B8" stroke-width="8" stroke-linecap="round"/></svg>`,

  // === SECCIÓN 3.12: DIRECCIÓN s-221 a s-229 ===
  "s-221": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-222": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-223": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-224": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-225": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-226": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-227": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-228": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-229": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,

  // === SECCIÓN 3.13: IDENTIFICACIÓN CARRETERAS s-320 a s-352 ===
  "s-320": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">N-340</text></svg>`,
  "s-330": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">A-1</text></svg>`,
  "s-340": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">AP-7</text></svg>`,
  "s-350": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">E-15</text></svg>`,
  "s-351": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">E-90</text></svg>`,
  "s-352": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">E-80</text></svg>`,

  // === SECCIÓN 3.15: CONFIRMACIÓN s-360 a s-369 ===
  "s-360": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">50 km</text></svg>`,
  "s-361": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">MADRID</text></svg>`,
  "s-362": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">BARCELONA</text></svg>`,
  "s-363": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">VALENCIA</text></svg>`,
  "s-364": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">SEVILLA</text></svg>`,
  "s-365": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">ZARAGOZA</text></svg>`,
  "s-366": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">MÁLAGA</text></svg>`,
  "s-367": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">MURCIA</text></svg>`,
  "s-368": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">PALMA</text></svg>`,
  "s-369": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">LAS PALMAS</text></svg>`,

  // === SECCIÓN 3.11: PRESEÑALIZACIÓN s-370 a s-377 ===
  "s-370": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-371": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-372": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-373": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-374": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-375": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-376": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,
  "s-377": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="white" stroke-width="16" stroke-linecap="round"/></svg>`,

  // === SECCIÓN 3.16: USO ESPECÍFICO POBLADO s-440 a s-447 ===
  "s-440": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">RESIDENCIAL</text></svg>`,
  "s-441": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="white">FIN RESIDENCIAL</text></svg>`,
  "s-442": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">ZONA 30</text></svg>`,
  "s-443": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="white">FIN ZONA 30</text></svg>`,
  "s-444": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">ESCOLAR</text></svg>`,
  "s-445": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="white">FIN ESCOLAR</text></svg>`,
  "s-446": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">COMERCIAL</text></svg>`,
  "s-447": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="white">FIN COMERCIAL</text></svg>`,

  // === SECCIÓN 3.14: LOCALIZACIÓN s-500, s-510, s-520, s-521 ===
  "s-500": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">GIRONA</text></svg>`,
  "s-510": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">GIRONA</text></svg>`,
  "s-520": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">CASSÀ</text></svg>`,
  "s-521": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">CASSÀ</text></svg>`,

  // === SECCIÓN 3.18: OTRAS SEÑALES s-600 a s-601 ===
  "s-600": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="45" font-weight="bold" fill="white">AUTOVÍA</text></svg>`,
  "s-601": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="15" fill="#0057B8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="white">FIN AUTOVÍA</text></svg>`,

  // === SECCIÓN 3.17: PANELES COMPLEMENTARIOS s-800 a s-880 ===
  "s-800": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="50" font-weight="bold" fill="#000">150 m</text></svg>`,
  "s-810": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="50" font-weight="bold" fill="#000">2 km</text></svg>`,
  "s-820": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M120 80 L140 100 L120 120" stroke="#000" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "s-830": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M80 80 L60 100 L80 120" stroke="#000" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "s-840a": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M120 80 L140 100 L120 120" stroke="#000" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "s-840b": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M80 80 L60 100 L80 120" stroke="#000" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "s-850": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M100 60 L100 140" stroke="#000" stroke-width="12" stroke-linecap="round"/></svg>`,
  "s-860": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="#000">NIEVE</text></svg>`,
  "s-861": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="40" font-weight="bold" fill="#000">SOL</text></svg>`,
  "s-870": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">EXCEPTO</text></svg>`,
  "s-871": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">RESIDENTES</text></svg>`,
  "s-872": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">AUTOBUSES</text></svg>`,
  "s-873": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">TAXIS</text></svg>`,
  "s-874": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">BICLETAS</text></svg>`,
  "s-875": `<svg viewBox="0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">PEATONES</text></svg>`,
  "s-876": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">CARGA</text></svg>`,
  "s-877": `<svg viewBox="0 0 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">DESCARGA</text></svg>`,
  "s-878": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">8-20h</text></svg>`,
  "s-879": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">MAX 2h</text></svg>`,
  "s-880": `<svg viewBox="0 0 200 200"><rect x="10" y="10" width="180" height="180" rx="10" fill="white" stroke="#000" stroke-width="8"/><text x="100" y="115" text-anchor="middle" font-size="30" font-weight="bold" fill="#000">PMR</text></svg>`
};


const TIPS = [
  {emoji:'🚗', txt:'Regla de los 2 segundos: mantén distancia con el coche de delante'},
  {emoji:'👀', txt:'Mira 12 segundos hacia delante, no solo el coche de delante'},
  {emoji:'🌧️', txt:'Lluvia: aumenta distancia x2 y reduce velocidad'},
  {emoji:'🌙', txt:'De noche reduce velocidad un 10-15%'},
  {emoji:'🚙', txt:'Adelanta solo cuando veas 200m libres'},
  {emoji:'🛑', txt:'STOP significa parada total, no frenada'},
  {emoji:'⚠️', txt:'Cede el paso a los peatones en el paso de cebra'},
  {emoji:'💡', txt:'Usa los intermitentes 3 segundos antes de girar'},
  {emoji:'🛣️', txt:'Velocidad máxima en autovía: 120 km/h'},
  {emoji:'🏙️', txt:'Velocidad máxima en ciudad: 50 km/h'},
  {emoji:'🚸', txt:'Cerca de colegios baja a 30 km/h'},
  {emoji:'🍺', txt:'Alcohol y conducción no son compatibles. 0,0 es seguro'},
  {emoji:'😴', txt:'Si tienes sueño, para y descansa. 15 min lo cambian todo'},
  {emoji:'📱', txt:'No uses el móvil mientras conduces'},
  {emoji:'🪞', txt:'Regula los espejos antes de salir'},
  {emoji:'🎒', txt:'Ponte el cinturón aunque sean 2 min'},
  {emoji:'👶', txt:'Niños <135cm deben ir con SRI adecuado'},
  {emoji:'🐶', txt:'Animales bien sujetos en el coche'},
  {emoji:'🧳', txt:'Carga bien repartida y sujeta'},
  {emoji:'🚲', txt:'Deja 1,5m al adelantar ciclistas'},
  {emoji:'🔄', txt:'En rotonda, quien está dentro tiene preferencia'},
  {emoji:'🚦', txt:'Ámbar intermitente = precaución máxima'},
  {emoji:'🚑', txt:'Cede paso a vehículos de emergencia con luces'},
  {emoji:'🌫️', txt:'Niebla: antiniebla + cortas, nunca largas'},
  {emoji:'❄️', txt:'Hielo: marchas largas, frena suave, sin volantazos'},
  {emoji:'🛞', txt:'Neumático liso = multa + riesgo aquaplaning'},
  {emoji:'💨', txt:'Distancia lateral al adelantar bici: 1.5m mínimo'},
  {emoji:'🚧', txt:'Línea continua = no adelantar, nunca'},
  {emoji:'🅿️', txt:'Aparcar en cuesta: ruedas giradas a la acera'},
  {emoji:'🔦', txt:'En túnel: enciende luces de cruce'},
  {emoji:'⚡', txt:'Coche eléctrico: silencioso, vigila peatones'},
  {emoji:'🔧', txt:'Testigo aceite rojo = para el motor YA'},
  {emoji:'🌡️', txt:'Motor caliente: no abras el tapón del refrigerante'},
  {emoji:'⛽', txt:'Reserva = 50km aprox, no juegues con eso'},
  {emoji:'🧠', txt:'Cada fallo te enseña. Vuelve a repasarlo'},
  {emoji:'🎯', txt:'Lee TODA la pregunta antes de responder'},
  {emoji:'⏱️', txt:'No tengas prisa, el examen no es una carrera'},
  {emoji:'📖', txt:'Repite los errores hasta que no los vuelvas a hacer'},
  {emoji:'🚙', txt:'En cuesta estrecha, sube tiene preferencia'},
  {emoji:'🌉', txt:'En puentes estrechos, cede si estás más cerca'},
  {emoji:'🚂', txt:'Paso a nivel: barrera bajada = parada obligatoria'},
  {emoji:'🚛', txt:'Camión girando: no te metas por el lado'},
  {emoji:'🚌', txt:'Bus saliendo de parada: facilítale la salida'},
  {emoji:'🏍️', txt:'Moto entre carriles: mantén distancia'},
  {emoji:'🦓', txt:'Paso de peatones elevado: reduce aún más'},
  {emoji:'🌳', txt:'Hojas en el suelo = asfalto resbaladizo'},
  {emoji:'💦', txt:'Charco grande: reduce y sujeta el volante'},
  {emoji:'💨', txt:'Viento lateral: sujeta fuerte el volante'},
  {emoji:'🚨', txt:'Conductor novel: L detrás 1 año'},
  {emoji:'👓', txt:'Si usas gafas, llévalas siempre'},
  {emoji:'🧤', txt:'Guantes en moto = menos lesiones en manos'},
  {emoji:'🪖', txt:'Casco bien abrochado salva vidas'},
  {emoji:'🔊', txt:'Música alta = menos atención'},
  {emoji:'🍕', txt:'Come antes de conducir largo, no durante'},
  {emoji:'💊', txt:'Medicamentos con somnolencia = no conducir'},
  {emoji:'🅰️', txt:'Señal A detrás si no llegas a 60km/h'},
  {emoji:'🚜', txt:'Tractor: paciencia, adelantará cuando pueda'},
  {emoji:'🐴', txt:'Animal en vía: para, no toques el claxon'},
  {emoji:'🏁', txt:'Final autovía: cede al incorporarte'},
  {emoji:'🅾️', txt:'Zona ORA: mira panel antes de aparcar'},
  {emoji:'🅿️', txt:'Park & Ride: aparca fuera, entra en bus'},
  {emoji:'🅱️', txt:'Carril bus: prohibido excepto taxis/bicis'},
  {emoji:'🚲', txt:'Carril bici: nunca aparcar ni circular'},
  {emoji:'🛑', txt:'Ceda el paso = reduce y mira a ambos lados'},
  {emoji:'🔀', txt:'Cambio carril: espejo + ángulo muerto + intermitente'},
  {emoji:'🅾️', txt:'Obstrucción: avisa con triángulos si paras'},
  {emoji:'🚗', txt:'Coche parado arcén: pasa lento y con precaución'},
  {emoji:'🌉', txt:'Túnel largo: mantén distancia y luces encendidas'},
  {emoji:'🚧', txt:'Obras: respeta señales provisionales'},
  {emoji:'🔄', txt:'Cambio sentido: solo donde está permitido'},
  {emoji:'🅿️', txt:'Marcha atrás: solo imprescindible y corto'},
  {emoji:'🚙', txt:'Adelantamiento: termínalo rápido y seguro'},
  {emoji:'⛔', txt:'No entrar: círculo rojo = prohibido pasar'},
  {emoji:'🚦', txt:'Semáforo con flecha: sigue la flecha'},
  {emoji:'🛑', txt:'STOP sin línea: para antes de la intersección'},
  {emoji:'🚸', txt:'Colegio: 30km/h cuando hay niños'},
  {emoji:'🌙', txt:'Luces de posición no sirven de noche'},
  {emoji:'💡', txt:'Luces largas: apaga a 150m de otro'},
  {emoji:'🚨', txt:'Avería: chaleco + triángulos a 50m'},
  {emoji:'🧯', txt:'Extintor: revisa fecha caducidad'},
  {emoji:'🛞', txt:'Repuesto: comprueba presión cada mes'},
  {emoji:'🔋', txt:'Batería: limpia bornes si cuesta arrancar'},
  {emoji:'💧', txt:'Líquido limpia: nunca solo agua'},
  {emoji:'🌡️', txt:'Temperatura alta: para y espera a enfriar'},
  {emoji:'🛢️', txt:'Aceite: nivel entre mín y máx'},
  {emoji:'🚗', txt:'Retrovisores: ver justo un poco de carrocería'},
  {emoji:'🪑', txt:'Asiento: rodillas flexionadas, brazos relajados'},
  {emoji:'🎒', txt:'Objetos sueltos = proyectiles en choque'},
  {emoji:'👶', txt:'SRI: grupo 0 hasta 13kg, de espaldas a la marcha'},
  {emoji:'🐾', txt:'Perro: arnés o transportín, nunca suelto'},
  {emoji:'🧳', txt:'Maletero: peso bajo y bien sujeto'},
  {emoji:'🚗', txt:'Distancia con camión: más del doble'},
  {emoji:'🌧️', txt:'Aquaplaning: no frenes, reduce gas'},
  {emoji:'❄️', txt:'Nieve: cadenas o neumáticos M+S'},
  {emoji:'💨', txt:'Ráfaga viento: sujeta volante y reduce'},
  {emoji:'🚙', txt:'Frena con motor en bajada larga'},
  {emoji:'🅾️', txt:'Zona 30: peatones pueden ir por calzada'},
  {emoji:'🚦', txt:'Flecha verde: tienes preferencia'},
  {emoji:'🚸', txt:'Policía regulando: obedece gestos'},
  {emoji:'🚗', txt:'Repasa errores cada día 10 min'},
  {emoji:'🏆', txt:'¡Tú puedes sacarte el carnet!'}
];


const COCHES = [
  {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:200,cv:90,color:''},
  {id:'c2',nombre:'VW Golf GTI',emoji:'🚘',precio:800,cv:220,color:''},
  {id:'c3',nombre:'BMW M3',emoji:'🚙',precio:1500,cv:420,color:''},
  {id:'c4',nombre:'Tesla Model S',emoji:'⚡',precio:2000,cv:670,color:'hue-rotate(210deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00d4ff)'},
  {id:'c5',nombre:'Porsche 911',emoji:'🏎️',precio:2500,cv:450,color:'hue-rotate(130deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ff88)'},
  {id:'c6',nombre:'Bugatti Chiron',emoji:'🏎️',precio:5000,cv:1500,color:'hue-rotate(200deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00c8ff)'},
  {id:'c7',nombre:'Yamaha R1',emoji:'🏍️',precio:2200,cv:200,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 8px #ffdd00)'},
  {id:'c8',nombre:'Ducati Panigale',emoji:'🏍️',precio:2800,cv:220,color:'hue-rotate(25deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff8800)'},
  {id:'c9',nombre:'Audi RS6',emoji:'🏎️',precio:3200,cv:600,color:'hue-rotate(180deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ffff)'},
  {id:'c10',nombre:'Nissan GTR',emoji:'🏎️',precio:3500,cv:565,color:'hue-rotate(90deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #88ff00)'},
  {id:'c11',nombre:'McLaren 720S',emoji:'🏎️',precio:4200,cv:720,color:'hue-rotate(15deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff6600)'},
  {id:'c12',nombre:'Ferrari SF90 Stradale',emoji:'🏎️',precio:8500,cv:1000,color:'hue-rotate(0deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff0000)'},
  {id:'c13',nombre:'Lamborghini Aventador SVJ',emoji:'🏎️',precio:8000,cv:770,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ffdd00)'},
  {id:'c14',nombre:'Koenigsegg Jesko Absolut',emoji:'🏎️',precio:14000,cv:1600,color:'hue-rotate(270deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #aa00ff)'},
  {id:'c15',nombre:'Porsche 918 Spyder',emoji:'🏎️',precio:9500,cv:887,color:'hue-rotate(130deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00ff88)'},
  {id:'c16',nombre:'McLaren P1 GTR',emoji:'🏎️',precio:9000,cv:916,color:'hue-rotate(35deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff8800)'},
  {id:'c17',nombre:'Bugatti Bolide',emoji:'🏎️',precio:16000,cv:1825,color:'hue-rotate(200deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00d4ff)'}
];


const ACCESORIOS = [
  {id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nombre:'Nitro',emoji:'🔥',precio:600,hp:80},
  {id:'a3',nombre:'Motor Electrico',emoji:'⚡',precio:800,hp:100},
  {id:'a4',nombre:'Kit Mecanico',emoji:'🛠️',precio:400,hp:40},
  {id:'a5',nombre:'Herramientas Racing',emoji:'🔧',precio:250,hp:20},
  {id:'a6',nombre:'Cadena Reforzada',emoji:'⛓️',precio:350,hp:30},
  {id:'a7',nombre:'Engranajes Sport',emoji:'⚙️',precio:300,hp:25},
  {id:'a8',nombre:'Tornillos Racing',emoji:'🔩',precio:200,hp:15},
  {id:'a9',nombre:'Neumaticos Slick',emoji:'🛞',precio:400,hp:35},
  {id:'a10',nombre:'Neumaticos Lluvia',emoji:'🛞',precio:350,hp:30},
  {id:'a11',nombre:'Cadenas Nieve',emoji:'❄️',precio:300,hp:25},
  {id:'a12',nombre:'Llantas Racing',emoji:'🔲',precio:500,hp:40},
  {id:'a13',nombre:'Eje Equilibrado',emoji:'🎯',precio:250,hp:20},
  {id:'a14',nombre:'Aleron GT',emoji:'🔰',precio:400,hp:40},
  {id:'a15',nombre:'Aleron F1',emoji:'🏁',precio:700,hp:70},
  {id:'a16',nombre:'Cristales Tintados',emoji:'🪟',precio:200,hp:10},
  {id:'a17',nombre:'Luces LED',emoji:'💡',precio:250,hp:15},
  {id:'a18',nombre:'Faros Laser',emoji:'🔦',precio:600,hp:50},
  {id:'a19',nombre:'Retrovisor Racing',emoji:'🪞',precio:200,hp:10},
  {id:'a20',nombre:'Defensa Reforzada',emoji:'🛡️',precio:450,hp:35},
  {id:'a21',nombre:'Asiento Bucket',emoji:'🪑',precio:400,hp:25},
  {id:'a22',nombre:'Volante Racing',emoji:'🎛️',precio:350,hp:20},
  {id:'a23',nombre:'Cuadro Digital',emoji:'📊',precio:500,hp:30},
  {id:'a24',nombre:'Guantes Piloto',emoji:'🧤',precio:150,hp:10},
  {id:'a25',nombre:'Casco Racing',emoji:'🪖',precio:300,hp:15},
  {id:'a26',nombre:'Intercom',emoji:'🎧',precio:250,hp:10},
  {id:'a27',nombre:'Vinilo Llamas',emoji:'🎨',precio:300,hp:10},
  {id:'a28',nombre:'Vinilo Cromo',emoji:'🌈',precio:500,hp:15},
  {id:'a29',nombre:'Pintura Metalizada',emoji:'✨',precio:600,hp:20},
  {id:'a30',nombre:'Cristales Swarovski',emoji:'💎',precio:1000,hp:5},
  {id:'a31',nombre:'Corona Royal',emoji:'👑',precio:800,hp:10},
  {id:'a32',nombre:'Unicornio',emoji:'🦄',precio:1200,hp:5},
  {id:'a33',nombre:'Cohete',emoji:'🚀',precio:600,hp:15},
  {id:'a34',nombre:'Diamante',emoji:'💎',precio:1200,hp:5},
  {id:'a35',nombre:'Rayo',emoji:'⚡',precio:700,hp:20},
  {id:'a36',nombre:'Fuego',emoji:'🔥',precio:500,hp:15}
];



const EMOJI_TIENDA = [
  {id:'e1',nombre:'Corona',emoji:'👑',precio:500},
  {id:'e2',nombre:'Diamante',emoji:'💎',precio:800},
  {id:'e3',nombre:'Fuego',emoji:'🔥',precio:300},
  {id:'e4',nombre:'Rayo',emoji:'⚡',precio:400},
  {id:'e5',nombre:'Unicornio',emoji:'🦄',precio:1000}
];


// ========= DATOS - DEBEN IR LO PRIMERO =========
const DATOS = {
  senales: [ /* tus 630 preguntas aquí */ ],
  normas: [ /*... */ ],
  mecanica: [ /*... */ ],
  auxilios: [ /*... */ ],
  medioambiente: [ /*... */ ],
  situaciones: [ /*... */ ]
};

const SENALES_SVG = { /* tus SVGs */ };
const TIPS = [ /* tus tips */ ];
const COCHES = [ /* tus coches */ ];
const ACCESORIOS = [ /* tus accesorios */ ];
const EMOJI_TIENDA = [ /* tus emojis */ ];
const TEMARIO = [ /* tus temarios */ ];

// ========= BLOQUE LÓGICA - V10.5.3 ES ARREGLADA =========
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// ===== INTRO INYECTADA COMO CAT =====
function mostrarIntro(){
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="intro-screen" style="position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#1a1a2e,#16213e);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:20px">
      <div style="font-size:64px;margin-bottom:20px">🚗</div>
      <h1 style="font-size:32px;margin:0 0 10px">GasDrive DGT ES 2026</h1>
      <p style="font-size:18px;opacity:0.8;margin:0 0 10px">Aprende el carnet en 15 min al día</p>
      <p style="font-size:16px;opacity:0.9;margin:0 0 30px">📚 Temarios oficiales DGT para estudiar cuando quieras</p>
      <div style="text-align:left;font-size:16px;margin-bottom:40px;line-height:2">
        <div>💰 Gana coins respondiendo bien</div>
        <div>🏎️ Compra supercoches en el Garaje</div>
        <div>📚 630 preguntas DGT reales</div>
        <div>📖 Temarios completos para repasar</div>
      </div>
      <button onclick="cerrarIntro()" style="background:linear-gradient(135deg,#ff8c00,#ff2d55);border:none;color:#fff;padding:16px 48px;border-radius:12px;font-size:18px;font-weight:bold;cursor:pointer">EMPEZAR</button>
    </div>
  `);
}

function cerrarIntro(){
  document.getElementById('intro-screen').remove();
  document.getElementById('app').style.display = 'block';
}

// ===== ESTADO GLOBAL =====
let tipsData = [];
let currentTip = 0;
let sitCategoriaActiva = 'clima';

let estado = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    senales: {idx:0,aciertos:0,racha:0,puntuacion:0,current:null,preguntasBarajadas:null,totalPreguntas:0},
    normas: {idx:0,aciertos:0,racha:0,puntuacion:0,current:null,preguntasBarajadas:null,totalPreguntas:0},
    mecanica: {idx:0,aciertos:0,racha:0,puntuacion:0,current:null,preguntasBarajadas:null,totalPreguntas:0},
    auxilios: {idx:0,aciertos:0,racha:0,puntuacion:0,current:null,preguntasBarajadas:null,totalPreguntas:0},
    medioambiente: {idx:0,aciertos:0,racha:0,puntuacion:0,current:null,preguntasBarajadas:null,totalPreguntas:0}
  },
  examen: {
    activa: false,
    preguntas: [],
    index: 0,
    aciertos: 0,
    fallos: 0,
    timer: null,
    tiempo: 1800
  },
  sit: {
    clima: {idx:0,aciertos:0,puntuacion:0,current:null,casosBarajados:null,totalCasos:0},
    urbano: {idx:0,aciertos:0,puntuacion:0,current:null,casosBarajados:null,totalCasos:0},
    carretera: {idx:0,aciertos:0,puntuacion:0,current:null,casosBarajados:null,totalCasos:0},
    emergencia: {idx:0,aciertos:0,puntuacion:0,current:null,casosBarajados:null,totalCasos:0}
  }
};

// ===== INIT ROBUSTO COMO CAT =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V10.5.2 ES - Datos integrados, PDFs en raíz");
  mostrarIntro();
  actualizarCoins();
  cargarPregunta('senales');
  cargarPregunta('normas');
  cargarPregunta('mecanica');
  cargarPregunta('auxilios');
  cargarPregunta('medioambiente');
  cargarCasos();
  actualizarMensajeMotivacional();
}

// ===== HELPERS =====
function getPreguntas(cat) {
  return DATOS[cat] || [];
}

function getSituaciones(cat) {
  return DATOS.situaciones? DATOS.situaciones.filter(s => s.categoria === cat) : [];
}

function getSVG(id) {
  if (typeof SENALES_SVG!== 'undefined' && SENALES_SVG[id]) {
    return SENALES_SVG[id];
  }
  return '';
}

function barajarArray(arr) {
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function guardar() {
  localStorage.setItem('gd_coins', estado.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estado.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estado.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estado.emojis));
}

function actualizarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estado.coins}`;
}

function mostrarEmoji(acierto, element) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  element.style.position = 'relative';
  element.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30, 20, 30] : 100);
}

// ===== TABS =====
function cambiarTab(tab, e) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  e.currentTarget.classList.add('active');
  if(tab === 'garage') cargarGaraje();
  if(tab === 'tienda') cargarTienda();
  if(tab === 'tips') cargarTips();
  if(tab === 'temario') cargarTemario();
  if(tab === 'test') cargarPregunta('senales');
  if(tab === 'situaciones') cargarCasos();
}

function cambiarSubTab(e, tab, sub) {
  const tabId = tab === 'sit'? 'situaciones' : tab;
  const contenedor = document.getElementById('tab-' + tabId);
  if(!contenedor) return;
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : 'sit'}-${sub}`).classList.add('active');
  if(tab === 'test') cargarPregunta(sub);
  if(tab === 'sit') cargarSituacion(sub);
}

function cambiarCategoriaSit(cat) {
  sitCategoriaActiva = cat;
  document.querySelectorAll('#tab-situaciones.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
  if(event && event.target) event.target.classList.add('active');
  const titulos = {
    clima: '🌧️ CASOS REALES - CLIMA ADVERSO',
    urbano: '🏙️ CASOS REALES - URBANO',
    carretera: '🛣️ CASOS REALES - CARRETERA',
    emergencia: '🚨 CASOS REALES - EMERGENCIA'
  };
  document.getElementById('sit-titulo').textContent = titulos[cat];
  estado.sit[cat].idx = 0;
  cargarSituacion(cat);
}

// ===== TEST =====
function cargarPregunta(cat) {
  const s = estado.test[cat];

  if (!s.preguntasBarajadas) {
    const todas = getPreguntas(cat);
    if (!todas || todas.length === 0) {
      const preguntaEl = document.getElementById(`test-${cat}-pregunta`);
      if(preguntaEl) preguntaEl.textContent = `Error: No hay preguntas de ${cat}`;
      return;
    }
    s.preguntasBarajadas = barajarArray([...todas]);
    s.totalPreguntas = s.preguntasBarajadas.length;
  }

  const pOriginal = s.preguntasBarajadas[s.idx % s.totalPreguntas];
  if (!pOriginal) return;

  const opcionesOriginales = pOriginal.a || pOriginal.opciones || [];
  const opcionesBarajadas = barajarArray([...opcionesOriginales]);
  const indiceOriginal = pOriginal.ok!== undefined? pOriginal.ok : pOriginal.respuesta_correcta;
  const textoCorrecto = opcionesOriginales[indiceOriginal];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);

  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  s.current = p;

  const preguntaEl = document.getElementById(`test-${cat}-pregunta`);
  if(!preguntaEl) return;

  preguntaEl.textContent = p.q || p.pregunta || '';
  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % s.totalPreguntas) / s.totalPreguntas) * 100}%`;

  const imgCont = document.getElementById(`test-${cat}-imagen`);
  if(imgCont) {
    if(cat === 'senales' && (p.codigo || p.codigo_dgt)) {
      const svg = getSVG(p.codigo || p.codigo_dgt);
      imgCont.innerHTML = svg || '';
      imgCont.classList.remove('placeholder');
      imgCont.style.display = svg? 'block' : 'none';
    } else {
      imgCont.innerHTML = '';
      imgCont.classList.add('placeholder');
      imgCont.style.display = 'flex';
    }
  }

  const cont = document.getElementById(`test-${cat}-opciones`);
  if(!cont) return;

  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { responderTest(cat, i, this); };
    cont.appendChild(div);
  });

  const motEl = document.getElementById('motivacion');
  if(motEl && motEl.textContent === 'Cargando datos...') {
    actualizarMensajeMotivacional();
  }
}

function responderTest(cat, idx, el) {
  const s = estado.test[cat];
  const p = s.current;
  const cont = document.getElementById(`test-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));

  const correcto = idx === p.ok;
  if(correcto) {
    el.classList.add('correcta');
    s.aciertos++;
    s.racha++;
    s.puntuacion += 10 + (s.racha * 2);
    estado.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ ¡CORRECTO! +${10+(s.racha*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok]?.classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = `❌ FALLO. Correcta: ${p.a[p.ok]}`;
    mostrarEmoji(false, el);
    s.racha = 0;
  }
  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function siguienteTest(e, cat) {
  estado.test[cat].idx++;
  cargarPregunta(cat);
}

// ===== CASOS =====
function cargarSituacion(cat) {
  if(!cat) cat = sitCategoriaActiva;
  const s = estado.sit[cat];

  if (!s.casosBarajados) {
    const todos = getSituaciones(cat);
    if (!todos || todos.length === 0) {
      const preguntaEl = document.getElementById(`sit-${cat}-pregunta`);
      if(preguntaEl) preguntaEl.textContent = `Error: No hay casos de ${cat}`;
      return;
    }
    s.casosBarajados = barajarArray([...todos]);
    s.totalCasos = s.casosBarajados.length;
  }

  const pOriginal = s.casosBarajados[s.idx % s.totalCasos];
  if (!pOriginal) return;

  const opcionesOriginales = pOriginal.a || [];
  const opcionesBarajadas = barajarArray([...opcionesOriginales]);
  const textoCorrecto = opcionesOriginales[pOriginal.ok];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);

  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  s.current = p;

  const preguntaEl = document.getElementById(`sit-${cat}-pregunta`);
  if(!preguntaEl) return;

  preguntaEl.textContent = p.q || '';
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % s.totalCasos) / s.totalCasos) * 100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  if(!cont) return;

  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { responderSituacion(cat, i, this); };
    cont.appendChild(div);
  });
}

function responderSituacion(cat, idx, el) {
  const s = estado.sit[cat];
  const p = s.current;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));

  const correcto = idx === p.ok;
  if(correcto) {
    el.classList.add('correcta');
    s.aciertos++;
    s.puntuacion += 15;
    estado.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ ¡CORRECTO! +15 pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok]?.classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = `❌ FALLO. Correcta: ${p.a[p.ok]}`;
    mostrarEmoji(false, el);
  }
  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function siguienteSituacion(e, cat) {
  estado.sit[cat].idx++;
  cargarSituacion(cat);
}

// ===== EXAMEN OFICIAL =====
function iniciarExamen(e) {
  const todas = [
 ...getPreguntas('senales'),
 ...getPreguntas('normas'),
 ...getPreguntas('mecanica'),
 ...getPreguntas('auxilios'),
 ...getPreguntas('medioambiente')
  ];

  if(todas.length < 30) {
    mostrarModal('❌ Faltan preguntas. Necesitas 30 mínimo en los bancos.');
    return;
  }

  estado.examen.preguntas = barajarArray(todas).slice(0, 30);
  estado.examen.index = 0;
  estado.examen.aciertos = 0;
  estado.examen.fallos = 0;
  estado.examen.tiempo = 1800;

  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  document.getElementById('examen-resultado').style.display = 'none';

  iniciarTimerExamen();
  cargarPreguntaExamen();
}

function iniciarTimerExamen() {
  clearInterval(estado.examen.timer);
  estado.examen.timer = setInterval(() => {
    estado.examen.tiempo--;
    const min = Math.floor(estado.examen.tiempo / 60);
    const seg = estado.examen.tiempo % 60;
    document.getElementById('examen-timer').textContent =
      `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estado.examen.tiempo <= 0) finalizarExamen();
  }, 1000);
}

function cargarPreguntaExamen() {
  if(estado.examen.index >= 30) return finalizarExamen();

  const pOriginal = estado.examen.preguntas[estado.examen.index];
  const opcionesBarajadas = barajarArray(pOriginal.a || pOriginal.opciones || []);
  const indiceOriginal = pOriginal.ok!== undefined? pOriginal.ok : pOriginal.respuesta_correcta;
  const textoCorrecto = (pOriginal.a || pOriginal.opciones)[indiceOriginal];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);
  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  estado.examen.preguntas[estado.examen.index] = p;

  document.getElementById('examen-num').textContent = estado.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = estado.examen.aciertos;
  document.getElementById('examen-progress').style.width = `${(estado.examen.index/30)*100}%`;

  const cont = document.getElementById('examen-pregunta');
  const opCont = document.getElementById('examen-opciones');
  const imgCont = document.getElementById('examen-imagen');

  if(!cont ||!opCont) return;

  cont.textContent = p.q || p.pregunta;
  opCont.innerHTML = '';

  if((p.codigo || p.codigo_dgt) && imgCont) {
    imgCont.innerHTML = getSVG(p.codigo || p.codigo_dgt);
    imgCont.classList.remove('placeholder');
    imgCont.style.display = 'block';
  } else if(imgCont) {
    imgCont.innerHTML = '';
    imgCont.classList.add('placeholder');
    imgCont.style.display = 'flex';
  }

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = () => responderExamen(i);
    opCont.appendChild(div);
  });

  document.getElementById('btn-sig-examen').disabled = true;
}

function responderExamen(idx) {
  const p = estado.examen.preguntas[estado.examen.index];
  const ops = document.querySelectorAll('#examen-opciones.opcio');
  if(ops[0].classList.contains('bloquejada')) return;

  ops.forEach(o => o.classList.add('bloquejada'));

  if(idx === p.ok) {
    ops[idx].classList.add('correcta');
    estado.examen.aciertos++;
    estado.coins += 20;
    mostrarEmoji(true, ops[idx]);
  } else {
    ops[idx].classList.add('incorrecta');
    ops[p.ok].classList.add('correcta');
    estado.examen.fallos++;
    mostrarEmoji(false, ops[idx]);
  }

  document.getElementById('btn-sig-examen').disabled = false;
  document.getElementById('examen-aciertos').textContent = estado.examen.aciertos;
  actualizarCoins();
  guardar();
}

function siguientePreguntaExamen(e) {
  estado.examen.index++;
  if(estado.examen.index >= 30) {
    finalizarExamen();
  } else {
    cargarPreguntaExamen();
  }
}

function finalizarExamen() {
  clearInterval(estado.examen.timer);
  const nota = estado.examen.aciertos;
  const aprobado = nota >= 27;
  const res = document.getElementById('examen-resultado');
  res.style.display = 'block';

  if(aprobado) {
    res.innerHTML = `
      <h2 style="color:#2ecc71">✅ ¡APROBADO!</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Aciertos: ${nota} | Fallos: ${estado.examen.fallos}</p>
      <p>Has ganado +${nota*20} coins 💰</p>
      <button class="btn" onclick="reiniciarExamen()">Hacer otro examen</button>
    `;
    estado.coins += nota * 20;
  } else {
    res.innerHTML = `
      <h2 style="color:#e74c3c">❌ SUSPENSO</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Aciertos: ${nota} | Fallos: ${estado.examen.fallos}</p>
      <p>Necesitas 27 aciertos mínimo</p>
      <button class="btn" onclick="reiniciarExamen()">Volver a probar</button>
    `;
  }

  document.getElementById('btn-sig-examen').style.display = 'none';
  actualizarCoins();
  guardar();
}

function reiniciarExamen() {
  document.getElementById('examen-resultado').style.display = 'none';
  document.getElementById('btn-iniciar-examen').style.display = 'block';
  document.getElementById('btn-sig-examen').style.display = 'none';
  document.getElementById('examen-pregunta').textContent = "Pulsa Iniciar Examen";
  document.getElementById('examen-opciones').innerHTML = '';
  document.getElementById('examen-num').textContent = '0';
  document.getElementById('examen-aciertos').textContent = '0';
  document.getElementById('examen-progress').style.width = '0%';
  document.getElementById('examen-timer').textContent = '30:00';
  const imgExamen = document.getElementById('examen-imagen');
  if(imgExamen) imgExamen.innerHTML = '';
}

// ===== CASOS - CARGAR LISTA =====
function cargarCasos() {
  const categorias = ['clima', 'urbano', 'carretera', 'emergencia'];
  const listaCasos = document.getElementById('lista-casos');
  if(!listaCasos) return;

  listaCasos.innerHTML = '';

  for(const cat of categorias) {
    const casos = getSituaciones(cat);
    const div = document.createElement('div');
    div.className = 'tema-item';
    div.onclick = () => {
      sitCategoriaActiva = cat;
      estado.sit[cat].idx = 0;
      cargarSituacion(cat);
    };
    const emoji = cat === 'clima'? '🌧️' : cat === 'urbano'? '🏙️' : cat === 'carretera'? '🛣️' : '🚨';
    div.innerHTML = `${emoji} ${cat.toUpperCase()} - ${casos.length} casos`;
    listaCasos.appendChild(div);
  }
}

// ===== GARAJE + TIENDA + TIPS + TEMARIO =====
function cargarGaraje() {
  const cont = document.getElementById('garage-coches');
  if(!cont) return;
  cont.innerHTML = '';

  let hpTotal = 90;
  estado.accesorios.forEach(id => {
    const acc = ACCESORIOS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });

  document.getElementById('garage-nivel').textContent = Math.floor(estado.coins / 500) + 1;
  document.getElementById('garage-xp').textContent = estado.coins;
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;

  COCHES.forEach(coche => {
    const desbloqueado = estado.coches.includes(coche.id);
    const div = document.createElement('div');
    div.className = 'card-mini' + (desbloqueado? '' : ' locked');
    div.innerHTML = `
      <div style="font-size:40px">${coche.emoji}</div>
      <div>${coche.nombre}</div>
      <div style="color:#667eea">${coche.cv} CV</div>
      ${!desbloqueado? `<button class="btn-buy" onclick="comprarCoche('${coche.id}')">Comprar ${coche.precio}💰</button>` : '<div style="color:#2ecc71">✓ Propietario</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarCoche(id) {
  const coche = COCHES.find(c => c.id === id);
  if(!coche || estado.coins < coche.precio) {
    mostrarModal('❌ No tienes suficientes coins');
    return;
  }
  estado.coins -= coche.precio;
  estado.coches.push(id);
  guardar();
  actualizarCoins();
  cargarGaraje();
  mostrarModal(`🚗 ¡Has comprado ${coche.nombre}!`);
}

function cargarTienda() {
  const cont = document.getElementById('tienda-items');
  if(!cont) return;
  cont.innerHTML = '';

  ACCESORIOS.forEach(acc => {
    const comprado = estado.accesorios.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'tema-item' + (comprado? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${acc.emoji}</div>
      <div>${acc.nombre}</div>
      <div style="color:#667eea">+${acc.hp} CV</div>
      ${!comprado? `<button class="btn-buy" onclick="comprarAccesorios('${acc.id}')">Comprar ${acc.precio}💰</button>` : '<div style="color:#2ecc71">✓ Comprado</div>'}
    `;
    cont.appendChild(div);
  });

  EMOJI_TIENDA.forEach(emoji => {
    const comprado = estado.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'tema-item' + (comprado? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${emoji.emoji}</div>
      <div>${emoji.nombre}</div>
      <div style="color:#667eea">Cosmético</div>
      ${!comprado? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.precio}💰</button>` : '<div style="color:#2ecc71">✓ Comprado</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarAccesorios(id) {
  const acc = ACCESORIOS.find(a => a.id === id);
  if(!acc || estado.coins < acc.precio) {
    mostrarModal('❌ No tienes suficientes coins');
    return;
  }
  estado.coins -= acc.precio;
  estado.accesorios.push(id);
  guardar();
  actualizarCoins();
  cargarTienda();

  const totalAcc = estado.accesorios.length;
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#ff8c00,#ff2d55);color:#fff;padding:12px 24px;border-radius:12px;font-weight:bold;z-index:999;animation:slideUp 0.3s';
  msg.innerHTML = `🏎️ ¡Ya vas creando tu supercoche! ${totalAcc}/${ACCESORIOS.length} accesorios`;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

function comprarEmoji(id) {
  const emoji = EMOJI_TIENDA.find(e => e.id === id);
  if(!emoji || estado.coins < emoji.precio) {
    mostrarModal('❌ No tienes suficientes coins');
    return;
  }
  estado.coins -= emoji.precio;
  estado.emojis.push(id);
  guardar();
  actualizarCoins();
  cargarTienda();
}

function cargarTips() {
  tipsData = TIPS;
  currentTip = 0;
  mostrarTip();
}

function mostrarTip() {
  if (tipsData.length === 0) return;
  const tip = tipsData[currentTip];
  document.getElementById('tip-content').innerHTML = `
    <div class="tip-emoji">${tip.emoji}</div>
    <div class="tip-text">${tip.txt}</div>
  `;
  document.getElementById('tip-counter').textContent = `${currentTip + 1} / ${tipsData.length}`;
}

function nextTip(e) {
  currentTip = (currentTip + 1) % tipsData.length;
  mostrarTip();
}

function prevTip(e) {
  currentTip = (currentTip - 1 + tipsData.length) % tipsData.length;
  mostrarTip();
}

// ===== TEMARIO - PDFs EN RAÍZ CON DESCARGA BAJO DEMANDA =====
function cargarTemario() {
  const container = document.getElementById('temario-lista');
  if(!container) return;
  container.innerHTML = '';

  TEMARIO.forEach(item => {
    const div = document.createElement('div');
    div.className = 'tema-item';
    div.onclick = () => abrirPDF(item.pdf, item.titulo);
    div.innerHTML = `
      <div style="font-size:40px">${item.icono}</div>
      <div>${item.titulo}</div>
      <div style="font-size:11px;color:#999">Toca para abrir 📄</div>
    `;
    container.appendChild(div);
  });
}

async function abrirPDF(ruta, titulo) {
  const cache = await caches.open('gasdrive-pdfs-v1');
  let response = await cache.match(ruta);

  if(!response) {
    mostrarModal('📥 Descargando temario... Puede tardar 15s la primera vez.');
    try {
      response = await fetch(ruta);
      if(response.ok) {
        await cache.put(ruta, response.clone());
        mostrarModal('✅ Descarga completa. Abriendo...');
      } else {
        throw new Error('PDF no encontrado');
      }
    } catch(e) {
      mostrarModal('❌ Error de red. Necesitas internet para descargar este tema por primera vez.');
      return;
    }
  }

    const blob = await response.blob();
  const pdfUrl = URL.createObjectURL(blob);

  const modal = document.createElement('div');
  modal.id = 'pdf-modal';
  modal.style.cssText = `
    position:fixed;top:0;left:0;right:0;bottom:0;
    background:#0a0a0a;z-index:9999;
    display:flex;flex-direction:column;
  `;
  modal.innerHTML = `
    <div style="background:#1a1a1a;padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #333">
      <button onclick="cerrarPDF()" style="background:none;border:none;color:#00D9FF;font-size:16px;font-weight:700">← Volver</button>
      <div style="color:#fff;font-size:15px;font-weight:700">${titulo}</div>
      <div style="width:60px"></div>
    </div>
    <iframe src="${pdfUrl}" style="flex:1;border:none;width:100%"></iframe>
  `;
  document.body.appendChild(modal);
}

function cerrarPDF() {
  const modal = document.getElementById('pdf-modal');
  if(modal) modal.remove();
}

function actualizarMensajeMotivacional() {
  const mensajes = [
    "Vas por buen camino 💪",
    "Cada fallo te hace más fuerte 🔥",
    "El examen DGT es tuyo 🚗",
    "No pares ahora 💎",
    "Concéntrate y aprobarás 👑",
    "Un test más y dominas 👨‍🎓",
    "La constancia da carnet 🏆"
  ];
  const msg = mensajes[Math.floor(Math.random() * mensajes.length)];
  const el = document.getElementById('motivacion');
  if(el) el.textContent = msg;
}

function mostrarModal(texto) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:#0009;display:flex;align-items:center;justify-content:center;z-index:9999';
  modal.innerHTML = `
    <div style="background:#1a1a1a;border:2px solid #ff8c00;border-radius:12px;padding:24px;max-width:300px;text-align:center">
      <div style="color:#fff;font-size:16px;margin-bottom:16px">${texto}</div>
      <button class="btn" onclick="this.parentElement.parentElement.remove()">OK</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// ===== INIT ROBUSTO COMO CAT V8.2 =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V10.5.2 ES - Arquitectura CAT aplicada");
  mostrarIntro();
  actualizarCoins();
  cargarPregunta('senales');
  cargarPregunta('normas');
  cargarPregunta('mecanica');
  cargarPregunta('auxilios');
  cargarPregunta('medioambiente');
  cargarCasos();
  actualizarMensajeMotivacional();
}

// ===== EXPORTS GLOBALES PARA HTML onclick =====
window.cambiarTab = cambiarTab;
window.cambiarSubTab = cambiarSubTab;
window.cambiarCategoriaSit = cambiarCategoriaSit;
window.siguienteTest = siguienteTest;
window.siguienteSituacion = siguienteSituacion;
window.iniciarExamen = iniciarExamen;
window.siguientePreguntaExamen = siguientePreguntaExamen;
window.reiniciarExamen = reiniciarExamen;
window.prevTip = prevTip;
window.nextTip = nextTip;
window.comprarEmoji = comprarEmoji;
window.abrirPDF = abrirPDF;
window.cerrarPDF = cerrarPDF;
window.comprarCoche = comprarCoche;
window.comprarAccesorios = comprarAccesorios;
window.cargarPregunta = cargarPregunta;
window.responderTest = responderTest;
window.responderSituacion = responderSituacion;
window.responderExamen = responderExamen;
window.cerrarIntro = cerrarIntro;

// ===== SERVICE WORKER REGISTRO =====
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
.then(reg => console.log('SW registrado'))
.catch(err => console.log('SW error:', err));
  });
}
// === FIN BLOQUE LÓGICA ===