$(function() {
	// Declare variables
	var totalWidth = 0;
	var positions = new Array();

	$('#slides .slide').each(function(i) {
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();

		// Check width
		if(!$(this).width()) {
			alert("Please add a width to your images!");
			return false;
		}
	});

	// Setting the total width of the div
	$('#slides').width(totalWidth);

	// Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll) {

		// Remove active class and add inactive
		$('li.product').removeClass('active').addClass('inactive');

		// Add active class to parent
		$(this).parent().addClass('active');

		var pos = $(this).parent().prevAll('.product').length;

		$('#slides').stop().animate({marginLeft:-positions[pos] + 'px'}, 450);

		// Prevent Default
		e.preventDefault();

		// Stop Autoscroll
		if(!autoScroll) clearInterval(itvl);
	});

	// Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

	// AutoScroll
	var curr = 1;
	function autoScroll() {
		if (curr === -1) {
			return false;
		}

		$('#menu ul li a').eq(curr%$('#menu ul li a').length).trigger('click', [true]);
		curr++;

	}

	// Duration for autoScroll
	var duration = 5;
	var itvl = setInterval(function() {
		autoScroll();
	}, duration*1000);
});