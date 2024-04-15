
var playButton = document.getElementById("playbtn");
var pauseButton = document.getElementById("pausebtn");
var shuffleButton = document.getElementById("shufflebtn");
var repeatButton = document.getElementById("repeatbtn");
var volumeOn = document.getElementById("volumeon");
var volumeOff = document.getElementById("volumeoff");


function initializePlayer() {
    pauseButton.style.display = "none";
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
    volumeOff.style.display = "none"

    // addDemoList();
}

function addDemoList() {
    var list = document.getElementById("musicList");
    for(let i = 1;i<=20;i++) {
        var entry = document.createElement('li');
        var text = "demo element: " + i;
        entry.appendChild(document.createTextNode(text));
        list.appendChild(entry);
    }
}

/*-----------------------------------------------------------------------------------------------------------*/

var _el;

function dragOver(e) {
  if (isBefore(_el, e.target))
    e.target.parentNode.insertBefore(_el, e.target);
  else
    e.target.parentNode.insertBefore(_el, e.target.nextSibling);
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null); // Thanks to bqlou for their comment.
  _el = e.target;
}

function isBefore(el1, el2) {
  if (el2.parentNode === el1.parentNode)
    for (var cur = el1.previousSibling; cur && cur.nodeType !== 9; cur = cur.previousSibling)
      if (cur === el2)
        return true;
  return false;
}

/*-----------------------------------------------------------------------------------------------------------*/

function removeAll() {
    // TODO remove all displayed elements in list?

    // set to empty FileList instead null value
    document.getElementById("upload").files = new DataTransfer().files;

    document.getElementById("selectorOverview").style.visibility = "visible";
    document.getElementById("selectorOverview").style.height = "100%";
    document.getElementById("listOverview").style.borderColor = 'transparent';
    document.getElementById("clearOverview").style.visibility = "hidden";
}

// TODO 
// remove single songs
// needs to be assigned dynamically to created elements
function removeSingle(i) {
    var files = Object.entries(document.getElementById("upload").files);
    Object.entries(files.splice(i-1, 1));
}

function selectMusic() {
    // logic for music selecting

    var music = document.getElementById("upload").files;
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
    }
}

function createMusicElement() {
    var element = document.createElement("li");
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
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
}

function musicRepeating() {
    repeatButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--repeat-color');
    shuffleButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--btn-color');
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