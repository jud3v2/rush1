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
<form action="save_user.php" method="POST">
        <div class="form-radio-block">
            <input type="radio" id="homme" name="homme" value="homme" />
            <label for="homme">Homme</label>

            <input type="radio" id="femme" name="femme" value="femme" />
            <label for="femme">Femme</label>

            <input type="radio" id="autre" name="autre" value="autre" />
            <label for="autre">Autres</label>
        </div>

        <div class="civilite-form-block">
            <label for="civilite">Civilité</label>
            <select name="civilite" id="civilite">
                <option value="monsieur">M.</option>
                <option value="madame">Mme.</option>
            </select>
        </div>

        <div class="name-form-block">
            <label for="name">Nom</label>
            <input type="text" name="name" id="name">
        </div>

        <div class="email-form-block">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>

        <div class="tel-form-block">
            <label for="tel">Téléphone</label>
            <input type="tel" name="tel" id="tel">
        </div>
        
        <div class="website-form-block">
            <label for="website">Site web</label>
            <input type="url" name="website" id="website">
        </div>

        <div class="date-form-block">
            <label for="birthday">Date de naissance</label>
            <input type="date" name="birthday" id="birthday">
        </div>

        <div class="checkbox-form-block">
            <div>
                <input type="checkbox" id="game" name="game" checked />
                <label for="game">Jeux Vidéos</label>
            </div>

            <div>
                <input type="checkbox" id="cinema" name="cinema" />
                <label for="cinema">Cinéma</label>
            </div>

            <div>
                <input type="checkbox" id="lecture" name="lecture" />
                <label for="lecture">Lecture</label>
            </div>

            <div>
                <input type="checkbox" id="sport" name="sport" />
                <label for="sport">Sport</label>
            </div>

            <div>
                <input type="checkbox" id="informatique" name="informatique" />
                <label for="informatique">Informatique</label>
            </div>

            <input type="hidden" name="token"/>

            <div>
                <button type="submit" id="submit-button">
                    Je m'inscrit.
                </button>
            </div>
        </div>
    </form>
    <?php
    // Vérifier la validation de la session
    if (isset($_SESSION['success'])) {
        ?>
        <!-- Afficher un message de réussite -->
        <div class="alert alert-success">
            <?php echo $_SESSION['success'] ?>
        </div>
        <?php
        // unset la session apres l'affichage du message
        unset($_SESSION['success']);
    }
    ?>
</body>

</html>