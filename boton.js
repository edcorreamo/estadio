var botonInicio = {
  preload : function(){
    mapa.load.image( 'fondo', 'imagenes/Mapa1.png');
    mapa.load.spritesheet('boton', 'imagenes/Boton.png', 394, 192);
  },
  create : function(){
    mapa.add.tileSprite(0 , 0, 513, 500, 'fondo' );
    mapa.add.button(63, 155, 'boton', cambiarMapaUno, this, 1, 0, 2);
  }
}

function cambiarMapaUno(){
  mapa.state.start ( "MapaUno" );
}
