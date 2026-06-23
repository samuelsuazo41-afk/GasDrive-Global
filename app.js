// GASDRIVE DGT V8.5 ES - DATA EXTERNA + SVG READY
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// INTRO SCREEN - Aparece SIEMPRE al abrir. No se toca.
function mostrarIntro(){
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="intro-screen" style="position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#1a1a2e,#16213e);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:20px">
      <div style="font-size:64px;margin-bottom:20px">🚗</div>
      <h1 style="font-size:32px;margin:0 0 10px">GasDrive DGT ES 2026</h1>
      <p style="font-size:18px;opacity:0.8;margin:0 0 10px">Aprueba el carnet en 15 min al día</p>
      <p style="font-size:16px;opacity:0.9;margin:0 0 30px">📚 Temarios oficiales DGT para estudiar cuando quieras</p>
      <div style="text-align:left;font-size:16px;margin-bottom:40px;line-height:2">
        <div>💰 Gana coins respondiendo bien</div>
        <div>🏎️ Compra supercars en el Garaje</div>
        <div>📚 630 preguntas DGT reales</div>
        <div>📖 Temarios completos para repasar</div>
      </div>
      <button onclick="cerrarIntro()" style="background:linear-gradient(135deg,#ff8c00,#ff2d55);border:none;color:#fff;padding:16px 48px;border-radius:12px;font-size:18px;font-weight:bold;cursor:pointer">EMPEZAR</button>
    </div>
  `);
}

function cerrarIntro(){
  document.getElementById('intro-screen').remove();
}

// ===== ESTADO GLOBAL - SIN GENERAL =====
let tipsData = [];
let currentTip = 0;
let sitCategoriaActiva = 'clima';

let estado = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    // GENERAL ELIMINADO
    senales: {idx:0,aciertos:0,racha:0,puntuacion:0},
    normas: {idx:0,aciertos:0,racha:0,puntuacion:0},
    mecanica: {idx:0,aciertos:0,racha:0,puntuacion:0},
    auxilios: {idx:0,aciertos:0,racha:0,puntuacion:0},
    mediambiente: {idx:0,aciertos:0,racha:0,puntuacion:0}
  },
  examen: {
    activa: false,
    preguntas: [],
    index: 0,
    aciertos: 0,
    fallos: 0,
    timer: null,
    tiempo: 1800,
    categoria: 'senales' // antes era 'general'
  },
  sit: {
    clima: {idx:0,aciertos:0,puntuacion:0,current:null},
    urbano: {idx:0,aciertos:0,puntuacion:0,current:null},
    carretera: {idx:0,aciertos:0,puntuacion:0,current:null},
    emergencia: {idx:0,aciertos:0,puntuacion:0,current:null}
  }
};

// Helper para leer datos desde window sin romper si falta archivo
function getPreguntas(cat) {
  const key = 'PREGUNTAS_' + cat.toUpperCase();
  return window[key] || [];
}

function getSituaciones(cat) {
  const key = 'SITUACIONES_' + cat.toUpperCase();
  return window[key] || [];
}

function getSVG(id) {
  return window.SENALES_SVG && window.SENALES_SVG[id]? window.SENALES_SVG[id] : '';
}

// Init se ejecuta cuando index.html carga apps.js
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V8.5 ES cargado - Datos desde /data/");
  mostrarIntro();
  actualizarCoins();

  // Carga inicial de todas las categorías. GENERAL ELIMINADO
  cargarPregunta('senales');
  cargarPregunta('normas');
  cargarPregunta('mecanica');
  cargarPregunta('auxilios');
  cargarPregunta('mediambiente');
  cargarSituacion('clima');

  actualizarMensajeMotivacional();
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

// Fisher-Yates
function barajarArray(arr) {
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cambiarTab(e, tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  e.target.closest('.tab-btn').classList.add('active');

  if(tab === 'garage') cargarGaraje();
  if(tab === 'tienda') cargarTienda();
  if(tab === 'tips') cargarTips();
  if(tab === 'temario') cargarTemario();
  if(tab === 'test') cargarPregunta('senales'); // Default a senales, no general
  if(tab === 'situaciones') cargarSituacion(sitCategoriaActiva);
}

function cambiarSubTab(e, tab, subtab) {
  const tabId = tab === 'sit'? 'situaciones' : tab;
  const contenedor = document.getElementById('tab-' + tabId);
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : 'sit'}-${subtab}`).classList.add('active');
  if(tab === 'test') cargarPregunta(subtab);
  if(tab === 'sit') cargarSituacion(subtab);
  }

