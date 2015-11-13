//
// VARIABLES
//
// SQUADS
game.squad1 = {};
game.squad2 = {};
//
// SQUAD 1
game.squad1.unit1 = {};
game.squad1.unit2 = {};
game.squad1.unit3 = {};
game.squad1.unit4 = {};
//
// SQUAD 2
game.squad2.unit1 = {};
game.squad2.unit2 = {};
game.squad2.unit3 = {};
game.squad2.unit4 = {};
//
// ............ Tile Constructor ............
function unit(name, src){
  //
  // VARIABLES
  self = this;
  this.name = name;
  this.src = src;
  this.container = null;
  this.tag = null;
  this.col = null;
  this.row = null;
  this.statsContainer = null;
  this.statsArr = ['0 MOVES', '5 ATTACK', '3 DEFENSE'];
  //
  // METHODS
  this.initialize = function(col, row){
    this.col = col;
    this.row = row;
    this.statsContainer = $('<div>');
    this.statsContainer.prop('class', 'stats');
    this.statsContainer.text(this.statsArr);
    this.container = $('<div>');
    this.container.prop('id',name);
    this.tag = $('<img>');
    this.tag.prop('src', this.src);
    this.container.append(this.tag);
    this.container.append(this.statsContainer);
    game.board.container.append(this.container);
    this.moveTo(col, row);
  };
  //
  this.moveTo = function(col, row){
    this.col = col;
    this.row = row;
    var newCol = game.tile._width * col;
    var newRow = game.tile._height * row + game.tile.initOffset;
    //
    this.container.css('left', newCol);
    this.container.css('top', newRow);
    this.container.css('position', 'absolute');
  }
}
//
function deployUnits(deployComplete){
// display units to deploy : quantity, name, color
// display valid placement locations
// change color of tile once unit is placed
// for now AUTO DEPLOY and POST MESSAGE
  if (deployComplete == 'closed') {
    gameController('units deployed');
    return
  }

  ui.overlay.messageSystem('alert', 'AUTO DEPLOYING UNITS AND SHUFFLING DECK', false, 200, 1300, deployUnits);
  initUnits();
  //gameController('units deployed');
}
//
function initUnits(){
  player.one.unit1 = new unit('p1_NameOne','img/tileBlue_p1.png');
  player.one.unit2 = new unit('p1_NameTwo','img/tileYellow_p1.png');
  player.one.unit3 = new unit('p1_NameThree','img/tileRed_p1.png');
  player.one.unit4 = new unit('p1_NameFour','img/tileGreen_p1.png');

  player.two.unit1 = new unit('p2_NameOne','img/tileBlue_p2.png');
  player.two.unit2 = new unit('p2_NameTwo','img/tileYellow_p2.png');
  player.two.unit3 = new unit('p2_NameThree','img/tileRed_p2.png');
  player.two.unit4 = new unit('p2_NameFour','img/tileGreen_p2.png');

  autoPlaceUnits();
}

function autoPlaceUnits(){
  player.one.unit1.initialize(1,4);
  player.one.unit2.initialize(2,3);
  player.one.unit3.initialize(3,2);
  player.one.unit4.initialize(4,1);

  player.two.unit1.initialize(10,10);
  player.two.unit2.initialize(11,9);
  player.two.unit3.initialize(12,8);
  player.two.unit4.initialize(13,7);

  // gameController('units deployed');
}
