<?php
session_start();
require_once('conn.php');

if(ISSET($_POST['register'])){
    $sexe = $_POST['sexe'];
    $civ = $_POST['civ'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $website = $_POST['website'];
    $birth = $_POST['birth'];
    $hobbies = $_POST['hobbies'];
    
    $query = "INSERT INTO `users` (sexe, civ, name, email, tel, website, birth, hobbies) VALUES (:sexe, :civ, :name, :email, :tel, :website, :birth, :hobbies)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':sexe', $sexe);
    $stmt->bindParam(':civ', $civ);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':tel', $tel);
    $stmt->bindParam(':website', $website);
    $stmt->bindParam(':birth', $birth);
    $stmt->bindParam(':hobbies', $hobbies);
    

    if($stmt->execute()){
        $_SESSION['success'] = "User registered successfully";
        header("location: my_navigator.php");
    }


}