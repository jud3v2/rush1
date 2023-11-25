<?php
if (!is_file('user.sqlite3')) {
    file_put_contents('user.sqlite3', 'null');
}
$conn = new PDO('sqlite:user.sqlite3');
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$query = "CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sexe TEXT NOT NULL,
    civ TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    tel TEXT NOT NULL,
    website TEXT NOT NULL,
    birth TEXT NOT NULL,
    hobbies TEXT NOT NULL
)";
$conn->exec($query);
?>