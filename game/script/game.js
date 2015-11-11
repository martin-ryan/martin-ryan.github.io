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

function initPlayerSelect(){
  //
  var p1_ready = false;
  var p2_ready = false;
  ui.overlay.playerSelect = $('#overlay_playerSelect');
  ui.overlay.playerSelect_p1 = $('#playerSelect1');
  ui.overlay.playerSelect_p2 = $('#playerSelect2');

  ui.overlay.playerSelect.css('display','block');
  ui.overlay.playerSelect_p1.click(function(){
    p1_ready = true;
    if (p2_ready == true) {
      // next step
      gameController('players are ready');
    } else {
      ui.overlay.messageSystem('alert','WAITING FOR THE OTHER PLAYER!');
    }
  });
  ui.overlay.playerSelect_p2.click(function(){
    p2_ready = true;
    if (p1_ready == true) {
      // next step
      gameController('players are ready');
    } else {
      ui.overlay.messageSystem('alert','WAITING FOR THE OTHER PLAYER!');
    }
  });
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