// ============================================
// INIT
// ============================================
function init() {
  console.log(`🚀 GasDrive V${VERSION} iniciado`);
  const t0 = performance.now();

  try {
    actualizarCoins();
    actualizarMensajeMotivacional();
    window.categoriaActual = 'general'; // FIX: Asegurar valor inicial

    const PREGUNTAS_GENERAL = mezclarSinDuplicar(
      window.PREGUNTAS_SENALES || [],
      window.PREGUNTAS_NORMAS || [],
      window.PREGUNTAS_MECANICA || [],
      window.PREGUNTAS_AUXILIOS || [],
      window.PREGUNTAS_MEDIOAMBIENTE || []
    );
    window.PREGUNTAS_GENERAL = PREGUNTAS_GENERAL;

    console.log(`DEBUG: General cargó ${PREGUNTAS_GENERAL.length} preguntas`);

    DATOS_CARGADOS = true;

    // Precarga solo si bloque 2 existe
    if(typeof cargarPregunta === 'function') {
      cargarPregunta('general');
      cargarPregunta('senales');
      cargarPregunta('normas');
      cargarPregunta('mecanica');
      cargarPregunta('auxilios');
      cargarPregunta('medioambiente');
    }
    if(typeof cargarSituacion === 'function') {
      cargarSituacion('clima');
    }

    const tiempoCarga = Math.round(performance.now() - t0);
    console.log(`✅ Datos cargados en ${tiempoCarga}ms. General: ${PREGUNTAS_GENERAL.length} preguntas`);
    actualizarUIProgreso();
  } catch(e) {
    console.error('❌ Error cargando datos:', e);
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(mostrarIntro, 50));
  } else {
    setTimeout(mostrarIntro, 50);
  }
}

// 100 TIPS DEL DÍA - DOPAMINA DIARIA
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


