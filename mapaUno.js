//Imágenes de las entradas
var entrada50
var entrada53;
var entrada45;
var entrada26;
//texto a usar en cada una de las fotos
var texto53;
var texto45;
var texto26;

var botonAtras;

var fondo;

//Estilo del texto que se va a usar
var estilo = { font: "30px Roboto-Regular", fill: "#02112e",color:"#DF0101" }

var mapaUno = {
  preload : function() {
    mapa.load.image( 'fondo', 'imagenes/mapa1.png');
    mapa.load.image( 'E50', 'imagenes/Entrada50.jpg');
    mapa.load.image( 'E53', 'imagenes/Entrada53.jpg');
    mapa.load.image( 'E45', 'imagenes/Entrada45.jpg');
    mapa.load.image( 'E26', 'imagenes/Entrada26.jpg');
    mapa.load.spritesheet( 'lupa', 'imagenes/Lupa.png', 100, 100);
    mapa.load.spritesheet( 'apuntador', 'imagenes/ApuntadoresMapa.png', 66.6, 53);
  },
  create : function() {
    //Añadir el fondo
    fondo = mapa.add.tileSprite(0 , 0, 513, 500, 'fondo' );

    //Añadir los tres punteros para las tres entradas
    mapa.add.button(55, 80, 'apuntador', mostrar50, this, 1, 0, 2);
      
    mapa.add.button(275, 390, 'apuntador', mostrar26, this, 1, 0, 2);      
    mapa.add.button(330, 0, 'apuntador', mostrar53, this, 1, 0, 2);
    mapa.add.button(426, 323, 'apuntador', mostrar45, this, 1, 0, 2);
    
    //Añadir lupa para acercar la parte de la imagen en donde está el auditorio (Conducir a otro estado)
    mapa.add.button(150, 40, 'lupa', cambiarMapaDos, this, 0, 1);

    //Añadir texto
    texto53 = mapa.add.text(170, 330, "Calle 53 ", estilo);
    texto45 = mapa.add.text(170, 330, "Calle 45 ", estilo);
    texto26 = mapa.add.text(170, 330, "Calle 26 ", estilo);
    texto50 = mapa.add.text(170, 330, "Calle 50 ", estilo);
    //Ocultar texto
    texto53.visible = false;
    texto45.visible = false;
    texto26.visible = false;
    texto50.visible = false;
    

    //Añadir todas las imágenes a mostrar como información adicional
      
    entrada50 = mapa.add.button(56.5, 100, 'E50', ocultar50, this);
    entrada53 = mapa.add.button(56.5, 100, 'E53', ocultar53, this);
    entrada45 = mapa.add.button(56.5, 100, 'E45', ocultar45, this);
    entrada26 = mapa.add.button(56.5, 100, 'E26', ocultar26, this);
    //Ocultar todas las imagenes anteriores
    entrada53.visible = false;
    entrada45.visible = false;
    entrada26.visible = false;
    entrada50.visible = false;
  }
}

function funcion(){
  console.log ("ingreso");
}

function mostrar50() {
  entrada50.visible = true;
  texto50.visible = true;
}

function mostrar53() {
  entrada53.visible = true;
  texto53.visible = true;
}
function mostrar45() {
  entrada45.visible = true;
  texto45.visible = true;
}
function mostrar26() {
  entrada26.visible = true;
  texto26.visible = true;
}
function ocultar50() {
  entrada50.visible = false;
  texto50.visible = false;
}
function ocultar53() {
  entrada53.visible = false;
  texto53.visible = false;
}
function ocultar45() {
  entrada45.visible = false;
  texto45.visible = false;
}
function ocultar26() {
  entrada26.visible = false;
  texto26.visible = false;
}

function cambiarMapaDos(){
  mapa.state.start ( "MapaDos" );
}
