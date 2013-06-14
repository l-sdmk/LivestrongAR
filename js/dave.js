
// onscroll, fade in and out the mission section
var missionFader = {
	state: 0,
	missionFaderInProgress: false,
	ping: function(wt) {
		if (wt > 0) {
			if (this.state == 0 && this.missionFaderInProgress == false) {
				this.missionFaderInProgress = true;
				$('img.mission, .logo-n-scroll, #scroll-button').fadeOut(700 ,function() { missionFader.missionFaderInProgress = false; missionFader.state = 1; });
			}
		}
		else if (wt < 30) {
			if (this.state > 0 && this.missionFaderInProgress == false) {
				this.missionFaderInProgress = true;
				$('img.mission, .logo-n-scroll, #scroll-button').fadeIn(700,function() { missionFader.missionFaderInProgress = false; missionFader.state = 0; });
			}
		}
	}
}
	
	
$(document).ready(function() {
	
	setTimeout(function() { $('#scroll-button').animate({ bottom: '8%', opacity: 0.5},350, function() { $(this).stop().animate({opacity: 1.0}, 900); }); }, 1000);
	setInterval(function() { missionFader.ping($(window).scrollTop());}, 700);

	$(window).scroll(function() {
		missionFader.ping($(window).scrollTop()); // setup mission fader scrolling
	});
	
});