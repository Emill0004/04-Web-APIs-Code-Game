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

var centralCounter;

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

function displayQuestion() {
    if (centralCounter === 0) {
        questionEl.textContent = questionText[0];
    } else if (centralCounter === 1) {
        questionEl.textContent = questionText[1];
    } else if (centralCounter === 2) {
        questionEl.textContent = questionText[2];
    } else if (centralCounter === 3) {
        questionEl.textContent = questionText[3];
    } else if (centralCounter === 4) {
        questionEl.textContent = questionText[4];
    } else if (centralCounter === 5) {
        questionEl.textContent = questionText[5];
    }
};

stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    startPageEl.classList.toggle("hide");
    contentPageEl.classList.toggle("hide");
    setTime();
    centralCounter = -1;
    centralCounter++;
    displayQuestion();
    // questionEl.textContent = questionText[0];
});

// TEST: REMOVE WHEN FINISHED \\
testButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    centralCounter++;
    if (centralCounter === 6) {
        centralCounter = 0
    }
    console.log(centralCounter);
    displayQuestion();
});
