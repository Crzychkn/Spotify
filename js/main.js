window.onload = function () {

var mainLogo = document.getElementById('mainLogo');
var thoughts = document.getElementById('thoughts');
var bubbles = document.getElementById('bubbles');
var graphs = document.getElementById('graphs');
var events = document.getElementById('events');
var eventsChart = document.getElementById('eventsChart');
var gestures = document.getElementById('gestures');
var gesturesImg = document.getElementById('gesturesImg');
var insights = document.getElementById('insights');

var timeLine = new TimelineLite({paused:true, delay:1});

timeLine.from(mainLogo, 1, {opacity: 0, left:"-200px"})
        .from(thoughts, 1, {opacity: 0, top:"200px"})
        .from(bubbles, 1, {opacity: 0, top:"200px"})
        .from(graphs, 1, {opacity: 0, top:"200px"})
        .from(events, 1, {opacity: 0, bottom:"600px"})
        .from(eventsChart, 1, {opacity: 0, left:"200px"})
        .from(gestures, 1, {opacity: 0, left:"200px"})
        .from(gesturesImg, 1, {opacity: 0, left:"200px"})
        .from(insights, 1, {opacity: 0, right:"-200px"});

timeLine.play();

}
