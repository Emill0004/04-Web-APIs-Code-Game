var stButtonEl = document.getElementById("start-button");
var startPageEl = document.getElementById("startpg");
var counterEl =  document.getElementById("counter");
var contentPageEl =  document.getElementById("contentpg");
var questionEl = document.getElementById("question");

var questionText = ["Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within _____.", 
"Arrays in JavaScript can be used to store _____.", 
"String values must be enclosed within _____ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:", 
"All done!"];

var centralCounter= -1;

//TEST: REMOVE WHEN FINSIHED \\
var testButtonEl = document.getElementById("test-button")

// make an array with each question and have it cycle through each object
function setTime() {
    var timeLeft = 75;
    var countDown =  setInterval(function() {
        timeLeft--;
        counterEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countDown);
        }
    }, 100)
}

// function displayQuestion() {
//     for (var i = -1; i < centralCounter; i++) {
//         questionEl.textContent = questionText[i];
//     }
// };

stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    startPageEl.classList.toggle("hide");
    contentPageEl.classList.toggle("hide");
    setTime();
    centralCounter = -1;
    centralCounter++;
    questionEl.textContent = questionText[0];
});

// TEST: REMOVE WHEN FINISHED \\
testButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    centralCounter++;
    if (centralCounter == 6) {
        centralCounter = 0
    }
    console.log(centralCounter);
});
