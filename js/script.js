$(function() {

	$(window).scroll(function() {
		/************************
		 * Paralax image effect *
		 ************************/
		var FACTOR = 0.55;
		var $heroImage = $('.jumbotron-image');

		/* Calculate percentComplete, which goes from 0 to 1 */
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistanceToScroll = $heroImage.height();
		var percentComplete = Math.min(distanceScrolled / totalDistanceToScroll, 1);

		/* Use percentComplete to determine how much we translate */
		var translateY = (percentComplete * 100 * FACTOR);

		/* Apply the transform */
		$heroImage.css({'transform': 'translateY(' + translateY + '%)'});
		$('.vignette').css({'transform': 'translateY(' + translateY + '%)'});
	});
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		$('html,body').animate({scrollTop: target.offset().top}, 600);
	});
});