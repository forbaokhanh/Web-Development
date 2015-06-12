<?php

// Connect to MySQL
$con = mysql_connect("localhost:8889", "root", "", "jsshoutbox");

if (mysqli_connect_errno()) {
	echo "Failed to connect: ". mysqli_connect_error();
}