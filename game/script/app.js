$('document').ready(function(){


  initBoard();
  // setTile();
})

// hypotenus distance is 29.963px (isometric) which is 53.656px y and 13.4px x
var moveDist_x = 53.656;
var moveDist_y = 26.837;
var initOffset = moveDist_y / 2;
var body;
var board;
var boardState = [];
var tileWidth;
var tileHeight;
var boardWidth = 1153.6;
var boardHeight = 577;

function initBoard(){
  body = $('body');
  board = $('<div>');
  board.css('width', boardWidth);
  board.css('height',boardHeight);
  board.css('dispay', 'block')
  board.prop('id','board');
  var gridSepsHorizontal = 21.5;
  var gridSepsVertical = 21.5;
  tileWidth = boardWidth / gridSepsHorizontal;
  tileHeight = boardHeight / gridSepsVertical;

  // set board background
  boardBkgdSrc = 'img/board.png';

  // put board together
  board.css('position', 'relative');
  board.css('background-image', 'url(' + boardBkgdSrc + ')');
  body.append(board);

  // set board array initial state
  for (var r = 0; r < gridSepsHorizontal; r++) {
    for (var c = 0; c < gridSepsVertical; c++) {
      //boardState.push([r,c]);
      var tile = new createTile('tile_' + r + '-' + c, r, c);
    }
  }
//  console.log(boardState);

  // create clickable tiles

  // newPos_x = tileWidth * 2;
  // newPos_y = tileHeight * 5 + initOffset;
  // tile.css('top', newPos_y);
  // tile.css('left', newPos_x);

}

function createTile(name, row, col){
  this.name = name;
  this.row = row;
  this.col = col;
  this.moveTile = function(){

  };
}

function setTiles(){
  var tile = $('<img>');
  var tileBlue = 'img/tileBlue.png';
  var newPos_x;
  var newPos_y;

  tile.prop('src', tileBlue);
  tile.css('position','absolute');
  newPos_x = tileWidth * 2;
  newPos_y = tileHeight * 5 + initOffset;
  tile.css('top', newPos_y);
  tile.css('left', newPos_x);
  board.append(tile);
}

//
// function setPosition (){
//   currentPosition_x
//   currentPositon_y
//   tilesToMove
// }

//
// function getGridSpacing(){
//   var gridSepHorizontal = 21.5;
//   var gridSepVertical = 21.5;
//   var tileWidth = board.width() / gridSepHorizontal;
//   var tileHeight = board.height() / gridSepVertical;
//   //use Pythagorous' skills to figure out how
//   Math.pow(tileHeight, 2) +
//   return (Math.square(tileHeight * tileHeight) + Math.sqrt(tileWidth * tileWidth))
// }
