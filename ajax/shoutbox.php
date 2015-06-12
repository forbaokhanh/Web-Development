<?php include 'database.php'; ?>

<?php

	if (isset($_POST['name']) && isset($_POST['shout'])) {
		$name = mysql_real_escape_string($con, $_POST['name']); //htmlspecialcharacters
		$shout = mysql_real_escape_string($con, $_POST['shout']); //htmlspecialcharacters
		$date = mysql_real_escape_string($con, $_POST['date']); //htmlspecialcharacters

		// Set the Timezone
		date_default_timezone_set('America/New_York');
		$date = date('h:i:s a', time());

		$query = "INSERT TABLE shouts (name, shout, date) VALUES ($name, $shout, $date)";

		if (!mysql_query($con, $query)) {
			echo 'Error: ' . mysql_error($son);
		} else {
			echo '<li>' . $name . ': ' . $shout . ' [' . $date .'] </li>';
		}
	}
