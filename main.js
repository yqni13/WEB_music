
var user = "yqni13";
var music = [];

function initializePlayer() {
    document.getElementById("browser-title").innerHTML = `${user} music player`;
    pauseButton.style.display = "none";
    document.getElementById("progress").value = 0;
    volumeOff.style.display = "none"
    document.getElementById("tools-inactive").style.display = "block"; 
    document.getElementById("musicList").style.display = "none";
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

    document.getElementById("selectorOverview").style.display = "block";
    document.getElementById("musicList").style.display = "none";
    document.getElementById("listOverview").style.borderColor = 'transparent';
    document.getElementById("clearOverview").style.visibility = "hidden";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    shuffleButton.className = "icon-Shuffle normal";
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    repeatButton.className = "icon-Repeat normal";
}

function loadMusic() {
    music = musicDB;
    var list = document.getElementById("listOverview");
    var selector = document.getElementById("selectorOverview");
    var musicList = document.getElementById("musicList");
    var removeAllBtn = document.getElementById("clearOverview");
    var musicThumbnail = document.getElementById("thumbnail");

    if(music.length == 0) {
        list.style.borderColor = "transparent";
        selector.style.display = "block";
        musicThumbnail.style.backgroundSize = "contain";
        musicList.style.display = "none";
        removeAllBtn.style.visibility = "hidden";
        document.getElementById("tools-inactive").style.display = "block";
    } else {
        list.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--yqni13-purple');
        selector.style.display = "none";
        musicThumbnail.style.backgroundSize = "cover";
        musicList.style.display = "flex";
        removeAllBtn.style.visibility = "visible";
        displayedTime.style.color = getComputedStyle(document.documentElement).getPropertyValue('--ghost-white');
        displayedDuration.style.color = getComputedStyle(document.documentElement).getPropertyValue('--ghost-white');
        document.getElementById("tools-inactive").style.display = "none"      
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
