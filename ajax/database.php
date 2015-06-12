<?php

// Connect to MySQL
function connect() {
	// return PDO connection
	try {
		// start at the root and not at Blog\DB
		$conn = new PDO('mysql:host=localhost:8889;dbname=jsshoutbox', 'root', '');
		/* DISPLAYING ERRORS? WHAT DOES THIS TAKE CARE OF??? */
		$conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

		return $conn;
	} catch (PDOException $e) {
		// return false
		echo $e->getMessage();
		return false;
	}
}

function query($query, $bindings, $conn)
{
	$stmt = $conn->prepare($query);
	$stmt->execute($bindings);
	return ($stmt->rowCount() > 0) ? $stmt : false;
}

function get($tableName, $conn, $limit = 10)
{
	try {
		// not using prepared statements here because this is hardcoded, the user does not provide any data for the query
		$result = $conn->query("SELECT * FROM $tableName ORDER BY id DESC LIMIT $limit");
		// instead of simply returning the result of the query which can potentially be emtpy, return the positive result
		if ($result->rowCount() > 0) {
			return $result;
		}
		return false;
	} catch (Exception $e) {
		return false;
	}

}

function insert_new_shout($name, $shout, $date, $conn) {
	return query(
		"INSERT INTO shouts (name, shout, date) VALUES ($name, $shout, $date)",
		array( 'name' => $name, 'shout' => $shout, 'date' => $date),
		$conn);
}