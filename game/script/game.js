//
// VARIABLES
game.tile = {};
game.board = {};
//
// VARIABLES
// notes: hypotenus distance is 29.963px (isometric) which is 53.656px y and 13.4px x
game.tile.moveDist_x = 53.656;
game.tile.moveDist_y = 26.837;
game.tile.initOffset = game.tile.moveDist_y / 2;
game.wrapper;
game.tile._width;
game.tile._height;
game.board._width = 1153.6;
game.board._height = 577;
//
// ............ Create Board ............
function initBoard(){
  //
  game.wrapper = $('#gameWrapper');
  game.board = $('<div>');
  game.board.css('width', game.board._width);
  game.board.css('height',game.board._height);
  game.board.css('dispay', 'block')
  game.board.prop('id','board');
  var gridSepsHorizontal = 21.5;
  var gridSepsVertical = 21.5;
  game.board._width = game.board._width / gridSepsHorizontal;
  game.board._height = game.board._height / gridSepsVertical;

  // set board background
  boardBkgdSrc = 'img/board.png';

  // put board together
  game.board.css('background-image', 'url(' + boardBkgdSrc + ')');
  game.wrapper.prepend(game.board);

  // next step
  gameController('board is ready');

}




function displayInstructions(){
  console.log('show some damn instructions');
}



function startGame(){
  squad1_unit1 = new tile_unit('Bubba Jones', 'img/tileBlue.png');
  squad1_unit1.initialize(8,5);

  squad1_unit2 = new tile_unit('Bubba Jones', 'img/tileBlue.png');
  squad1_unit2.initialize(2,2);

  gameController

}
