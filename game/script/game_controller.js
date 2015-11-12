// (make sure this is the LAST .js file to load)
// VARIABLES
// ...
//
// ............ Game Controller ............
function gameController(state){
  //
  var gameState = state;
  //
  switch (gameState) {
    case 'create board':
    //
    initBoard();
      break;
    case 'board is ready':
    //
    initPlayerSelect();
      break;
    case 'players are ready':
    //
    displayInstructions();
      break;
    case 'one player is ready':
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
    alert('DEFAULT hit in gameController! WTF');
    // gameController();
  }
}
//
//
$('document').ready(function(){

  gameController('create board');

})