// GARAJE - 17 COCHES CON 6 SUPERCOCHES NUEVOS
const COCHES = [
  // 3 primeros normales, sin filtro
  {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:200,cv:90,color:''},
  {id:'c2',nombre:'VW Golf GTI',emoji:'🚘',precio:800,cv:220,color:''},
  {id:'c3',nombre:'BMW M3',emoji:'🚙',precio:1500,cv:420,color:''},

  // Resto con efecto TRON y colores caros
  {id:'c4',nombre:'Tesla Model S',emoji:'⚡',precio:2000,cv:670,color:'hue-rotate(210deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00d4ff)'}, // azul electrico
  {id:'c5',nombre:'Porsche 911',emoji:'🏎️',precio:2500,cv:450,color:'hue-rotate(130deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ff88)'}, // verde esmeralda
  {id:'c6',nombre:'Bugatti Chiron',emoji:'🏎️',precio:5000,cv:1500,color:'hue-rotate(200deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00c8ff)'}, // azul hielo
  {id:'c7',nombre:'Yamaha R1',emoji:'🏍️',precio:2200,cv:200,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 8px #ffdd00)'}, // amarillo oro
  {id:'c8',nombre:'Ducati Panigale',emoji:'🏍️',precio:2800,cv:220,color:'hue-rotate(25deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff8800)'}, // naranja intenso
  {id:'c9',nombre:'Audi RS6',emoji:'🏎️',precio:3200,cv:600,color:'hue-rotate(180deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ffff)'}, // cian
  {id:'c10',nombre:'Nissan GTR',emoji:'🏎️',precio:3500,cv:565,color:'hue-rotate(90deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #88ff00)'}, // verde lima
  {id:'c11',nombre:'McLaren 720S',emoji:'🏎️',precio:4200,cv:720,color:'hue-rotate(15deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff6600)'}, // naranja fuego
  // SUPERCOCHES PREMIO MAYOR con glow mas potente
  {id:'c12',nombre:'Ferrari SF90 Stradale',emoji:'🏎️',precio:8500,cv:1000,color:'hue-rotate(0deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff0000)'}, // rojo neon
  {id:'c13',nombre:'Lamborghini Aventador SVJ',emoji:'🏎️',precio:8000,cv:770,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ffdd00)'}, // amarillo oro
  {id:'c14',nombre:'Koenigsegg Jesko Absolut',emoji:'🏎️',precio:14000,cv:1600,color:'hue-rotate(270deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #aa00ff)'},// violeta royal
  {id:'c15',nombre:'Porsche 918 Spyder',emoji:'🏎️',precio:9500,cv:887,color:'hue-rotate(130deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00ff88)'}, // verde esmeralda
  {id:'c16',nombre:'McLaren P1 GTR',emoji:'🏎️',precio:9000,cv:916,color:'hue-rotate(35deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff8800)'}, // naranja neon
  {id:'c17',nombre:'Bugatti Bolide',emoji:'🏎️',precio:16000,cv:1825,color:'hue-rotate(200deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00d4ff)'} // azul electrico
];

const ACCESORIOS = [
  // Mecanica / Potencia
  {id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nombre:'Nitro',emoji:'🔥',precio:600,hp:80},
  {id:'a3',nombre:'Motor Electrico',emoji:'⚡',precio:800,hp:100},
  {id:'a4',nombre:'Kit Mecanico',emoji:'🛠️',precio:400,hp:40},
  {id:'a5',nombre:'Herramientas Racing',emoji:'🔧',precio:250,hp:20},
  {id:'a6',nombre:'Cadena Reforzada',emoji:'⛓️',precio:350,hp:30},
  {id:'a7',nombre:'Engranajes Sport',emoji:'⚙️',precio:300,hp:25},
  {id:'a8',nombre:'Tornillos Racing',emoji:'🔩',precio:200,hp:15},

  // Ruedas / Adherencia
  {id:'a9',nombre:'Neumaticos Slick',emoji:'🛞',precio:400,hp:35},
  {id:'a10',nombre:'Neumaticos Lluvia',emoji:'🛞',precio:350,hp:30},
  {id:'a11',nombre:'Cadenas Nieve',emoji:'❄️',precio:300,hp:25},
  {id:'a12',nombre:'Llantas Racing',emoji:'🔲',precio:500,hp:40},
  {id:'a13',nombre:'Eje Equilibrado',emoji:'🎯',precio:250,hp:20},

  // Aerodinamica / Exterior
  {id:'a14',nombre:'Aleron GT',emoji:'🔰',precio:400,hp:40},
  {id:'a15',nombre:'Aleron F1',emoji:'🏁',precio:700,hp:70},
  {id:'a16',nombre:'Cristales Tintados',emoji:'🪟',precio:200,hp:10},
  {id:'a17',nombre:'Luces LED',emoji:'💡',precio:250,hp:15},
  {id:'a18',nombre:'Faros Laser',emoji:'🔦',precio:600,hp:50},
  {id:'a19',nombre:'Retrovisor Racing',emoji:'🪞',precio:200,hp:10},
  {id:'a20',nombre:'Defensa Reforzada',emoji:'🛡️',precio:450,hp:35},

  // Interior / Piloto
  {id:'a21',nombre:'Asiento Bucket',emoji:'🪑',precio:400,hp:25},
  {id:'a22',nombre:'Volante Racing',emoji:'🎛️',precio:350,hp:20},
  {id:'a23',nombre:'Cuadro Digital',emoji:'📊',precio:500,hp:30},
  {id:'a24',nombre:'Guantes Piloto',emoji:'🧤',precio:150,hp:10},
  {id:'a25',nombre:'Casco Racing',emoji:'🪖',precio:300,hp:15},
  {id:'a26',nombre:'Intercom',emoji:'🎧',precio:250,hp:10},

  // Estetica / Detalles Lujo
  {id:'a27',nombre:'Vinilo Llamas',emoji:'🎨',precio:300,hp:10},
  {id:'a28',nombre:'Vinilo Cromo',emoji:'🌈',precio:500,hp:15},
  {id:'a29',nombre:'Pintura Metalizada',emoji:'✨',precio:600,hp:20},
  {id:'a30',nombre:'Cristales Swarovski',emoji:'💎',precio:1000,hp:5},
  {id:'a31',nombre:'Corona Royal',emoji:'👑',precio:800,hp:10},
  {id:'a32',nombre:'Unicornio',emoji:'🦄',precio:1200,hp:5},
  {id:'a33',nombre:'Cohete',emoji:'🚀',precio:600,hp:15},
  {id:'a34',nombre:'Diamante',emoji:'💎',precio:1200,hp:5},
  {id:'a35',nombre:'Rayo',emoji:'⚡',precio:700,hp:20},
  {id:'a36',nombre:'Fuego',emoji:'🔥',precio:500,hp:15},
];

// === BLOQUE 2: FUNCIONES UI + LÓGICA TEST/SIT/EXAMEN ===

// Subtabs globales - CRÍTICO para que no dé ReferenceError
window.cambiarSubTab = function(tab) {
  document.querySelectorAll('.subtab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.subtab-content').forEach(c => c.classList.remove('active'));

  document.querySelector(`[data-subtab="${tab}"]`)?.classList.add('active');
  document.getElementById(`subtab-${tab}`)?.classList.add('active');

  if(typeof window.cargarPregunta === 'function') window.cargarPregunta(tab);
}

// Categorías Situaciones - global
window.cambiarCategoriaSit = function(cat) {
  window.sitCategoriaActiva = cat;
  document.querySelectorAll('#tab-situaciones.category-btn').forEach(btn => btn.classList.remove('active'));
  if(event && event.target) event.target.classList.add('active');

  const titulos = {
    clima: '🌧️ CASOS REALES - CLIMA ADVERSO',
    urbano: '🏙️ CASOS REALES - URBANO',
    carretera: '🛣️ CASOS REALES - CARRETERA',
    emergencia: '🚨 CASOS REALES - EMERGENCIA'
  };
  document.getElementById('sit-titulo').textContent = titulos[cat];
  window.estado.sit[cat].idx = 0;
  window.cargarSituacion(cat);
}

window.mostrarEmoji = function(acierto, element) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  element.style.position = 'relative';
  element.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30,20,30] : 100);
}

