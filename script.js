
var playButton = document.getElementById("playbtn");
var pauseButton = document.getElementById("pausebtn");
var shuffleButton = document.getElementById("shufflebtn");
var repeatButton = document.getElementById("repeatbtn");
var volumeOn = document.getElementById("volumeon");
var volumeOff = document.getElementById("volumeoff");


function initializePlayer() {
    pauseButton.style.display = "none";
    shuffleButton.style.color = "initial"
    repeatButton.style.color = "initial"
    volumeOff.style.display = "none"
}

function musicPlaying() {
    playButton.style.display = "none";
    pauseButton.style.display = "inline"
}

function musicPausing() {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
}

function musicSkipPrevious() {
    // TODO
    // go back to song previous in list
}

function musicSkipNext() {
    // TODO
    // go forward to song next in list
}

function musicShuffling() {
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--shuffle-color');
    repeatButton.style.color = "initial";
}

function musicRepeating() {
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--repeat-color');
    shuffleButton.style.color = "initial";
}

function volumeChange(val) {
    if(val == 0) {
        volumeOff.style.display = "inline";
        volumeOn.style.display = "none";
    } else {
        if(volumeOff.style.display == "inline") {
            volumeOff.style.display = "none";
            volumeOn.style.display = "inline";
        }
    }
}



initializePlayer();