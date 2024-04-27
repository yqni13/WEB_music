# yqni13 music player
version 1.0

## Screenshot - loaded

<img src="./assets/player_loaded.png.jpg" alt="music player loaded">



### Technology 

<div style="display:flex; align-items:center;">
    <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E44D26?style=flat&logo=html5&logoColor=white">
    <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-2965f1?style=flat&logo=css3&logoColor=white">
    <img alt="Javascript" src="https://img.shields.io/badge/-JavaScript-F0DB4F?style=flat&logo=javascript&logoColor=white">
    <img alt="Google Fonts" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FGoogle-Fonts-Logo.png&f=1&nofb=1&ipt=570b1eadbf10850285149faa90b47496e415ec5daf70efb973248c194025a6a5&ipo=images" style="height:auto; width:5%">Google Fonts
</div>
<br>

TRY IT: https://github.com/yqni13/WEB_music/
<br><br>

## Functionality

### Modes

<div style="display:inline;align-items:center;">
    <li>
        <span style="padding-right:22px">repeat (playlist continues to play in loop [green button])</span><img src="./assets/repeat-mode.jpg" style="height:auto;width:15%;vertical-align:middle;padding-bottom:5px">
    </li>
    <li>
        <span style="padding-right:10px">shuffle (playlist plays random chosen songs [blue button])</span><img src="./assets/shuffle-mode.jpg" style="height:auto;width:15%;vertical-align:middle">
    </li>
</div>

### Defaults

<p>
    As the music player is started, no music is loaded, as the first idea was to take music elements as an input from the user and play them. Therefore, the input field "load pre-defined music" is shown. Currently, the player loads a pre-defined list of songs and thumbnail images by clicking on the input field, referring to content inside path "./assets/demo-music" and "./assets/demo-thumbnail".<br><br>
    Default song: first in list<br>
    Default volume: 50%<br>
    Default progress: 0%<br>
    Default mode: <span style="color:#77B300">repeat</span>
</p>

### Sliders

<img src="./assets/sliders.jpg">
<p>
    The progress bar [left] and volume bar [right] take input by moving the slider button to adjust values [time/volume].
</p>

### Others


<p>
    Play or Pause button hide/appear depending on actively playing a song. The skip buttons to previous or next song work in both modes (shuffle/repeat). A song from the list can be pre-selected with normal <span style="border-style:solid;padding:2px;background-color:grey">onclick</span>, which marks the song, but doesn't start it to play. A song is finally selected and start to play by <span style="color:#ff96ab">dblclick</span> on wanted element.
</p>
<div style="text-align:center"><img src="./assets/list-view.jpg" style="width:50%;"></div><br>
<p>
    After a song is selected and starts to play, the regarding thumbnail will be shown in the detail section. Additionally, the title of the song will rotate endlessly and the current time progress as well as the total duration are shown below.
</p>
<div style="text-align:center"><img src="./assets/detail-view.jpg" style="width:50%;"></div>

## Screenshot - cleared

<img src="./assets/player_preloaded.png.jpg" alt="music player cleared">

<p>
    Meanwhile the first idea was to enable the user to select music from local storage via audio input in html, this feature was dismissed. Javascript doesn't allow on client side to access user directories. This is only possible from server side to access and would exceed the scope of this side project. Therefore, this music player as well as seen in many other repositories, this music player will use pre-defined music elements.
</p>

## Updates

### Aimed objectives for next updates within vers1.0:
<p>
    <span>- error handling for music failed to load</span><br>
    <span>- error handling for thumbnails failed to load</span><br>
    <span>- adding author to displayed information</span><br>
    <span>- deactivate tools if no music is loaded</span><br><br>
</p>

### Aimed objectives for next update within vers2.0:
<p>
    <span>- load music from specified path (no more static data)</span><br>
    <span>- load thumbnails from music element</span><br>
</p>