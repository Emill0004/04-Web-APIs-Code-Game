var stButtonEl = document.getElementById("start-button");
var startPageEl = document.getElementById("startpg");
var counterEl = document.getElementById("counter");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var ansButtonsEl = document.getElementById("ans-buttons");
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

var centralCount;
var timeLeft;

//TEST: REMOVE WHEN FINSIHED \\
var testButtonEl = document.getElementById("test-button")

// make an array with each question and have it cycle through each object
function setTime() {
    timeLeft = 75;
    var countDown =  setInterval(function() {
        timeLeft--;
        counterEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countDown);
        } else if (centralCount === 5) {
            clearInterval(countDown);
            console.log(timeLeft);
        }
    }, 1000)
}

function displayQuestion() {
    if (centralCount === 0) {
        questionEl.textContent = questionText[0];
        for (var i  = 0; i < buttonArray.length; i++)  {
            buttonArray[i].textContent = q1AnsText[i];
            buttonArray[i].classList.toggle("hide");
        }
    } else if (centralCount === 1) {
        questionEl.textContent = questionText[1];
        for (var i  = 0; i < buttonArray.length; i++)  {
            buttonArray[i].textContent = q2AnsText[i];
        }
    } else if (centralCount === 2) {
        questionEl.textContent = questionText[2];
        for (var i  = 0; i < buttonArray.length; i++)  {
            buttonArray[i].textContent = q3AnsText[i];
        }
    } else if (centralCount === 3) {
        questionEl.textContent = questionText[3];
        for (var i  = 0; i < buttonArray.length; i++)  {
            buttonArray[i].textContent = q4AnsText[i];
        }
    } else if (centralCount === 4) {
        questionEl.textContent = questionText[4];
        for (var i  = 0; i < buttonArray.length; i++)  {
            buttonArray[i].textContent = q5AnsText[i];
        }
    } else if (centralCount === 5) {
        questionEl.textContent = questionText[5];
        scoreEl.textContent = "Your final score is " + timeLeft;
        ansButtonsEl.classList.toggle("hide");
        scoreEl.classList.toggle("hide");
    }
};

scoreEl.classList.toggle("hide");
questionEl.classList.toggle("hide");
ansButtonsEl.classList.toggle("hide");


stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    startPageEl.classList.toggle("hide");
    questionEl.classList.toggle("hide");
    ansButtonsEl.classList.toggle("hide");
    setTime();
    centralCount = -1;
    centralCount++;
    displayQuestion();
    // questionEl.textContent = questionText[0];
});

// TEST: REMOVE WHEN FINISHED \\
testButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    centralCount++;
    if (centralCount === 6) {
        centralCount = 0
    }
    console.log(centralCount);
    displayQuestion();
});