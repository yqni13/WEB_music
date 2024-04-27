
var user = "yqni13";
var music = [];

function initializePlayer() {
    document.getElementById("browser-title").innerHTML = `${user} music player`;
    pauseButton.style.display = "none";
    document.getElementById("progress").value = 0;
    volumeOff.style.display = "none"
}

function removeAll() {
    var musicList = document.getElementById("musicList");
    
    if(musicList.children.length !== 0) {
        for(let i = 0; i < music.length; i++) {
            musicList.removeChild(musicList.firstElementChild);
        }
    }

    music = [];
    resetPlayer();

    document.getElementById("selectorOverview").style.visibility = "visible";
    document.getElementById("selectorOverview").style.height = "100%";
    document.getElementById("listOverview").style.borderColor = 'transparent';
    document.getElementById("clearOverview").style.visibility = "hidden";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
}

function loadMusic() {
    music = musicDB;
    var list = document.getElementById("listOverview");
    var selector = document.getElementById("selectorOverview");
    var removeAllBtn = document.getElementById("clearOverview");

    if(music.length == 0) {
        list.style.borderColor = 'transparent';
        selector.style.visibility = "visible";
        removeAllBtn.style.visibility = "hidden";        
    } else {
        list.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--yqni13-purple');
        selector.style.visibility = "hidden";
        selector.style.height = "0%"
        removeAllBtn.style.visibility = "visible";
        displayedTime.style.color = getComputedStyle(document.documentElement).getPropertyValue('--ghost-white');
        displayedDuration.style.color = getComputedStyle(document.documentElement).getPropertyValue('--ghost-white');
        createMusicListElements(music);
        loadSong(0);
        musicPlay();
        musicRepeating();
    }

}

function createMusicListElements(musicElements) {
    for(let i = 0; i < musicElements.length; i++) {        
        var li = document.createElement("li");
        var iDrag = document.createElement("i");
        var title = document.createElement("a");
        var iRemove = document.createElement("i");

        li.setAttribute("onclick", `preSelectedTitle(${musicElements[i].number})`);
        li.setAttribute("ondblclick", `dblClickDemo(${musicElements[i].number})`);
        li.setAttribute("id", `title${musicElements[i].number}`)

        iDrag.setAttribute("class", "icon-MusicNote"); 
        title.innerHTML = musicElements[i].name.substring(-1, musicElements[i].name.indexOf('.'));
        iRemove.setAttribute("class", "icon-TrashBin");

        li.append(iDrag, title, iRemove)
        document.getElementById("musicList").appendChild(li);
    }    
}

function preSelectedTitle(selectedNumber) {
    resetSelectedElementStyle(false);
    var selectedTitle = document.getElementById(`title${selectedNumber}`);
    selectedTitle.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--ivory-white');
    selectedTitle.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--glassoptic-color');
}

function dblClickDemo(musicNumber) {
    resetSelectedElementStyle(true);
    musicPause();
    loadSong(musicNumber);
    musicPlay(musicNumber);
}

function resetSelectedElementStyle(changeSong) {
    for(let i = 0; i < music.length; i++) {
        var musicElement = document.getElementById(`title${i}`);
        var title = musicElement.getElementsByTagName('a')[0];
        musicElement.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--glassoptic-color');
        musicElement.style.backgroundColor = "transparent";
        if(changeSong) title.style.color = "grey";
    }
}

initializePlayer();
