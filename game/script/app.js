// empty tile shows if active unit can move there
// unit tile click shows info
// unit tile is always sorted on top of empty tile
// when unit tile is on empty tile empty tile click is turned off
// unit tile tracks its position and compares to empty tiles
// unit tile tracks its position and can't move into blocked tile
// unit tile tracks its position and can't move into other unit tile

$('document').ready(function(){

  initBoard();

})

//
// NAMESPACES
// var ui = {};
// var tile = {};
// var board = {};
//
// VARS
// notes: hypotenus distance is 29.963px (isometric) which is 53.656px y and 13.4px x
var moveDist_x = 53.656;
var moveDist_y = 26.837;
var initOffset = moveDist_y / 2;
var body;
var board;
var boardTiles = [];
var tileWidth;
var tileHeight;
var boardWidth = 1153.6;
var boardHeight = 577;
// squads and units
var squad1_unit1 = {};
var squad1_unit2 = {};
var squad1_unit3 = {};
var squad1_unit4 = {};
//
var squad2_unit1 = {};
var squad2_unit2 = {};
var squad2_unit3 = {};
var squad2_unit4 = {};
//



// OBJS -

// COMPONENT

// CLASSES - Tile Constructor
function tile_unit(name, src){
  //
  // VARS
  self = this;
  this.name =
  this.src = src;
  this.container = null;
  this.tag = null;
  //
  // METHODS
  this.initialize = function(row, col){
    self.container = $('div');
    self.tag = $('<img>');
    self.tag.prop('id', self.name);
    self.tag.prop('src', self.src);
    self.container.append(self.tag);
    board.append(self.container);
    self.moveTo(row, col);
  }
  //
  this.moveTo = function(row, col){
    var newRow = tileWidth * row;
    var newCol = tileHeight * col + initOffset;
    //
    self.tag.css('left', newRow);
    self.tag.css('top', newCol);
    self.tag.css('position', 'absolute');
  }
}

// GAME CONTROLLER
function gameController(state){
  //
  var gameState = state;
  //
  switch (gameState) {
    case 'board is ready':
    //
    displayInstructions();
      break;
    case 'instructions have been read':
    //
      break;
    case 'first player has deployed':
    //
      break;
    case 'second player has deployed':
    //
      break;
    case 'game is ready to play':
    //
      break;
    //
    default:
      gameController();
  }
}

// FUNCTIONS
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

  // Display Player Select
  // playerReady = $('<div>');
  // playerReady.css('id','playerRead');
  // playerReady.css('float','left');
  // playerReady.css('margin-left','auto');
  // playerReady.css('margin-right','auto');
  // playerReady.css('display','inline-block');
  // playerReady.css('position','absolute');
  // playerReady.css('width','200px');
  // playerReady.css('height','200px');
  // playerReady.css('background-color','skyblue');
//  board.append(playerReady);

  gameController('board is ready');

}


function displayInstructions(){

}



function startGame(){
  squad1_unit1 = new tile_unit('Bubba Jones', 'img/tileBlue.png');
  squad1_unit1.initialize(8,5);

  squad1_unit2 = new tile_unit('Bubba Jones', 'img/tileBlue.png');
  squad1_unit2.initialize(2,2);

  gameController

}


//
// function tile(row, col, tag, id, src){
//   if (tag == undefined) {
//     this.tag = $('<img>');
//   } else {
//     this.tag = tag;
//   };
//   board.append(tag);
//   this.tag.prop('id', id);
//   this.tag.prop('src', src);
//   this.row = row;
//   this.col = col;
//   self = this;
//   //
//   this.moveTo = function(){
//     var newRow = tileWidth * row;
//     var newCol = tileHeight * col + initOffset;
//     //
//     self.tag.css('left', newRow);
//     self.tag.css('top', newCol);
//     self.tag.css('position', 'absolute');
//   }
// }

// OBJS
// var tile = {
//
//   tileTag: "",
//   tile_h: null,
//   tile_v: null,
//   moveTo: function(h, v){
//     //
//     tile.tile_h = h;
//     tile.tile_v = v;
//     var newPos_h = tileWidth * tile.tile_h;
//     var newPos_v = tileHeight * tile.tile_v + initOffset;
//     //
//     tile.tileTag.css('left', newPos_h);
//     tile.tileTag.css('top', newPos_v);
//     tile.tileTag.css('position', 'absolute');
//   }
// }


  //initTiles();

  // set board array initial state
  // for (var r = 0; r < gridSepsHorizontal; r++) {
  //   for (var c = 0; c < gridSepsVertical; c++) {
  //     //boardState.push([r,c]);
  //     var tile = new createTile('tile_' + r + '-' + c, r, c);
  //   }
  // }


// tile object test



// function initTiles() {
//   //create array of tile objects
//   for (var r = 0; r < gridSepsHorizontal; r++) {
//     for (var c = 0; c < gridSepsVertical; c++) {
//       //create tile object and add to board array
//       boardTiles.push()
//     }
//   }
// }

//
// function createTile(name, row, col){
//   this.name = name;
//   this.row = row;
//   this.col = col;
//   this.moveTile = function(){
//     console.log('move this tile');
//   };
// }

// function setTiles(){
//   var tile = $('<img>');
//   var tileBlue = 'img/tileBlue.png';
//   var newPos_x;
//   var newPos_y;
//
//   tile.prop('src', tileBlue);
//   tile.css('position','absolute');
//   newPos_x = tileWidth * 2;
//   newPos_y = tileHeight * 5 + initOffset;
//   tile.css('top', newPos_y);
//   tile.css('left', newPos_x);
//   board.append(tile);
// }

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
