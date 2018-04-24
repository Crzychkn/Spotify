window.onload = function () {

var mainLogo = document.getElementById('mainLogo');
var thoughts = document.getElementById('thoughts');
var bubbles = document.getElementById('bubbles');

var timeLine = new TimelineLite({paused:true});

timeLine.from(mainLogo, 2, {opacity: 0, left:"500px"})
        .from(thoughts, 1, {opacity: 0, top:"200px"})
        .from(bubbles, 1, {opacity: 0, top:"200px"})
        .from(graphs, 1, {opacity: 0, top:"200px"});

timeLine.play();

}
