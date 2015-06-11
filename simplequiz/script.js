function submitAnswers() {
	var total = 5;
	var score = 0;

	// Get User Input
	var q1 = document.forms['quizForm']["q1"].value;
	var q2 = document.forms['quizForm']["q2"].value;
	var q3 = document.forms['quizForm']["q3"].value;
	var q4 = document.forms['quizForm']["q4"].value;
	var q5 = document.forms['quizForm']["q5"].value;

	var questions = [q1, q2, q3, q4, q5];

	// Validation
	for (var i = 0; i < questions.length; i++) {
		if (questions[i] == null || questions[i] == '') {
			alert('You missed question ' + (i + 1));
			return false;
		}
	}

	// Set Correct Answers
	var answers = ['b', 'a', 'd', 'b', 'd'];

	// Check Answers
	for (i = 0; i < total; i++) {
		if (questions[i] == answers[i]) {
			score++;
		}
	}

	// Display results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
	alert("You scored " + score + " out of " + total);

	return false;
}