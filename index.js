var COLOR = "gray";

/***********************************************************************************************************************

  Write code for event Handler

***********************************************************************************************************************/
var scoreElement = document.querySelector("#score");
var circles = document.querySelectorAll(".circle." + COLOR); // write code to select circles of your color

function clickHandler() {
  totalScore += SCORE;
  scoreElement.innerHTML = totalScore;                    // Write code to update score text in HTML
  $(this).hide();
}

function attachEventHandler(circle) {
  circle.addEventListener("click", clickHandler);         // Write code to add event listener
}

function removeEventHandler(circle) {
  circle.removeEventListener("click", clickHandler);      // Write code to remove event listener
}

/***********************************************************************************************************************

  End of beginners code

***********************************************************************************************************************/

































var SCORE = 10;
var TIMER = 10;
var totalScore = 0;
var timerElement = document.querySelector("#timer");
var playNowBtn = document.querySelector("#playNowBtn");
var timer, interval;
var length = circles.length;

playNowBtn.addEventListener("click", function() {
  var timerText = 10;

  // Start Timer
  timer = setTimeout(function() {
    if (timer)
      clearTimeout(timer);


  }, TIMER);

  // Attach event handler
  length = circles.length;
  while(--length >= 0) {
    attachEventHandler(circles[length]);
  };

  // Update time
  interval = setInterval(function() {
    timerElement.innerHTML = timerText + " secs";
    if (timerText == 0) {
      clearInterval(interval);

      length = circles.length;
      while(--length >= 0) {
        removeEventHandler(circles[length]);
      };
    }
    --timerText;
  }, 1000);



});