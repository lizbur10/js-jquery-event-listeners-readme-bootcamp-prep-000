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

}

function submitIt() {

}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
});
