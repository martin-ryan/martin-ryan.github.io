$('document').ready(function(){


  initBoard();

})

// hypotenus distance is 29.963px (isometric) which is 53.656px y and 13.4px x
var moveDist_x = 53.656;
var moveDist_y = 26.837;
var boardState = [];

function initBoard(){
  var body = $('body');
  var board = $('<div>');
  var tile = $('<img>');
  var tileBlue = 'img/tileBlue.png';
  var gridSepsHorizontal = 21.5;
  var gridSepsVertical = 21.5;
  var tileWidth = board.width() / gridSepsHorizontal;
  var tileHeight = board.height() / gridSepsVertical;

  // put board together
  tile.prop('src', tileBlue);
  board.prop('id','board');
  board.css({position: 'relative'});
  board.append(tile);
  body.append(board);
  
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
