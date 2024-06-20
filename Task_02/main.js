
let time = 0;
let interval;
let display = document.querySelector(".time");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// start timer function
function startTimer() {
    // change button text
    startBtn.innerHTML = '<i class="fas fa-pause"></i>';
    clearInterval(interval);
    interval = setInterval(() => {
        time += 10; 
        display.innerHTML = formatTime(time);
    }, 10); 
}

// stop timer function
function stopTimer() {
    // change button text
    startBtn.innerHTML = '<i class="fas fa-play"></i>';
    clearInterval(interval);
    interval = null;s
}

// reset timer function
function resetTimer() {
    startBtn.innerHTML = '<i class="fas fa-play"></i>';
    clearInterval(interval);
    interval = null;
    time = 0;
    display.innerHTML = formatTime(time);
}

// format time function
function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = ("00" + milliseconds).slice(-3); 

    return `${minutes}:${seconds}:${milliseconds}`;
}
