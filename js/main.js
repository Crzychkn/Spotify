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
        .from(created, 1, {autoAlpha: 0, opacity: 0, y:-20}, '-=0.1')
        .to(logo, 3, {autoAlpha: 0, opacity: 0})
        .to(touching, 2, {autoAlpha: 0, opacity: 0}, '-=1')
        .to(created, 1, {autoAlpha: 0, opacity: 0}, '-=0.1')
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
var timeLine4 = new TimelineLite();
var timeLine5 = new TimelineLite();
var timeLine6 = new TimelineLite();
var timeLine7 = new TimelineLite();
var timeLine8 = new TimelineLite();
var timeLine9 = new TimelineLite();
var timeLine10 = new TimelineLite();
var timeLine11 = new TimelineLite();
var timeLine12 = new TimelineLite();
var timeLine13 = new TimelineLite();

timeLine2.from(introSection, 1, {autoAlpha: 0, opacity: 0})
         .from(introText, 1, {autoAlpha: 0, opacity: 0});

timeLine3.from(gestureIntro, 1, {autoAlpha: 0, opacity: 0})
         .from(gestureIntroText, 1, {autoAlpha: 0, opacity: 0});

timeLine4.from(gestureProcess, 1, {autoAlpha: 0, opacity: 0})
         .from(gestureProcessText, 1, {autoAlpha: 0, opacity: 0});

timeLine5.from(studyGoals, 1, {autoAlpha: 0, opacity: 0})
         .from(studyGoalsText, 1, {autoAlpha: 0, opacity: 0});

timeLine6.from(conceptModel, 1, {autoAlpha: 0, opacity: 0})
         .from(conceptModelText, 1, {autoAlpha: 0, opacity: 0})
         .from(conceptModelWhiteboard, 1, {autoAlpha: 0, opacity: 0, y:50});

timeLine7.from(conceptModel2, 1, {autoAlpha: 0, opacity: 0})
         .from(conceptModelText2, 1, {autoAlpha: 0, opacity: 0})
         .from(conceptModelVector, 1, {autoAlpha: 0, opacity: 0, y:50});

timeLine8.from(gestureCatalog, 1, {autoAlpha: 0, opacity: 0})
         .from(gestureCatalogText, 1, {autoAlpha: 0, opacity: 0})
			.from(gestureCatalogImg, 1, {autoAlpha: 0, opacity: 0, x:-20})
			.from(gestureCatalogJpg, 1, {autoAlpha: 0, opacity: 0, x:20})
			.from(gestureCatalogImg2, 1, {autoAlpha: 0, opacity: 0, x:-20});

timeLine9.from(persona, 1, {autoAlpha: 0, opacity: 0})
         .from(personaText, 1, {autoAlpha: 0, opacity: 0})
			.from(personaImg1, 1, {autoAlpha: 0, opacity: 0, x:-20})
			.from(personaImg2, 1, {autoAlpha: 0, opacity: 0, x:20});

timeLine10.from(listenerTesting, 1, {autoAlpha: 0, opacity: 0})
          .from(listenerTestingText, 1, {autoAlpha: 0, opacity: 0})
          .from(paidFree, 1, {autoAlpha: 0, opacity: 0, ease: Power2.easeout, x:-50})
          .from(ossplit, 1, {autoAlpha: 0, opacity: 0, ease: Power2.easeout, x:50}, '-=0.9')
          .from(gesturesDonut, 1, {autoAlpha: 0, opacity: 0, ease: Power2.easeout, x:-50})
          .from(playlistUse, 1, {autoAlpha: 0, opacity: 0, ease: Power2.easeout, x:50}, '-=0.9');

timeLine11.from(journeyMapSketch, 1, {autoAlpha: 0, opacity: 0})
          .from(journeyMapText, 1, {autoAlpha: 0, opacity: 0})
			 .from(journeySketch, 1, {autoAlpha: 0, opacity: 0, x:-20})
			 .from(journeyMap, 1, {autoAlpha: 0, opacity: 0, x:20});

timeLine12.from(conclusion, 1, {autoAlpha: 0, opacity: 0})
          .from(conclusionText, 1, {autoAlpha: 0, opacity: 0});

timeLine13.from(end, 1, {autoAlpha: 0, opacity: 0})
          .from(endLogo, 1, {autoAlpha: 0, opacity: 0});


// Controller
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
     triggerElement: '#introSection', // starting scene, when reaching this element
       duration: 200 // pin the element for a total of 400px
})
.setTween(timeLine2)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
   triggerElement: '#gestureIntro',
   duration: 200
})
.setTween(timeLine3)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
   triggerElement: '#gestureProcess',
   duration: 200
})
.setTween(timeLine4)
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
   triggerElement: '#studyGoals',
   duration: 200
})
.setTween(timeLine5)
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
   triggerElement: '#conceptModel',
   duration: 200
})
.setTween(timeLine6)
.addTo(controller);

var scene7 = new ScrollMagic.Scene({
   triggerElement: '#conceptModel2',
   duration: 200
})
.setTween(timeLine7)
.addTo(controller);

var scene8 = new ScrollMagic.Scene({
   triggerElement: '#gestureCatalog',
   duration: 500
})
.setTween(timeLine8)
.addTo(controller);

var scene9 = new ScrollMagic.Scene({
   triggerElement: '#persona',
   duration: 800
})
.setTween(timeLine9)
.addTo(controller);

var scene10 = new ScrollMagic.Scene({
   triggerElement: '#listenerTesting',
   duration: 200
})
.setTween(timeLine10)
.addTo(controller);

var scene11 = new ScrollMagic.Scene({
   triggerElement: '#journeyMapSketch',
   duration: 500
})
.setTween(timeLine11)
.addTo(controller);

var scene12 = new ScrollMagic.Scene({
   triggerElement: '#conclusion',
   duration: 200
})
.setTween(timeLine12)
.addTo(controller);

var scene13 = new ScrollMagic.Scene({
   triggerElement: '#end',
   duration: 200
})
.setTween(timeLine13)
.addTo(controller);



}
