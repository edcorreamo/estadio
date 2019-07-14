//Apuntadores que están en esas ubicaciones
var entradapoli;
var entradaesquina;
var entradaPrincipal;
var parqueadero1;
var parqueadero2;

//Imágenes a mostrar
var imgpoli;
var imgesquina;
var imgPrincipal;
var imgP1;
var imgtribuna;

//Texto que aparecerá con las Imágenes
var textopoli;
var textoesquina;
var textoPrincipal;
var textoP1;
var textotribuna;

//Estilo del texto
var estiloTexto = { font: "30px Roboto-Regular", fill: "#0d1628" }
var estilo2Texto = { font: "30px Roboto-Regular", fill: "#fff" }

var mapaDos = {
  preload : function() {
    mapa.load.image ('zoom', 'imagenes/mapacerca.png' );
    mapa.load.image ('P1', 'imagenes/Parqueadero.jpg' );
    mapa.load.image ('tribuna', 'imagenes/tribuna.jpg' );
    mapa.load.image ('Principal', 'imagenes/EntradaPrincipal.jpg' );
    mapa.load.image ('poli', 'imagenes/poli.jpg' );
    mapa.load.image ('esquina', 'imagenes/esquina.jpg' );
    mapa.load.spritesheet ( 'atras', 'imagenes/BotonAtras.png', 40, 40);
    mapa.load.spritesheet ( 'apuntadores2', 'imagenes/ApuntadoresMapa_opt.png', 66.6, 53);
    mapa.load.spritesheet ( 'cambiarVista', 'imagenes/Boton2.png', 150, 71);
  },
  create : function() {
    //El fondo se pone en blanco porque la imagen de fondo no alcanza a cubrir toda la ventana
    mapa.stage.backgroundColor = "#FFF";
    //Imagen de fondo
    mapa.add.tileSprite(61, 54.5, 391, 391, 'zoom' );
    //Botón atras
    mapa.add.button(10, 10, 'atras', volver, this, 1, 0, 2);
    mapa.add.button(200, 300, 'cambiarVista', cambiarPrimeraPersona, this, 2, 1, 0);
    
    //Apuntadores entradas del Auditorio
    entradaPrincipal = mapa.add.button( 164, 188, 'apuntadores2', mostrarPrincipal, this, 1, 0, 2);
    entradaesquina = mapa.add.button( 210, 60, 'apuntadores2', mostraresquina, this, 1, 0, 2);
    entradapoli = mapa.add.button( 130, 300, 'apuntadores2', mostrarpoli, this, 1, 0, 2);
    //Apuntadores parqueaderos
    parqueadero1 = mapa.add.button( 215, 235, 'apuntadores2', mostrarP1, this, 1, 0, 2);
    parqueadero2 = mapa.add.button( 305, 170, 'apuntadores2', mostrartribuna, this, 1, 0, 2);

    //Añadir imágenes
    imgPrincipal = mapa.add.button( 56.5, 100, 'Principal', ocultarPrincipal, this );
    imgpoli = mapa.add.button( 56.5, 100, 'poli', ocultarpoli, this );
    imgesquina = mapa.add.button( 56.5, 100, 'esquina', ocultaresquina, this );
    imgP1 = mapa.add.button( 56.5, 100, 'P1', ocultarP1, this );
    imgtribuna = mapa.add.button( 56.5, 100, 'tribuna', ocultartribuna, this );
    //Ocultar imágenes
      
    imgP1.visible = false;
    imgtribuna.visible = false;
    imgPrincipal.visible = false;
    imgpoli.visible = false;
    imgesquina.visible = false;

    //Añadir texto
    textopoli = mapa.add.text( 140, 330, "   Polideportivo", estilo2Texto );
    textoesquina = mapa.add.text( 100, 110, "Esquina Sur.", estiloTexto );
    textoPrincipal = mapa.add.text( 150, 110, "Entrada principal", estilo2Texto );
    textotribuna = mapa.add.text( 170, 110, "Parqueadero", estilo2Texto );
    //Ocultar texto
    textopoli.visible = false;
    textoesquina.visible = false;
    textoPrincipal.visible = false;
    textotribuna.visible = false;
  }
}

function mostrarP1(){
  imgP1.visible = true;
  textotribuna.visible = true;
}

function mostrartribuna(){
  imgtribuna.visible = true;
  
}

function mostrarPrincipal(){
  imgPrincipal.visible = true;
  textoPrincipal.visible = true;
}

function mostrarpoli(){
  imgpoli.visible = true;
  textopoli.visible = true;
}

function mostraresquina(){
  imgesquina.visible = true;
  textoesquina.visible = true;
}

function ocultarP1(){
  imgP1.visible = false;
  textotribuna.visible = false;
}

function ocultartribuna(){
  imgtribuna.visible = false;
}

function ocultarPrincipal(){
  imgPrincipal.visible = false;
  textoPrincipal.visible = false;
}

function ocultarpoli(){
  imgpoli.visible = false;
  textopoli.visible = false;
}

function ocultaresquina(){
  imgesquina.visible = false;
  textoesquina.visible = false;
}

function volver(){
  mapa.state.start( "MapaUno" );
}

function cambiarPrimeraPersona(){
  mapa.state.start( "PrimeraPersona" );
}
