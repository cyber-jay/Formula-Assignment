// Formula Assigment

// HTML stuff
let calculateBtn = document.getElementById("calculateA");
let finalVel = document.getElementById("finalV");
let initialVel = document.getElementById("initialV");
let timeEl = document.getElementById("time");
let outputEl = document.getElementById("output");

calculateBtn.addEventListener("click", calcArea);

// Function
function calcArea() {
    // User Input
    let initialV = +initialVel.value;
    let finalV = +finalVel.value;
    let time = +timeEl.value;

    // Calculate
    outputEl.innerHTML = accformula(initialV, finalV, time);
}

function accformula(f, i, t) { 
     return (f - i) / t;
    // return (f - i) / 2
}