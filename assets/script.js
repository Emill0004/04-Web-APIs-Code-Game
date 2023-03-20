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
var rightEl = document.getElementById("right");
var wrongEl = document.getElementById("wrong");
var initialsInputEl = document.getElementById("initials-text")
var initialsButtonEl = document.getElementById("initials-button")

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

function rightTime() {
    rightEl.classList.toggle("hide");
    setTimeout(() => {rightEl.classList.toggle("hide")}, 1000);
};
function wrongTime() {
    wrongEl.classList.toggle("hide");
    setTimeout(() => {wrongEl.classList.toggle("hide")}, 1000);
};

function setTime() {
    var countDown = setInterval(function() {
        timeLeft--;
        counterEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countDown);
            centralCount = 5;
            displayQuestion();
        } else if (centralCount === 5) {
            clearInterval(countDown);
            console.log(timeLeft);
        }
    }, 1000)
}

function displayQuestion() {
    if (centralCount === 0) {
        questionEl.textContent = questionText[0];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q1AnsText[i];
            buttonArray[i].classList.toggle("hide");
        }
    } else if (centralCount === 1) {
        questionEl.textContent = questionText[1];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q2AnsText[i];
        }
    } else if (centralCount === 2) {
        questionEl.textContent = questionText[2];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q3AnsText[i];
        }
    } else if (centralCount === 3) {
        questionEl.textContent = questionText[3];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q4AnsText[i];
        }
    } else if (centralCount === 4) {
        questionEl.textContent = questionText[4];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q5AnsText[i];
        }
    } else if (centralCount === 5) {
        questionEl.textContent = questionText[5];
        scoreEl.textContent = "Your final score is " + (timeLeft - 1);
        ansButtonsEl.classList.toggle("hide");
        scoreEl.classList.toggle("hide");
    }
};

scoreEl.classList.toggle("hide");
questionEl.classList.toggle("hide");
ansButtonsEl.classList.toggle("hide");
rightEl.classList.toggle("hide");
wrongEl.classList.toggle("hide");


stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    startPageEl.classList.toggle("hide");
    questionEl.classList.toggle("hide");
    ansButtonsEl.classList.toggle("hide");
    timeLeft = 75;
    setTime();
    centralCount = -1;
    centralCount++;
    displayQuestion();
});

button1El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 0) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongTime();
    }
    centralCount++;
    displayQuestion();
});
button2El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 0) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongTime();
    }
    centralCount++;
    displayQuestion();
});
button3El.addEventListener("click", function(event) {
    if (centralCount === 0) {
        rightTime();
    } else if (centralCount === 1) {
        rightTime();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 3) {
        rightTime();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongTime();
    }
    event.preventDefault();
    centralCount++;
    displayQuestion();
});
button4El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 0) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 2) {
        rightTime();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongTime();
    } else if (centralCount === 4) {
        rightTime();
    }
    centralCount++;
    displayQuestion();
});

initialsButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(initialsInputEl.value);
})