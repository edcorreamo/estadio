var fondo;

//Arreglo en donde van a estar las imágenes del fondo
var imagenes = new Array(13);

//Botón de avanzar o retroceder
var siguiente;
var anterior;

//Condiciones extra para el funcionamiento de los botones
var derecha = false;
var izquierda = false;

//Se usa para poder saber en qué número del arreglo se está actualmente y así poder cambiar entre fondos
var fondoActual;

var primeraPersona = {
  preload : function() {
    mapa.load.image('imagen0', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen1', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen2', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen3', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen4', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen5', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen6', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen7', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen8', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen9', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen10', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen11', 'imagenes/estadiorota.jpg');
    mapa.load.image('imagen12', 'imagenes/estadiorota.jpg');
    mapa.load.spritesheet ( 'atras', 'imagenes/BotonAtras.png', 40, 40);
    mapa.load.spritesheet ( 'siguiente', 'imagenes/Siguiente.png', 60, 62);
  },

  create : function() {
    //Añadir las 13 imágenes a utilizar en la navegación y ponerlas invisibles
    for (var i = 0; i < 13; i++){
      imagenes[i] = mapa.add.tileSprite(0, 0, 667, 500, "imagen" + i);
      imagenes[i].visible = false;
    }
    //EL fondo actual es el 0, es el que aparece apenas se entra a la navegación en primera persona
    fondoActual = 0;
    //centrar la imagen principal y ponerla visible
    imagenes[fondoActual].visible = true;
    imagenes[fondoActual].tilePosition.x = -83.5;

    //Botón atras
    mapa.add.button(10, 10, 'atras', volver2, this, 1, 0, 2);

    //añadir botones de navegación por las imágenes
    siguiente = mapa.add.button(443, 219, 'siguiente', this.moverAdelante, this, 1, 0, 2);
    anterior = mapa.add.button(72, 219, 'siguiente', this.moverAtras, this, 1, 0, 2);
    //Reflejar en el eje "Y" el botón para que se vea un boton apuntando hacia atrás
	  anterior.scale.setTo(-1, 1);

    //Lo siguiente se usa para que se pueda accionar el botón al poner el mouse sobre el botón y al dar click.
    // define instancias a las acciones con el botón ( over, down, out, up )
    siguiente.events.onInputOver.add( function(){ derecha = true;  } );
    siguiente.events.onInputDown.add( function(){ derecha = true;  } );
    siguiente.events.onInputOut.add ( function(){ derecha = false; } );
    siguiente.events.onInputUp.add  ( function(){ derecha = false; } );
    // define instancias a las acciones con el botón ( over, down, out, up )
    anterior.events.onInputOver.add( function(){ izquierda = true;  } );
    anterior.events.onInputDown.add( function(){ izquierda = true;  } );
    anterior.events.onInputOut.add ( function(){ izquierda = false; } );
    anterior.events.onInputUp.add  ( function(){ izquierda = false; } );
  },

  update : function() {
    if ( derecha == true ){
      this.moverAdelante();
    }
    if ( izquierda == true ){
      this.moverAtras();
    }
  },

  moverAdelante : function() {
    //Mover la imagen a la derecha
    if ( imagenes[fondoActual].tilePosition.x > -5552 ){
      imagenes[fondoActual].tilePosition.x -= 1.5;
    }
    //Si la imagen llega al borde derecho, ocultar el fondo actual.
    if ( imagenes[fondoActual].tilePosition.x <= -5552){
      imagenes[fondoActual].visible = false;
      //Si el fondo actual no es el 12, pase al siguiente fondo (Sumar 1 a fondoActual).
      if( fondoActual < 12 ){
        fondoActual += 1;
        //Si está en el fondo 12, regrese al primer fondo.
      } else if ( fondoActual == 12 ){
        fondoActual = 0;
      }
      //Mostrar el nuevo fondo actual e iniciarlo en el borde izquierdo.
      imagenes[fondoActual].visible = true;
      imagenes[fondoActual].tilePosition.x = 0;
    }
  },

  moverAtras : function() {
    //Mover la imagen a la izquierda
    if ( imagenes[fondoActual].tilePosition.x < 0 ){
      imagenes[fondoActual].tilePosition.x += 1.5;
    }
    //Si la imagen llega al borde izquierdo, ocultar el fondo actual.
    if ( imagenes[fondoActual].tilePosition.x >= 0){
      imagenes[fondoActual].visible = false;
      if( fondoActual > 0 ){
        fondoActual -= 1;
        //Si está en el fondo 0 (Principal), vaya al último fondo.
      } else if ( fondoActual == 0 ){
        fondoActual = 12;
      }
      //Mostrar el nuevo fondo actual e iniciarlo en el borde derecho.
      imagenes[fondoActual].visible = true;
      imagenes[fondoActual].tilePosition.x = -5552;
    }
  }
}

function volver2(){
  mapa.state.start( "MapaDos" );
}
