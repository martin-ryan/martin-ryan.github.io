//
// VARIABLES
ui.overlay = {};
ui.overlay.container = $('#overlayContainer');
ui.overlay.alertBox = $('#messageAlert');
ui.overlay.alertBkgd = $('#alertBkgd');
ui.overlay.btn_yes = $('#btn_yes');
ui.overlay.btn_no = $('#btn_no');
//
ui.overlay.messageSystem = function(typeOfMessage, message, needYesOrNo, callbackFunction){
  //
  var answer = undefined;
  ui.overlay.alertBkgd.css('display','block');
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
        closeOverlay(1000,0);
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

function initPlayerSelect(){
  //
  ui.overlay.playerSelect = $('#overlay_playerSelect');
  ui.overlay.btn_playerReady1 = $('#btn_playerReady1');
  ui.overlay.btn_playerReady2 = $('#btn_playerReady2');
  ui.overlay.playerSelect_p1 = $('#playerSelect1');
  ui.overlay.playerSelect_p2 = $('#playerSelect2');
  ui.overlay.playerSelect.css('display','block');

  selectPlayer();
}

function selectPlayer(answer){
  //
  var p1_ready = false;
  var p2_ready = false;
  //
  // Player vs Player or Player vs AI
  //
  // PLAYER ONE HIT READY
  ui.overlay.playerSelect_p1.click(function(){
    //
    p1_ready = true;
    ui.overlay.btn_playerReady1.css('background-color','green');
    playAgainst();
  });
  // PLAYER TWO HIT READY
  ui.overlay.playerSelect_p2.click(function(){
    //
    p2_ready = true;
    ui.overlay.btn_playerReady2.css('background-color','green');
    playAgainst();
  });

  playAgainst(){
    //
    if (p1_ready && p2_ready) {
      //
      playersSelectDone();
      gameController('players are ready');
    } else {
      //
      ui.overlay.messageSystem('alert','WAITING FOR THE OTHER PLAYER! DO YOU WANT TO PLAY AGAINST AI?', true, selectPlayer);
    }
  }

}
