# yqni13 music player
$\texttt{\color{teal}{v1.1.3}}$

## Screenshot - loaded

<img src="./assets/readme_img/player_loaded.png.jpg" alt="music player loaded">



### Technology 

<div style="display:flex; align-items:center;">
    <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E44D26?style=flat&logo=html5&logoColor=white">
    <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-2965f1?style=flat&logo=css3&logoColor=white">
    <img alt="Javascript" src="https://img.shields.io/badge/-JavaScript-F0DB4F?style=flat&logo=javascript&logoColor=white">
    <img alt="Google Fonts" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FGoogle-Fonts-Logo.png&f=1&nofb=1&ipt=570b1eadbf10850285149faa90b47496e415ec5daf70efb973248c194025a6a5&ipo=images" style="height:auto; width:5%">Google Fonts
</div>
<br>

## HOW TO:

1. Start this single page application by opening index.html in your browser.
2. Click on "load pre-defined music" and the default music is listed on the left side as single song elements.
3. The first song automatically starts to play. For default the repeat mode will play song after song in order and start with 50% volume.
4. Press pause to stop the music, keep playing or select another song by the skip buttons (previous/next) or via double click on the song element in interest.
5. Use the volume slider to increase/decrease the volume or the progress slider to navigate to your prefered time spot of a song.
6. Currently single song elements can not be removed but only the complete list with the "clear list x" button, which removes the whole list and the "load pre-defined music" field re-appears.

### <a href="https://yqni13.github.io/WEB_music/">!! TRY HERE LIVE !!</a>
<br>

## Functionality

### Modes

1. repeat playlist continues to play in loop ( ${\textsf{\color{yellowgreen}green}}$ button )
<div align="center">
    <img width="100px" src="./assets/readme_img/repeat-mode.jpg">
    <img width="100px" src="./assets/readme_img/shuffle-mode.jpg">
</div>

2. shuffle playlist plays random chosen songs ( ${\textsf{\color{skyblue}blue}}$ button )


### Defaults


As the music player is started, no music is loaded, as the first idea was to take music elements as an input from the user and play them. Therefore, the input field "load pre-defined music" is shown. Currently, the player loads a pre-defined list of songs and thumbnail images by clicking on the input field, referring to content inside path "./assets/demo-music" and "./assets/demo-thumbnail".<br><br>
Default song: first in list<br>
Default volume: 50%<br>
Default progress: 0%<br>
Default mode: ${\textsf{\color{yellowgreen}repeat}}$


### Sliders

<img src="./assets/readme_img/sliders.jpg">
<p>
    The progress bar [left] and volume bar [right] take input by moving the slider button to adjust values [time/volume].
</p>

### Others



Play or Pause button hide/appear depending on actively playing a song. The skip buttons to previous or next song work in both modes (shuffle/repeat). A song from the list can be pre-selected with normal ${\color{gray}onclick}$, which marks the song, but doesn't start it to play. A song is finally selected and start to play by ${\color{pink}dblclick}$ on wanted element.

<div align="center"><img src="./assets/readme_img/list-view.jpg" style="width:50%;"></div><br>
<p>
    After a song is selected and starts to play, the regarding thumbnail will be shown in the detail section. Additionally, the title of the song will rotate endlessly and the current time progress as well as the total duration are shown below.
</p>
<div align="center"><img src="./assets/readme_img/detail-view.jpg" width="50%" ></div>

## Screenshot - cleared

<img src="./assets/readme_img/player_preloaded.png.jpg" alt="music player cleared">

<p>
    Meanwhile the first idea was to enable the user to select music from local storage via audio input in html, this feature was dismissed. Javascript doesn't allow on client side to access user directories. This is only possible from server side to access and would exceed the scope of this side project. Therefore, this music player as well as seen in many other repositories, this music player will use pre-defined music elements.
</p>
<br>

## Updates

### $\textsf{last\ update\ 1.0.0\ >>\ {\color{pink}1.1.3}}$


- $\textsf{\color{orange}Change:}$ Cursor will change to pointer when hovering an icon with functionality to use (exception: active icons, that can not be activated again like shuffle/repeat mode).
- $\textsf{\color{orange}Change:}$ Functionality on icons will be disabled as long as no music is loaded.</dd>
- $\textsf{\color{orange}Change:}$ Clicking on the volume icon will either mute the music or reset to the previous volume.
- $\textsf{\color{red}Bugfix:}$ Volume will stay for every upcoming song the same until manually changed. [Before: Volume was always reset to 50% when new song was loaded.]
- $\textsf{\color{red}Bugfix:}$ Clicking on the volume icon will mute music and slider set to value 0% or back to previous volume. [Before: Slider was not updated when clicking on volume icon.]
- $\textsf{\color{red}Bugfix:}$ Removing whole list of music disables functionality of any icons. [Before: Functionality of icons was not again disabled after removing list of loaded music.]
<br><br>

### Aimed objectives for next $\textsf{\color{green}minor}$ update:
<dl>
    <dd>- error handling for music failing to load</dd>
    <dd>- error handling for thumbnails failing to load</dd>
    <dd>- enable removing single songs from list via trashbin icon</dd>
</dl>
<br>

### Aimed objectives for next $\textsf{\color{cyan}major}$ update:
<dl>
    <dd>- load music from specified path (no more static data)</dd>
    <dd>- load metadata from music element and dispay (thumbnail, autor, genre, ...)</dd>
    <dd>- responsive design</dd>
</dl>
