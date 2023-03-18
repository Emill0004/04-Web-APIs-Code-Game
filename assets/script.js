var titleEl = document.getElementById("title");
var stButtonEl = document.getElementById("start-button");
var startPageEl = document.getElementsByClassName("startpg");
console.log(titleEl);
console.log(stButtonEl);
console.log(startPageEl.length);

var h1El = ["Coding Quiz challenge", "Highscores"];

var h2El = ["Coding Quiz Challenge", "Commonly used data types DO NOT include:", 
"The condition in an if / else statement is enclosed within _____.", "Arrays in JavaScript can be used to store _____.", 
"String values must be enclosed within _____ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:", "All done!", "Highscores"];

// make an array with each question and have it cycle through each object

stButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < startPageEl.length; i++)  {
        startPageEl[i].classList.add("hide");
        console.log(i);
    }
});