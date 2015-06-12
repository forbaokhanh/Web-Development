// Accordian
var action ="click";
var speed = 500;

$(function() {
	$('li.q').on(action, function() {
		// Question handler
		// Get the next element           Select all other answers
		$(this).next().slideToggle(speed).siblings('li.a').slideUp();
		// Get image for active question
		var img = $(this).children('img');
		// Remove the 'rotate' class for all images excepthe active
		$('img').not(img).removeClass('rotate');
		img.toggleClass('rotate');
	})
})