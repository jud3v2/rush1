<?php
session_start();
require_once('conn.php');

if(ISSET($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $query = "SELECT * FROM `users` WHERE `username`=:username AND `password`=:password";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();
    $row = $stmt->fetch();
    
    if($row > 0){
        $_SESSION['user_id'] = $row['user_id'];
        header('location: my_navigator.php');
    }else{
        $_SESSION['error'] = "Invalid username or password";
        header('location: login.php');
    }
}