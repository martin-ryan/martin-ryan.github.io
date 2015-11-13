//
// VARIABLES
ui.overlay = {};
ui.overlay.container = $('#overlayContainer');
ui.overlay.overlay_message = $('#overlay_message');
ui.overlay.overlay_instructions = $('#overlay_instructions');
ui.overlay.overlay_playerSelect = $('#overlay_playerSelect');
ui.overlay.alertBox = $('#messageAlert');
ui.overlay.alertBkgd = $('#alertBkgd');
ui.overlay.btn_yes = $('#btn_yes');
ui.overlay.btn_no = $('#btn_no');
ui.deck.actions.container = $('#actionsDeck');
player.actionCardsContainer = $('#currentHand');
player.numActionCardDraw = 5;
player.canDraw = true;
player.turn = 'player one';
player.turnInstructions = ['draw action cards','play action cards',''];
player.currentHand = [];
player.selectedCard;
//
ui.overlay.messageSystem = function(typeOfMessage, message, needYesOrNo, duration, delay, callbackFunction){
  //
  var answer = undefined;
  ui.overlay.alertBkgd.css('display','block');
  ui.overlay.overlay_message.css('display','block');
  // typeOfMessage: 'alert', ...
  switch (typeOfMessage) {
    case 'alert':
    //
    ui.overlay.alertBox.text(message);
    ui.overlay.alertBox.css('display','block');
    // DON'T need YES/NO buttons
    if (needYesOrNo == false) {
      ui.overlay.btn_yes.css('display','none');
      ui.overlay.btn_no.css('display','none');
      closeMessage(duration, delay, callbackFunction);
    } else  { // DO need YES/NO buttons
      ui.overlay.btn_yes.css('display','block');
      ui.overlay.btn_no.css('display','block');
      ui.overlay.btn_yes.click(function(){
        answer = true;
        closeMessage(duration,delay);
        if (callbackFunction != undefined || callbackFunction != null) {
          callbackFunction(answer);
        }
      });
      ui.overlay.btn_no.click(function(){
        answer = false;
        closeMessage(duration,delay);
        if (callbackFunction != undefined || callbackFunction != null) {
          callbackFunction(answer);
        }
      });
    }
      break;
    case '':
    //
      break;
    default:

  }
  // CALLBACK FOR ANSWER

};

function closeOverlay(duration, delay) {
  setTimeout(function(){ui.overlay.container.fadeOut(duration)},delay);
}

function closePlayerSelect(duration, delay) {
  setTimeout(function(){ui.overlay.overlay_playerSelect.fadeOut(duration)},delay);
}

function closeMessage(duration, delay, callbackFunction) {
  setTimeout(function(){
    ui.overlay.overlay_message.fadeOut(duration);
    if (callbackFunction != undefined || callbackFunction != null) {
      callbackFunction('closed');
    }
  },delay);
}

function initPlayerSelect(){
  //
  ui.overlay.btn_playerReady1 = $('#btn_playerReady1');
  ui.overlay.btn_playerReady2 = $('#btn_playerReady2');
  ui.overlay.playerSelect_p1 = $('#playerSelect1');
  ui.overlay.playerSelect_p2 = $('#playerSelect2');
  ui.overlay.btn_play = $('#btn_play');
  //
  ui.overlay.overlay_playerSelect.css('display','block')
  ui.overlay.btn_play.css('display','block');

  selectPlayer();
}

function selectPlayer(answer){
  // when user HITS PLAY, if 1 player pop up Yes/No Alert.
  // Alert callback to this function with True/False answer.
  switch (answer) {
    case true:
    //
    closePlayerSelect();
    gameController('players are ready');
      break;
    case false:
    //
      break;
    default:

  }
  var p1_ready = false;
  var p2_ready = false;
  //
  // PLAYER ONE READY
  ui.overlay.playerSelect_p1.click(function(){
    //
    p1_ready = true;
    ui.overlay.btn_playerReady1.css('background-color','green');
  });
  //
  // PLAYER TWO READY
  ui.overlay.playerSelect_p2.click(function(){
    //
    p2_ready = true;
    ui.overlay.btn_playerReady2.css('background-color','green');
  });
  //
  // HIT PLAY
  ui.overlay.btn_play.click(function(){
    //
    if (p1_ready && p2_ready){
      // 2 PLAYER GAME
      closePlayerSelect();
      gameController('players are ready');
    } else if (p1_ready || p2_ready){
      // 1 PLAYER GAME
      ui.overlay.messageSystem('alert','WAITING FOR THE OTHER PLAYER! DO YOU WANT TO PLAY AGAINST AI?', true, 200, 0, selectPlayer);
    }
  });
}

function displayInstructions(){
  ui.overlay.overlay_instructions.css('display','block');
  ui.overlay.overlay_instructions.click(function(){
    ui.overlay.overlay_instructions.fadeOut("slow", function(){
      gameController('instructions have been read');
    });
  })
}

function showAndActivateGameUI(){
  $('.actionCard').css('display','block');
  ui.deck.actions.container.click(function(){
    drawActionCards(player.numActionCardDraw);
  });
}

function drawActionCards(num){
  // default num is 5
  if (player.canDraw == true){
    var deck = game.deck.actions;
    //
    if (0 == deck.length){
      creatActionsDeck();
    }
    //
    for (var i = 0; i < num; i++){
      moveCardFromDeckToHand(i);
    }
    player.canDraw = false;
  }
}

function moveCardFromDeckToHand(slot){
  var deck = game.deck.actions;
  var card = $('#actionsDeck div').filter(':last');
  // card.css('position','fixed');
  player.currentHand.push(deck.pop());
  // card.css('display','inline-block');
  card.appendTo(player.actionCardsContainer);
  $('#currentHand .actionCard').css('display','inline-block');
  $('#currentHand .actionCard').css('position','static');
  $('#currentHand .actionCard').css('color','white');
  $('#currentHand .actionCard:eq(' + slot + ')').click(function(){
    selectCard(slot);
    $('#currentHand .actionCard').off();
  });
  //
  //
}

function selectCard(slot) {
  $('#currentHand .actionCard:eq(' + slot + ')').css('background-color','red');
  useCard(player.currentHand.pop(slot));
  // gameController('select unit for card');
}

function useCard(card){
  console.log(card);
  $('#p1_NameOne').click(function(){
    // ui.overlay.messageSystem('alert','BOOM! I JUST USED ' + card, false, 1000, 2000);
    $('#p1_NameOne .stats').css('color','rgb(255, 255, 255)');
    $('#p1_NameOne .stats').text('MOVE 5 SPACES');
  });
}
