var teamName = "Default";
var score = 0;
var TIMER_VALUE = 30000;
var timer, timerText = 30, interval;

var xsCircle = document.getElementsByClassName("xs");
var smallCircle = document.getElementsByClassName("small");
var md1Circle = document.getElementsByClassName("md-1");
var md2Circle = document.getElementsByClassName("md-2");
var md3Circle = document.getElementsByClassName("md-3");
var lgCircle = document.getElementsByClassName("lg");
var xlgCircle = document.getElementsByClassName("xlg");

var scoreElement = document.getElementById("score");
var timerElement = document.getElementById("timer");


var playNowBtn = document.getElementById("playNowBtn");
var saveTeamNameBtn = document.getElementById("saveTeamNameBtn");


/***********************************************************************************************************************

  Play Now button should open popup to accept team name.

***********************************************************************************************************************/
playNowBtn.addEventListener("click", function() {


});



/***********************************************************************************************************************

  Save Team Name button should save team name in global variable.
  It should start the game by binding click handlers with each of the circle
  It should start the timer as well

***********************************************************************************************************************/
saveTeamNameBtn.addEventListener("click", function() {
  // Close Popup
  $('#nameModal').modal('hide');

  // Save Team name
  // Write code here


  // Attach Listeners to each circle
  // on click of each circle score should update
  // hide circle
  xsCircle.addEventListener("click", function() {
    // Write code here - score 50 points
  });

  smallCircle.addEventListener("click", function() {
    // Write code here - score 30 points
  });

  md1Circle.addEventListener("click", function() {
    // Write code here - score 20 points
  });

  md2Circle.addEventListener("click", function() {
    // Write code here - score 20 points
  });

  md3Circle.addEventListener("click", function() {
    // Write code here - score 20 points
  });

  lgCircle.addEventListener("click", function() {
    // Write code here - score 10 points
  });

  xlg1Circle.addEventListener("click", function() {
    // Write code here - score 5 points
  });


  // Start Timer
  timer = setTimeout(function() {
    // De attach all listeners from circles
    // clear timer and interval
  }, TIMER_VALUE);

  // Update time
  interval = setInterval(function() {
    --timerText;
    timerElement.innerHTML = timerText + " secs";
  }, 1000);

});