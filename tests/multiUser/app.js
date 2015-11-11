$('document').ready(function(){
  // console.log('js loaded');
  // initializePlayerSelect();

$('.p0').css('background-color','blue');
$('.p1').css('background-color','red');
$('#user1').click(function(){
  changeMultiColors();
});

});

function changeMultiColors () {
  $('.p0').css('background-color','green');
  $('.p1').css('background-color','purple');
}

function initializePlayerSelect() {
  //show player 1 available to be clicked
  //when player 1 clicked, updateGame and show player 2 available to be clicked
  //when player 2 clicked, updateGame and show player 3 etc
  var playerOne = new player(1, 'joe', 5, 3, 1);
  var playerTwo = new player(2, 'bill', 5, 3, 1);
  var playerThree = new player(3, 'bob', 5, 3, 1);
  var playerFour = new player(4, 'mary', 1, 5, 4);
  var playerFive = new player(5, 'kate', 2, 5, 2);

  var user1 = $('#user1');
  user1.click(function(){
    user1.off('click');
    playerOne.initialize();
    console.log('player one is ready!');
  });
}

function player(num, name, might, speed, intellect) {
// use THIS if the instance should know about a value itself
  this.num = num;
  this.name = name;
  this.might = might;
  this.speed = speed;
  this.intellect = intellect;
  this.initialize = function (num){
    // show player NUM as READY and turn on click for player NUM + 1
    var user = $('#user' + num);
    user.click(function(){
      // change state of player NUM to READY
      user.off('click');
      console.log('READY UP PLAYER 2');
    })

  };


}

function gameSequenceControl(){

}

function pOneTurn() {
  // move one space
  // if no room - place room
  // if room
  //   if icon
  //     if omen
  //     else if event
          // eventCard();
  //     else if item
          // itemCard();
  //     else if attack
          // playerAttack();
  //     else turn over
  //       updateGame()
  // else move
}
