
var music = [];

function initializePlayer() {
    pauseButton.style.display = "none";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    volumeOff.style.display = "none"
    

}

/*-----------------------------------------------------------------------------------------------------------*/

// var _el;

// function dragOver(e) {
//   if (isBefore(_el, e.target))
//     e.target.parentNode.insertBefore(_el, e.target);
//   else
//     e.target.parentNode.insertBefore(_el, e.target.nextSibling);
// }

// function dragStart(e) {
//   e.dataTransfer.effectAllowed = "move";
//   e.dataTransfer.setData("text/plain", null);
//   _el = e.target;
// }

// function isBefore(el1, el2) {
//   if (el2.parentNode === el1.parentNode)
//     for (var cur = el1.previousSibling; cur && cur.nodeType !== 9; cur = cur.previousSibling)
//       if (cur === el2)
//         return true;
//   return false;
// }

/*-----------------------------------------------------------------------------------------------------------*/

function removeAll() {
    var musicList = document.getElementById("musicList");
    
    if(musicList.children.length !== 0) {
        for(let i = 0; i < music.length; i++) {
            musicList.removeChild(musicList.firstElementChild);
        }
    }

    music = [];

    document.getElementById("selectorOverview").style.visibility = "visible";
    document.getElementById("selectorOverview").style.height = "100%";
    document.getElementById("listOverview").style.borderColor = 'transparent';
    document.getElementById("clearOverview").style.visibility = "hidden";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
}

// TODO 
// remove single songs
// needs to be assigned dynamically to created elements
function removeSingle(i) {
    var files = Object.entries(document.getElementById("upload").files);
    Object.entries(files.splice(i-1, 1));
}

function loadMusic() {
    music = musicDB;
    var list = document.getElementById("listOverview");
    var selector = document.getElementById("selectorOverview");
    var removeAllBtn = document.getElementById("clearOverview");
    var activeList = document.getElementById("musicList");

    if(music.length == 0) {
        list.style.borderColor = 'transparent';
        selector.style.visibility = "visible";
        removeAllBtn.style.visibility = "hidden";        
    } else {
        list.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--yqni13-purple');
        selector.style.visibility = "hidden";
        selector.style.height = "0%"
        removeAllBtn.style.visibility = "visible";
    }

    createMusicListElements(music, activeList);
}

function createMusicListElements(musicElements, activeList) {
    for(let i = 0; i < musicElements.length; i++) {        
        var li = document.createElement("li");
        var audio = document.createElement("audio");
        var source = document.createElement("source");
        var iDrag = document.createElement("i");
        var title = document.createElement("a");
        var iRemove = document.createElement("i");

        // li.draggable = true;
        // li.setAttribute("ondragover", "dragOver(event)");
        // li.setAttribute("ondragstart", "dragStart(event)");

        li.setAttribute("onclick", `preSelectedTitle(${musicElements[i].number})`);
        li.setAttribute("ondblclick", `dblClickDemo(${musicElements[i].number})`);
        li.setAttribute("id", `title${musicElements[i].number}`)

        source.src = musicElements[i].source
        audio.setAttribute("id", `audio${musicElements[i].number}`)

        iDrag.setAttribute("class", "icon-DragIndicator"); 
        title.innerHTML = musicElements[i].name.substring(-1, musicElements[i].name.indexOf('.'));
        iRemove.setAttribute("class", "icon-TrashBin");

        audio.append(source);
        li.append(audio, iDrag, title, iRemove)
        activeList.appendChild(li);
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

    musicPausing();
    resetSongPlayTime(currentSongNumber);
    musicPlaying(musicNumber);
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