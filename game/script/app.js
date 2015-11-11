// empty tile shows if active unit can move there
// unit tile click shows info
// unit tile is always sorted on top of empty tile
// when unit tile is on empty tile empty tile click is turned off
// unit tile tracks its position and compares to empty tiles
// unit tile tracks its position and can't move into blocked tile
// unit tile tracks its position and can't move into other unit tile



$('document').ready(function(){

  initBoard();
  // setTile();
})

// VARS - hypotenus distance is 29.963px (isometric) which is 53.656px y and 13.4px x
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

// OBJS -

$(tile_0-1).click(function(){

})
$(tile_0-2).click(function(){

})

// COMPONENT

// CLASSES - Tile Constructor
function tile_unit(){
  //
  // VARS
  self = this;
  //
  // METHODS
  this.initialize(row, col){
    
    tag.prop('id', id);
    tag.prop('src', src);
    board.append(tag);
  }
  //
  this.moveTo = function(){
    var newRow = tileWidth * row;
    var newCol = tileHeight * col + initOffset;
    //
    self.tag.css('left', newRow);
    self.tag.css('top', newCol);
    self.tag.css('position', 'absolute');
  }
}


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

  // test single tile object

  var testTile1 = new tile(4, 4, $('<img>'), 'tile_4-4', 'img/tileBlue.png');

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
