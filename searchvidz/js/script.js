// Searchbar Handler
// Another way of doing $(document).ready()
$(function() {
	var searchField = $('#query');
	var icon = $('#search-btn');

	// Focus Event Handler
	$(searchField).on('focus', function() {
		$(this).animate({
			width: '100%'
		}, 400);
		$(icon).animate({
			right: '10px'
		}, 400);
	});

	// Blur Event Handler
	$(searchField).on('blur', function() {
		if (searchField.val() == '') {
			$(searchField).animate({
				width:'45%'
			}, 400, function() {});
			$(icon).animate({
				right:'365px'
			}, 400, function() {});
		}
	});

	$('#search-form').submit(function(e) {
		e.preventDefault();
	});
})

function search() {
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyByG-3iqlikIaAd2VoJqtUzLpQiLqovpR4'}, 
			function(data) {
				// These attributes have got to be Youtube specific, right?
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// Log Data
				console.log(data);
				console.log(nextPageToken);
				console.log(prevPageToken);

				$.each(data.items, function(i, item){
					// Get Output (getOutput not yet created)
					var output = getOutput(item);
					console.log(output);

					// Display Results
					$('#results').append(output);
				});

				var buttons = getButtons(prevPageToken, nextPageToken);

				$('#buttons').append(buttons);
		});
}

function nextPage() {
	// In HTML we pass in data-token, but use just 'token'
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type: 'video',
			key: 'AIzaSyByG-3iqlikIaAd2VoJqtUzLpQiLqovpR4'}, 
			function(data) {
				// These attributes have got to be Youtube specific, right?
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// Log Data
				console.log(data);
				console.log(nextPageToken);
				console.log(prevPageToken);

				$.each(data.items, function(i, item){
					// Get Output (getOutput not yet created)
					var output = getOutput(item);
					console.log(output);

					// Display Results
					$('#results').append(output);
				});

				var buttons = getButtons(prevPageToken, nextPageToken);

				$('#buttons').append(buttons);
		});
}

function prevPage() {
	// In HTML we pass in data-token, but use just 'token'
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type: 'video',
			key: 'AIzaSyByG-3iqlikIaAd2VoJqtUzLpQiLqovpR4'}, 
			function(data) {
				// These attributes have got to be Youtube specific, right?
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// Log Data
				console.log(data);
				console.log(nextPageToken);
				console.log(prevPageToken);

				$.each(data.items, function(i, item){
					// Get Output (getOutput not yet created)
					var output = getOutput(item);
					console.log(output);

					// Display Results
					$('#results').append(output);
				});

				var buttons = getButtons(prevPageToken, nextPageToken);

				$('#buttons').append(buttons);
		});
}

// Build Output
function getOutput(item) {
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	// Build String Output
	var output = '<li>' + 
	'<div class="list-left">' + 
	// Closing every string and concatiating a variable
	'<img src="' + thumb + '">' + 
	'</div>' + 
	'<div class="list-right">' + 
	'<h3><a class="fancybox fancybox.iframe" href="https://www.youtube.com/embed/'+ videoId +'">' + title + '</a></h3>' +
	'<small>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>' + 
	'<p>' + description + '</p>' + 
	'</div>' + 
	'</li>' + 
	'<div class="clearfix"></div>' + '';

	return output;
}

// Build Buttons
function getButtons(prev, next) {
	if (!prev) {
		var btnOutput = '<div class="button-container">' +
						// Next Page button
						'<button id="next-button" class="paging-button" data-token="' + next + 
						'" data-query="' + q + '" ' + 
						'onclick=" nextPage(); ">Next Page</button>' + 

						'</div>';
	} else {
		var btnOutput = '<div class="button-container">' +
						// Previous Page button
						'<button id="prev-button" class="paging-button" data-token="' + prev + 
						'" data-query="' + q + '" ' + 
						'" onclick="prevPage();">Prev Page</button>' +
						// Next Page button
						'<button id="next-button" class="paging-button" data-token="' + next + 
						'" data-query="' + q + '" ' + 
						'" onclick="nextPage();">Next Page</button>' +

						'</div>';
	}

	return btnOutput;
}