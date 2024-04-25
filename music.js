/* pre defined music elements, stored in local directory */

const musicDB = [
    {
        number: 0,
        name: "Crystal Skies & HALIENE - Stardust.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music0.jpg",
        source: "./assets/demo-music/Crystal Skies & HALIENE - Stardust.mp3"
    },
    {
        number: 1,
        name: "Disclosure - You & Me Rivo Remix.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music1.jpg",
        source: "./assets/demo-music/Disclosure - You & Me Rivo Remix.mp3"
    },
    {
        number: 2,
        name: "IVOXYGEN - HELLBOY.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music2.jpg",
        source: "./assets/demo-music/IVOXYGEN - HELLBOY.mp3"
    },
    {
        number: 3,
        name: "Repiet & Julia Kleijn - Feels Like.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music3.jpg",
        source: "./assets/demo-music/Repiet & Julia Kleijn - Feels Like.mp3"
    },
    {
        number: 4,
        name: "SAUDADE - ATMOSPHERE PHONK.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music4.jpg",
        source: "./assets/demo-music/SAUDADE - ATMOSPHERE PHONK.mp3"
    },
    {
        number: 5,
        name: "Sea Of Problems.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music5.jpg",
        source: "./assets/demo-music/Sea Of Problems.mp3"
    },
    {
        number: 6,
        name: "Skeler - In My Mind.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music6.jpg",
        source: "./assets/demo-music/Skeler - In My Mind.mp3"
    },
    {
        number: 7,
        name: "Taras Stanin - Creepin - The Weeknd Beatbox Cover.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music7.jpg",
        source: "./assets/demo-music/Taras Stanin - Creepin - The Weeknd Beatbox Cover.mp3"
    },
    {
        number: 8,
        name: "Teddy Swims - Lose Control.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music8.jpg",
        source: "./assets/demo-music/Teddy Swims - Lose Control.mp3"
    },
    {
        number: 9,
        name: "VOILÀ - Off The Edge ft. LUNA AURA.mp3",
        type: "audio/mpeg",
        thumbnail: "./assets/demo-thumbnail/music9.jpg",
        source: "./assets/demo-music/VOILÀ - Off The Edge ft. LUNA AURA.mp3"
    },
]

var playButton = document.getElementById("playbtn");
var pauseButton = document.getElementById("pausebtn");
var shuffleButton = document.getElementById("shufflebtn");
var repeatButton = document.getElementById("repeatbtn");
var volumeOn = document.getElementById("volumeon");
var volumeOff = document.getElementById("volumeoff");
var volumeSlider = document.getElementById("volume");
// var displayedTime = document.getElementById("playing-time");
// var displayedNumber = document.getElementById("song-number");
var displayedThumbnail = document.getElementById("thumbnail");
var displayedTitle1 = document.getElementById("songTitle1")
var displayedTitle2 = document.getElementById("songTitle2")
var currentSongNumber = 0;

function musicPlaying(musicNumber = currentSongNumber) {
    
    currentSongNumber = musicNumber;
    playButton.style.display = "none";
    pauseButton.style.display = "inline"    

    var song = document.getElementById(`audio${musicNumber}`)
    song.play();
    updateVolume(song);
    
    
    // time - see github repository => addEventListener("timeupdate")
    var title = document.getElementById(`title${musicNumber}`).getElementsByTagName('a')[0];
    title.style.color = getComputedStyle(document.documentElement).getPropertyValue('--slider-range-color')
    displayedThumbnail.style.backgroundImage = 'url(' + music[musicNumber].thumbnail + ')';
    displayedTitle1.innerHTML = music[musicNumber].name.substring(-1, music[musicNumber].name.indexOf('.')) + " |&nbsp;"
    displayedTitle2.innerHTML = music[musicNumber].name.substring(-1, music[musicNumber].name.indexOf('.')) + " |&nbsp;"
}

function musicPausing() {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";

    var song = document.getElementById(`audio${currentSongNumber}`)
    song.pause();
}

function resetSongPlayTime(musicNumber) {
    var song = document.getElementById(`audio${musicNumber}`);
    song.currentTime = 0;
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
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');

}

function musicRepeating() {
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--repeat-color');
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
}

function changeVolumeSymbol(val) {
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

function updateVolume(song) {
    volumeSlider.addEventListener("input", (e) => {
        song.volume = e.currentTarget.value/100;
    })
}