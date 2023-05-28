
<?php

//connection to server
$con = mysql_connect("localhost","nafbti","8118");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}

//select the database
mysql_select_db("db_nafbti", $con);

// The SQL statement that deletes the record
$result = "DELETE FROM Persons where FirstName=('$_POST[firstname]')";
mysql_query($result);

// Close the database connection
mysql_close($con);

?>

