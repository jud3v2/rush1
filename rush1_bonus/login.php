<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="login._request.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Login">
    </form>
    <br>
    <a href="register.php">Register</a>
    <?php
    // Vérifier la validation de la session
    if (isset($_SESSION['error'])) {
        ?>
        <!-- Afficher un message de réussite -->
        <div class="alert alert-success">
            <?php echo $_SESSION['error'] ?>
        </div>
        <?php
        // unset la session apres l'affichage du message
        unset($_SESSION['error']);
    }
    ?>
</body>

</html>