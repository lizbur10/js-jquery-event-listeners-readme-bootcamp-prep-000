//define functions here
function getIt() {
  $('p').click(function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('class','tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function() {
    if (key.which == 71) {
      alert('You pressed the g key');
    }
  });
}

function submitIt() {

}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
});
