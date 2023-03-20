var stButtonEl = document.getElementById("start-button");
var startPageEl = document.getElementById("startpg");
var counterEl = document.getElementById("counter");
var contentPageEl = document.getElementById("contentpg");
var questionEl = document.getElementById("question");
var button1El = document.getElementById("ans-button-1");
var button2El = document.getElementById("ans-button-2");
var button3El = document.getElementById("ans-button-3");
var button4El = document.getElementById("ans-button-4");

var questionText = ["Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within _____.", 
"Arrays in JavaScript can be used to store _____.", 
"String values must be enclosed within _____ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:", 
"All done!"];
var q1AnsText = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
var q2AnsText = ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"];
var q3AnsText = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
var q4AnsText = ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"];
var q5AnsText = ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console.log"];
var buttonArray = [button1El, button2El, button3El, button4El];



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
        for (var i  = 0; i < 4; i++)  {
            buttonArray[i].textContent = q1AnsText[i];
        };
    } else if (centralCounter === 1) {
        questionEl.textContent = questionText[1];
        for (var i  = 0; i < 4; i++)  {
            buttonArray[i].textContent = q2AnsText[i];
        };
    } else if (centralCounter === 2) {
        questionEl.textContent = questionText[2];
        for (var i  = 0; i < 4; i++)  {
            buttonArray[i].textContent = q3AnsText[i];
        };
    } else if (centralCounter === 3) {
        questionEl.textContent = questionText[3];
        for (var i  = 0; i < 4; i++)  {
            buttonArray[i].textContent = q4AnsText[i];
        };
    } else if (centralCounter === 4) {
        questionEl.textContent = questionText[4];
        for (var i  = 0; i < 4; i++)  {
            buttonArray[i].textContent = q5AnsText[i];
        };
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