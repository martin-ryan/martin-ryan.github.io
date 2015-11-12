//
// VARIABLES
ui.overlay = {};
ui.overlay.container = $('#overlayContainer');
ui.overlay.overlay_message = $('#overlay_message');
ui.overlay.alertBox = $('#messageAlert');
ui.overlay.alertBkgd = $('#alertBkgd');
ui.overlay.btn_yes = $('#btn_yes');
ui.overlay.btn_no = $('#btn_no');
//
ui.overlay.messageSystem = function(typeOfMessage, message, needYesOrNo, callbackFunction){
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
    } else  { // DO need YES/NO buttons
      ui.overlay.btn_yes.css('display','block');
      ui.overlay.btn_no.css('display','block');
      ui.overlay.btn_yes.click(function(){
        answer = true;
        closeOverlay(1000,0);
      });
      ui.overlay.btn_no.click(function(){
        answer = false;
        closeMessage(200,0);
        //
      });
    }
      break;
    case '':
    //
      break;
    default:

  }
  // CALLBACK FOR ANSWER
  if (callbackFunction != undefined || callbackFunction != null) {
    callbackFunction(answer);
  }
};

function closeOverlay(duration, delay) {
  setTimeout(function(){ui.overlay.container.fadeOut(duration)},delay);
}

function closeMessage(duration, delay) {
  setTimeout(function(){ui.overlay.overlay_message.fadeOut(duration)},delay);
}

function initPlayerSelect(){
  //
  ui.overlay.playerSelect = $('#overlay_playerSelect');
  ui.overlay.btn_playerReady1 = $('#btn_playerReady1');
  ui.overlay.btn_playerReady2 = $('#btn_playerReady2');
  ui.overlay.playerSelect_p1 = $('#playerSelect1');
  ui.overlay.playerSelect_p2 = $('#playerSelect2');
  ui.overlay.btn_play = $('#btn_play');
  //
  ui.overlay.playerSelect.css('display','block')
  ui.overlay.btn_play.css('display','block');


  selectPlayer();
}

function selectPlayer(answer){

  switch (answer) {
    case 'true':
    //
    closeOverlay();
    gameController('players are ready');
      break;
    case 'false':
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
      //
      closeOverlay();
      gameController('players are ready');
    } else {
      //
      ui.overlay.messageSystem('alert','WAITING FOR THE OTHER PLAYER! DO YOU WANT TO PLAY AGAINST AI?', true, selectPlayer);
    }
  });
}