// TEST - 5 CATEGORÍAS
window.cargarPregunta = function(cat) {
  const s = window.estado.test[cat];
  const preguntas = window.barajarArray(window.getPreguntas(cat));
  if(!preguntas || preguntas.length === 0) return;

  const pOriginal = preguntas[s.idx % preguntas.length];
  const opcionesBarajadas = window.barajarArray(pOriginal.a);
  const textoCorrecto = pOriginal.a[pOriginal.ok];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);
  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  s.current = p;

  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntas.length)/preguntas.length)*100}%`;

  const imgCont = document.getElementById(`test-${cat}-imagen`);
  if(imgCont) {
    if(cat === 'senales' && p.img) {
      const svg = window.getSVG(p.img);
      imgCont.innerHTML = svg;
      imgCont.style.display = svg? 'block' : 'none';
    } else {
      imgCont.innerHTML = '';
      imgCont.style.display = 'none';
    }
  }

  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { window.responderTest(cat, i, this); };
    cont.appendChild(div);
  });
}

window.responderTest = function(cat, idx, el) {
  const s = window.estado.test[cat];
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
    window.estado.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ ¡CORRECTO! +${10+(s.racha*2)} pts`;
    window.mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    window.mostrarEmoji(false, el);
    s.racha = 0;
  }
  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  window.actualizarCoins();
  window.guardar();
}

window.siguienteTest = function(e, cat) {
  window.estado.test[cat].idx++;
  window.cargarPregunta(cat);
}

// CASOS - 4 categorías
window.cargarSituacion = function(cat) {
  if(!cat) cat = window.sitCategoriaActiva;
  const s = window.estado.sit[cat];
  const casos = window.barajarArray(window.getSituaciones(cat));
  if(!casos || casos.length === 0) return;

  const pOriginal = casos[s.idx % casos.length];
  const opcionesBarajadas = window.barajarArray(pOriginal.a);
  const textoCorrecto = pOriginal.a[pOriginal.ok];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);
  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  s.current = p;

  document.getElementById(`sit-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { window.responderSituacion(cat, i, this); };
    cont.appendChild(div);
  });
}

window.responderSituacion = function(cat, idx, el) {
  const s = window.estado.sit[cat];
  const p = s.current;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));

  const correcto = idx === p.ok;
  if(correcto) {
    el.classList.add('correcta');
    s.aciertos++;
    s.puntuacion += 15;
    window.estado.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ ¡CORRECTO! +15 pts`;
    window.mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ FALLO';
    window.mostrarEmoji(false, el);
  }
  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  window.actualizarCoins();
  window.guardar();
}

