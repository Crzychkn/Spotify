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

timeLine.from(logo, 2, {autoAlpha: 0, opacity: 0})
        .from(touching, 2, {autoAlpha: 0, opacity: 0}, '-=1')
        .to(logo, 3, {autoAlpha: 0, opacity: 0})
        .to(touching, 2, {autoAlpha: 0, opacity: 0}, '-=1')
        .from(mainLogo, 1, {autoAlpha: 0, opacity: 0, left:"-200px"})
        .from(thoughts, 1, {autoAlpha: 0, opacity: 0, top:"200px"})
        .from(freeBubble1, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.9')
        .from(premiumBubble1, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(freeBubble2, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.8')
        .from(premiumBubble2, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(freeBubble3, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.8')
        .from(premiumBubble3, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(freeBubble4, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.8')
        .from(premiumBubble4, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(freeBubble5, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.8')
        .from(premiumBubble5, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(freeBubble6, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=0.8')
        .from(premiumBubble6, 1, {autoAlpha: 0, opacity: 0, top:"200px"}, '-=1')
        .from(graphs, 1, {autoAlpha: 0, opacity: 0, top:"200px"})
        .from(events, 1, {autoAlpha: 0, opacity: 0, bottom:"600px"})
        .from(createPlaylist, 1, {autoAlpha: 0, opacity: 0, left:"300px"}, '-=0.9')
        .from(addSong, 1, {autoAlpha: 0, opacity: 0, left:"403px"}, '-=0.8')
        .from(rearrangeSong, 1, {autoAlpha: 0, opacity: 0, left:"508px"}, '-=0.8')
        .from(deleteSong, 1, {autoAlpha: 0, opacity: 0, left:"609px"}, '-=0.8')
        .from(renamePlaylist, 1, {autoAlpha: 0, opacity: 0, left:"714px"}, '-=0.8')
        .from(sharePlaylist, 1, {autoAlpha: 0, opacity: 0, left:"817px"}, '-=0.8')
        .from(gestures, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"})
        .from(freeGesture1, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(freeGesture2, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(freeGesture3, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(freeGesture4, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(freeGesture5, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(freeGesture6, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture1, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture2, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture3, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture4, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture5, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(premiumGesture6, 1, {autoAlpha: 0, opacity: 0, bottom:"200px"}, '-=0.9')
        .from(insights, 1, {autoAlpha: 0, opacity: 0, right:"-200px"}, '-=0.3')
        .from(bottomBar, 1, {autoAlpha: 0, opacity: 0}, '-=0.3');

timeLine.play();

//Start scroll magic

var timeLine2 = new TimelineLite();
var timeLine3 = new TimelineLite();

timeLine2.from(introSection, 1, {autoAlpha: 0, opacity: 0})
         .from(introText, 1, {autoAlpha: 0, opacity: 0});

timeLine3.from(gestureIntro, 1, {autoAlpha: 0, opacity: 0})
         .from(gestureIntroText, 1, {autoAlpha: 0, opacity: 0});

// Controller
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
     triggerElement: '#introSection', // starting scene, when reaching this element
       duration: 400 // pin the element for a total of 400px
})
.setTween(timeLine2)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
   triggerElement: '#gestureIntro',
   duration: 400
})
.setTween(timeLine3)
.addTo(controller);


}
