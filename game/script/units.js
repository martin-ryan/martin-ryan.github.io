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
function tile_unit(name, src){
  //
  // VARIABLES
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