window.siguienteSituacion = function(e, cat) {
  window.estado.sit[cat].idx++;
  window.cargarSituacion(cat);
}

// EXAMEN - todas las categorías
window.iniciarExamen = function(e) {
  const todas = [
   ...window.getPreguntas('senales'),
   ...window.getPreguntas('normas'),
   ...window.getPreguntas('mecanica'),
   ...window.getPreguntas('auxilios'),
   ...window.getPreguntas('mediambiente'),
   ...window.getSituaciones('clima')
  ];

  if(todas.length < 30) {
    alert('Faltan preguntas. Necesitas 30 mínimo.');
    return;
  }

  window.estado.examen.preguntas = window.barajarArray(todas).slice(0, 30);
  window.estado.examen.activa = true;
  window.estado.examen.index = 0;
  window.estado.examen.aciertos = 0;
  window.estado.examen.fallos = 0;
  window.estado.examen.categoria = 'senales';

  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  window.iniciarTimerExamen();
  window.cargarPreguntaExamen();
}

window.iniciarTimerExamen = function() {
  clearInterval(window.estado.examen.timer);
  window.estado.examen.tiempo = 1800;
  window.estado.examen.timer = setInterval(() => {
    window.estado.examen.tiempo--;
    const min = Math.floor(window.estado.examen.tiempo / 60);
    const seg = window.estado.examen.tiempo % 60;
    document.getElementById('examen-timer').textContent =
      `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(window.estado.examen.tiempo <= 0) window.finalizarExamen();
  }, 1000);
}

window.cargarPreguntaExamen = function() {
  if(window.estado.examen.index >= 30) return window.finalizarExamen();
  const pOriginal = window.estado.examen.preguntas[window.estado.examen.index];
  const opcionesBarajadas = window.barajarArray(pOriginal.a);
  const textoCorrecto = pOriginal.a[pOriginal.ok];
  const nuevoIndexCorrecto = opcionesBarajadas.indexOf(textoCorrecto);
  const p = {...pOriginal, a: opcionesBarajadas, ok: nuevoIndexCorrecto};
  window.estado.examen.preguntas[window.estado.examen.index] = p;

  document.getElementById('examen-num').textContent = window.estado.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = window.estado.examen.aciertos;
  document.getElementById('examen-progress').style.width = `${(window.estado.examen.index/30)*100}%`;
  document.getElementById('examen-pregunta').textContent = p.q;

  const imgExamen = document.getElementById('examen-imagen');
  if(imgExamen) {
    if(p.img && p.id && p.id.startsWith('s')) {
      imgExamen.innerHTML = window.getSVG(p.img);
      imgExamen.style.display = 'block';
    } else {
      imgExamen.innerHTML = '';
      imgExamen.style.display = 'none';
    }
  }

  const cont = document.getElementById('examen-opciones');
  cont.innerHTML = '';
  document.getElementById('btn-sig-examen').disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { window.responderExamen(i, this); };
    cont.appendChild(div);
  });
}

window.responderExamen = function(idx, el) {
  const p = window.estado.examen.preguntas[window.estado.examen.index];
  const cont = document.getElementById('examen-opciones');
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));

  const correcto = idx === p.ok;
  if(correcto) {
    el.classList.add('correcta');
    window.estado.examen.aciertos++;
    window.estado.coins += 20;
    window.mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    window.estado.examen.fallos++;
    window.mostrarEmoji(false, el);
  }
  document.getElementById('btn-sig-examen').disabled = false;
  document.getElementById('examen-aciertos').textContent = window.estado.examen.aciertos;
  window.actualizarCoins();
  window.guardar();
}

window.siguientePreguntaExamen = function(e) {
  window.estado.examen.index++;
  if(window.estado.examen.index >= 30) {
    window.finalizarExamen();
  } else {
    window.cargarPreguntaExamen();
  }
}

window.finalizarExamen = function() {
  clearInterval(window.estado.examen.timer);
  window.estado.examen.activa = false;
  const nota = window.estado.examen.aciertos;
  const aprobado = nota >= 27;
  const res = document.getElementById('examen-resultado');
  res.style.display = 'block';

  if(aprobado) {
    res.innerHTML = `
      <h2 style="color:#2ecc71">✅ ¡APROBADO!</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Aciertos: ${nota} | Fallos: ${window.estado.examen.fallos}</p>
      <p>Has ganado +${nota*20} coins</p>
      <button class="btn" onclick="window.reiniciarExamen()">Hacer otro examen</button>
    `;
    window.estado.coins += nota * 20;
  } else {
    res.innerHTML = `
      <h2 style="color:#e74c3c">❌ SUSPENSO</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Aciertos: ${nota} | Fallos: ${window.estado.examen.fallos}</p>
      <p>Necesitas 27 aciertos mínimo</p>
      <button class="btn" onclick="window.reiniciarExamen()">Volver a probar</button>
    `;
  }
  window.actualizarCoins();
  window.guardar();
}

window.reiniciarExamen = function() {
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

// GARAJE + TIENDA + TIPS + TEMARIO
window.cargarGaraje = function() {
  const cont = document.getElementById('garage-lista');
  cont.innerHTML = '';
  let hpTotal = 90;
  window.estado.accesorios.forEach(id => {
    const acc = window.ACCESORIOS && window.ACCESORIOS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;

  (window.COCHES || []).forEach(coche => {
    const desbloqueado = window.estado.coches.includes(coche.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (desbloqueado? '' : ' locked');
    div.innerHTML = `
      <div style="font-size:40px; filter:${coche.color}">${coche.emoji}</div>
      <div>${coche.nom}</div>
      <div style="color:#667eea">${coche.cv} CV</div>
      ${!desbloqueado? `<button class="btn-buy" onclick="window.comprarCoche('${coche.id}')">Comprar ${coche.preu}💰</button>` : '<div style="color:#2ecc71">✓ Propietario</div>'}
    `;
    cont.appendChild(div);
  });
}

window.comprarCoche = function(id) {
  const coche = (window.COCHES || []).find(c => c.id === id);
  if(!coche) return;
  if(window.estado.coins < coche.preu) {
    alert('No tienes suficientes coins');
    return;
  }
  window.estado.coins -= coche.preu;
  window.estado.coches.push(id);
  window.guardar();
  window.actualizarCoins();
  window.cargarGaraje();
}

window.cargarTienda = function() {
  const cont = document.getElementById('emoji-tienda');
  cont.innerHTML = '';

  (window.ACCESORIOS || []).forEach(acc => {
    const comprado = window.estado.accesorios.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprado? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${acc.emoji}</div>
      <div>${acc.nom}</div>
      <div style="color:#667eea">+${acc.hp} CV</div>
      ${!comprado? `<button class="btn-buy" onclick="window.comprarAccesorios('${acc.id}')">Comprar ${acc.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprado</div>'}
    `;
    cont.appendChild(div);
  });

  (window.EMOJI_TIENDA || []).forEach(emoji => {
    const comprado = window.estado.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprado? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${emoji.emoji}</div>
      <div>${emoji.nom}</div>
      <div style="color:#667eea">Cosmético</div>
      ${!comprado? `<button class="btn-buy" onclick="window.comprarEmoji('${emoji.id}')">Comprar ${emoji.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprado</div>'}
    `;
    cont.appendChild(div);
  });
}

window.comprarAccesorios = function(id) {
  const acc = (window.ACCESORIOS || []).find(a => a.id === id);
  if(!acc) return;
  if(window.estado.coins < acc.preu) {
    alert('No tienes suficientes coins');
    return;
  }
  window.estado.coins -= acc.preu;
  window.estado.accesorios.push(id);
  window.guardar();
  window.actualizarCoins();
  window.cargarTienda();

  const totalAcc = window.estado.accesorios.length;
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#ff8c00,#ff2d55);color:#fff;padding:12px 24px;border-radius:12px;font-weight:bold;z-index:999;animation:slideUp 0.3s';
  msg.innerHTML = `🏎️ ¡Ya vas creando tu supercoche! ${totalAcc}/42 accesorios`;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

window.comprarEmoji = function(id) {
  const emoji = (window.EMOJI_TIENDA || []).find(e => e.id === id);
  if(!emoji) return;
  if(window.estado.coins < emoji.preu) {
    alert('No tienes suficientes coins');
    return;
  }
  window.estado.coins -= emoji.preu;
  window.estado.emojis.push(id);
  window.guardar();
  window.actualizarCoins();
  window.cargarTienda();
}

window.cargarTips = function() {
  window.tipsData = window.TIPS || [];
  window.currentTip = 0;
  window.mostrarTip();
}

window.mostrarTip = function() {
  if (window.tipsData.length === 0) return;
  const tip = window.tipsData[window.currentTip];
  document.getElementById('tip-content').innerHTML = `
    <div class="tip-emoji">${tip.emoji}</div>
    <div class="tip-text">${tip.txt}</div>
  `;
  document.getElementById('tip-counter').textContent = `${window.currentTip + 1} / ${window.tipsData.length}`;
}

window.nextTip = function(e) {
  window.currentTip = (window.currentTip + 1) % window.tipsData.length;
  window.mostrarTip();
}

window.prevTip = function(e) {
  window.currentTip = (window.currentTip - 1 + window.tipsData.length) % window.tipsData.length;
  window.mostrarTip();
}

window.cargarTemario = function() {
  const container = document.getElementById('temario-lista');
  container.innerHTML = `
    <div class="temario-item" onclick="window.abrirPDF('./01_Senales_Tomo_I_RD_465_2025.pdf')">
      <div style="font-size:40px">🚦</div>
      <div>Señales</div>
      <div style="font-size:11px;color:#999">RD 465/2025</div>
    </div>
    <div class="temario-item" onclick="window.abrirPDF('./02_Normas_Circulacion_Tomo_II_Edicion_2024.pdf')">
      <div style="font-size:40px">📋</div>
      <div>Normas Circulación</div>
      <div style="font-size:11px;color:#999">Edición 2024</div>
    </div>
    <div class="temario-item" onclick="window.abrirPDF('./03_Manual_IX_Primeros_Auxilios_2025.pdf')">
      <div style="font-size:40px">🚑</div>
      <div>Primeros Auxilios</div>
      <div style="font-size:11px;color:#999">Manual IX 2025</div>
    </div>
    <div class="temario-item" onclick="window.abrirPDF('./04_Manual_VIII_Mecanica_2024.pdf')">
      <div style="font-size:40px">⚙️</div>
      <div>Mecánica</div>
      <div style="font-size:11px;color:#999">Manual VIII 2025</div>
    </div>
    <div class="temario-item" onclick="window.abrirPDF('./05_Medio_Ambiente_Distintivos_DGT_2025.pdf')">
      <div style="font-size:40px">♻️</div>
      <div>Medio Ambiente</div>
      <div style="font-size:11px;color:#999">Distintivos DGT 2025</div>
    </div>
  `;
}

window.abrirPDF = function(ruta) {
  const modal = document.createElement('div');
  modal.id = 'pdf-modal';
  modal.style.cssText = `
    position:fixed;top:0;left:0;right:0;bottom:0;
    background:#0a0a0a;z-index:9999;
    display:flex;flex-direction:column;
  `;
  modal.innerHTML = `
    <div style="background:#1a1a1a;padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #333">
      <button onclick="window.cerrarPDF()" style="background:none;border:none;color:#00D9FF;font-size:16px;font-weight:700">← Volver</button>
      <div style="color:#fff;font-size:15px;font-weight:700">Temario DGT</div>
      <div style="width:60px"></div>
    </div>
    <iframe src="${ruta}" style="flex:1;border:none;width:100%"></iframe>
  `;
  document.body.appendChild(modal);
}

window.cerrarPDF = function() {
  const modal = document.getElementById('pdf-modal');
  if(modal) modal.remove();
}

window.actualizarMensajeMotivacional = function() {
  const mensajes = [
    "Vas por buen camino 💪",
    "Cada fallo te hace más fuerte 🔥",
    "El examen DGT es tuyo 🚗",
    "No pares ahora 💎",
    "Concéntrate y aprobarás 👑"
  ];
  const msg = mensajes[Math.floor(Math.random() * mensajes.length)];
  const el = document.getElementById('motivacion');
  if(el) el.textContent = msg;
}

// SERVICE WORKER
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
 .then(reg => console.log('SW registrado'))
 .catch(err => console.log('SW error:', err));
  });
}
