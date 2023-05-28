<?php
$con = mysql_connect("localhost","nafbti","8118");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}

/* select db */
mysql_select_db("db_nafbti", $con);

/* insert data using form into tbl persons */
$sql="INSERT INTO Persons(FirstName, LastName, Age)
VALUES ('$_POST[firstname]','$_POST[lastname]','$_POST[age]')";
if (!mysql_query($sql,$con))
{
die('Error: ' . mysql_error());
}
echo "1 record added";
mysql_close($con)
?>