var stButtonEl = document.getElementById("start-button");
var centeredDiv = document.getElementById("centered");
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
var hiScoreListEl = document.getElementById("scorelist")
var clearButtonEl = document.getElementById("clear-button");
var returnButtonEl = document.getElementById("return-button");
var initialsDiv = document.getElementById("initials-div");
var highscoresDiv = document.getElementById("highscores-div");
var highscoreLink = document.getElementById("hiscore-link");

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

var highscores = [];

var centralCount;
var timeLeft;

function renderScores() {
    hiScoreListEl.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var highscore = highscores[i];

        var li = document.createElement("li");
        var scoreText = timeLeft;
        li.textContent = highscore + " - " + scoreText;
        hiScoreListEl.appendChild(li);
    }
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("highscores"));
    if (storedScores !== null) {
        highscores = storedScores;
    }
    renderScores();
}

function storeScores() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

initialsButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(highscores);
    var initialsText = initialsInputEl.value.trim();
    initialsText = initialsText.toUpperCase();
    if (initialsText === "") {
        return;
    }
    highscores.push(initialsText);
    initialsInputEl.value = "";

    storeScores();
    renderScores();
    centralCount++;
    displayNext();
});

init();

function rightMsg() {
    rightEl.classList.toggle("hidden");
    setTimeout(() => {rightEl.classList.toggle("hidden")}, 1000);
};
function wrongMsg() {
    wrongEl.classList.toggle("hidden");
    setTimeout(() => {wrongEl.classList.toggle("hidden")}, 1000);
};

function setTime() {
    var countDown = setInterval(function() {
        timeLeft--;
        counterEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countDown);
            centralCount = 6;
            displayNext();
        } else if (centralCount === 6) {
            clearInterval(countDown);
            console.log(timeLeft);
        }
    }, 1000)
}

function displayNext() {
    if (centralCount === 0) {
        centeredDiv.classList.toggle("hidden");
        highscoresDiv.classList.toggle("hidden");
    } else if (centralCount === 1) {
        questionEl.textContent = questionText[0];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q1AnsText[i];
            buttonArray[i].classList.toggle("hidden");
        }
    } else if (centralCount === 2) {
        questionEl.textContent = questionText[1];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q2AnsText[i];
        }
    } else if (centralCount === 3) {
        questionEl.textContent = questionText[2];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q3AnsText[i];
        }
    } else if (centralCount === 4) {
        questionEl.textContent = questionText[3];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q4AnsText[i];
        }
    } else if (centralCount === 5) {
        questionEl.textContent = questionText[4];
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].textContent = q5AnsText[i];
        }
    } else if (centralCount === 6) {
        questionEl.textContent = questionText[5];
        if (timeLeft !== 0) {
            scoreEl.textContent = "Your final score is " + (timeLeft - 1);
        } else {
            scoreEl.textContent = "Your final score is " + timeLeft;
        }
        
        ansButtonsEl.classList.toggle("hidden");
        scoreEl.classList.toggle("hidden");
        initialsDiv.classList.toggle("hidden");
    } else if (centralCount === 7) {
        scoreEl.classList.toggle("hidden");
        initialsDiv.classList.toggle("hidden");
        highscoresDiv.classList.toggle("hidden");
        questionEl.classList.toggle("hidden");
    }
};

scoreEl.classList.toggle("hidden");
questionEl.classList.toggle("hidden");
ansButtonsEl.classList.toggle("hidden");
rightEl.classList.toggle("hidden");
wrongEl.classList.toggle("hidden");
// initialsDiv.classList.toggle("hidden");
// highscoresDiv.classList.toggle("hidden");



stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    centeredDiv.classList.toggle("hidden");
    questionEl.classList.toggle("hidden");
    ansButtonsEl.classList.toggle("hidden");
    timeLeft = 75;
    setTime();
    centralCount = 0;
    centralCount++;
    displayNext();
});

button1El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 5) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    }
    centralCount++;
    displayNext();
});
button2El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 5) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    }
    centralCount++;
    displayNext();
});
button3El.addEventListener("click", function(event) {
    if (centralCount === 1) {
        rightMsg();
    } else if (centralCount === 2) {
        rightMsg();
    } else if (centralCount === 3) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 4) {
        rightMsg();
    } else if (centralCount === 5) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    }
    event.preventDefault();
    centralCount++;
    displayNext();
});
button4El.addEventListener("click", function(event) {
    event.preventDefault();
    if (centralCount === 1) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 2) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 3) {
        rightMsg();
    } else if (centralCount === 4) {
        timeLeft = timeLeft - 10;
        wrongMsg();
    } else if (centralCount === 5) {
        rightMsg();
    }
    centralCount++;
    displayNext();
});

clearButtonEl.addEventListener("click", function(event) {
    highscores = [];
    localStorage.clear();
    storeScores();
    renderScores();
});

returnButtonEl.addEventListener("click", function(event) {
    centralCount = 0;
    displayNext();
})

highscoreLink.addEventListener("click", function(event) {
    if (centralCount === 7) {
        return;
    } else {
        highscoresDiv.classList.toggle("hidden");
    }
})