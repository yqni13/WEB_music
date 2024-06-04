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
    }
]

var playButton = document.getElementById("playbtn");
var pauseButton = document.getElementById("pausebtn");
var shuffleButton = document.getElementById("shufflebtn");
var repeatButton = document.getElementById("repeatbtn");
var volumeOn = document.getElementById("volumeon");
var volumeOff = document.getElementById("volumeoff");
var volumeSlider = document.getElementById("volume");
var displayedTime = document.getElementById("playing-time");
var displayedDuration = document.getElementById("duration-time");
var displayedThumbnail = document.getElementById("thumbnail");
var displayedTitle1 = document.getElementById("songTitle1")
var displayedTitle2 = document.getElementById("songTitle2")
var progressSlider = document.getElementById("progress");
var firstTrack = true;
var lastVolumeState = 0;
var currentSongNumber = 0;
var totalTime = 0;
var shuffle = false;

function loadSong(musicNumber) {
    currentSongNumber = musicNumber;
    var audio = document.getElementById("currentAudio");
    audio.src = "./assets/demo-music/" + music[musicNumber].name;
    displayedThumbnail.style.backgroundImage = 'url(' + music[musicNumber].thumbnail + ')';
    
    // styling of title in list window
    var title = document.getElementById(`title${musicNumber}`).getElementsByTagName('a')[0];
    title.style.color = getComputedStyle(document.documentElement).getPropertyValue('--slider-range-color')
    
    // doubled title for infinity rotation
    displayedTitle1.innerHTML = music[musicNumber].name.substring(-1, music[musicNumber].name.indexOf('.')) + " |&nbsp;"
    displayedTitle2.innerHTML = music[musicNumber].name.substring(-1, music[musicNumber].name.indexOf('.')) + " |&nbsp;"

    // default volume setting at start
    if (firstTrack) {
        audio.volume = 0.5;
        firstTrack = false;
    }

    // duration of audio object can only be loaded from metadata
    audio.addEventListener("loadedmetadata", () => {
        displayedDuration.innerHTML = getSongTimeFormatted(audio.duration);
        totalTime = audio.duration;
    })
    audio.addEventListener("timeupdate", () => {
        displayedTime.innerHTML = getSongTimeFormatted(audio.currentTime);
        // first try totalTime equals 0 which leads to irregular jump of slider
        if(totalTime != 0) progressSlider.value = Math.floor((audio.currentTime / totalTime)*100)
    })
}

function musicPlay() {
    playButton.style.display = "none";
    pauseButton.style.display = "inline"

    var song = document.getElementById("currentAudio");
    song.play();
    updateVolume(song);    
}

function musicPause() {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";

    var song = document.getElementById("currentAudio")
    song.pause();
}

function musicPrevious() {
    var nextSong;
    
    if(shuffle) nextSong = getRandomSongNumber();
    else nextSong = (currentSongNumber == 0) ? music.length-1 : currentSongNumber-1;
    
    resetSelectedElementStyle(true);
    loadSong(nextSong);
    musicPlay();
}

function musicNext() {
    var nextSong;

    if(shuffle) nextSong = getRandomSongNumber();
    else nextSong = (currentSongNumber == music.length-1) ? 0 : currentSongNumber+1;

    resetSelectedElementStyle(true);
    loadSong(nextSong);
    musicPlay();
}

function musicShuffling() {
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--shuffle-color');
    shuffleButton.className = "icon-Shuffle mode";
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    repeatButton.className = "icon-Repeat normal";

    shuffle = true;
    document.getElementById("currentAudio").addEventListener("ended", ()=> {
        musicNext();
    });
}
    
function musicRepeating() {
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--repeat-color');
    repeatButton.className = "icon-Repeat mode";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    shuffleButton.className = "icon-Shuffle normal";

    shuffle = false;
    document.getElementById("currentAudio").addEventListener("ended", ()=> {
        musicNext();
    });
}

function changeVolumeSymbol(vol) {
    if(vol == 0) {
        volumeOff.style.display = "inline";
        volumeOn.style.display = "none";
    } else {
        volumeOff.style.display = "none";
        volumeOn.style.display = "inline";
    }
}

function quickUpdateVolume(mute = false) {
    var audio = document.getElementById("currentAudio");
    console.log("volume: ", audio.volume);
    
    if (!mute) audio.volume = lastVolumeState;
    else {
        lastVolumeState = audio.volume;
        audio.volume = 0;
    }

    volumeSlider.value = audio.volume*100;
    changeVolumeSymbol(audio.volume);
}

function updateVolume(song) {
    volumeSlider.addEventListener("input", (val) => {
        song.volume = val.currentTarget.value/100;
    })
}

function updateSongProgress(timeVal) {
    document.getElementById("currentAudio").currentTime = (timeVal*totalTime)/100;
}

function getRandomSongNumber() {
    return Math.floor(Math.random() * (music.length-1));
}

function getSongTimeFormatted(time) {
    const h = Math.floor(time / 3600).toString().padStart(2, '0'),
    m = Math.floor(time % 3600 / 60).toString().padStart(2, '0'),
    s = Math.floor(time % 60).toString().padStart(2, '0');

    return `${h}:${m}:${s}`;
}

function resetPlayer() {
    var song = document.getElementById("currentAudio");
    if(song.src == "") return;
    song.currentTime = 0;
    song.src = "";
    volumeSlider.value = 50;
    firstTrack = true;
    
    // thumbnail, title rotation and time values visually reset
    displayedThumbnail.style.backgroundImage = "./assets/not_available.jpg";
    displayedThumbnail.style.backgroundImage = 'url(./assets/not_available.jpg)'
    displayedTime.innerHTML = "";
    displayedTime.style.color = "transparent";
    displayedDuration.innerHTML = "";
    displayedDuration.style.color = "transparent";
    displayedTitle1.innerHTML = "no music selected |&nbsp;";
    displayedTitle2.innerHTML = "no music selected |&nbsp;";
}