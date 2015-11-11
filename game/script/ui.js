//
// VARIABLES
ui.overlay = {};
ui.overlay.alertBox = $('#messageAlert');
//
ui.overlay.messageSystem = function(typeOfMessage, message){
  // typeOfMessage: 'alert', ...
  switch (typeOfMessage) {
    case 'alert':
    //
    ui.overlay.alertBox.text(message);
    ui.overlay.alertBox.css('display','block');
    setTimeout(function(){ui.overlay.alertBox.fadeOut(1000)},1000);
      break;
    case '':
    //
      break;
    default:

  }
};
