// Faire la validation du formulaire en javascript

// Afficher les champs en erreur en rouge. et afficher un message en rouge
// en bas du formulaire pour afficher les erreur de manière précise.

let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', e => {
    e.preventDefault();
    // Récupérer tous les champs du formulaire
    let formElements = myForm.elements;

// Créer un objet pour stocker les valeurs des champs
    let formData = {};

// Parcourir tous les champs du formulaire
    for (let i = 0; i < formElements.length; i++) {
        let field = formElements[i];

        // Vérifier si le champ a un nom et n'est pas un bouton de soumission
        if (field.name && field.type !== 'submit') {
            // Stocker la valeur du champ dans l'objet formData
            formData[field.name] = field.value;
        }
    }

// Maintenant, formData contient toutes les valeurs des champs du formulaire
    validateForm(formData);
})

function validateRadio() {
    // Récupérer les radio boutons par leur nom
    let genreButtons = document.getElementsByName('genre');

    // Parcourir tous les boutons radio et trouver celui qui est coché
    let valeurSelectionnee = null;
    for (let i = 0; i < genreButtons.length; i++) {
        if (genreButtons[i].checked) {
            valeurSelectionnee = genreButtons[i].value;
            break; // Sortir de la boucle une fois qu'on a trouvé le bouton coché
        }
    }

    return {
        value: valeurSelectionnee,
        error : function() {
            if(!valeurSelectionnee) {
                return "Vous devez séléctionnez un choix de genre";
            } else {
                return false;
            }
        }
    }
}

function validateCheckBox() {
    // Récupérer les cases à cocher par leur nom
    let informatiqueCheckBox = document.getElementsByName('informatique');
    let sportCheckBox = document.getElementsByName('sport');
    let lectureCheckBox = document.getElementsByName('lecture');
    let cinemaCheckBox = document.getElementsByName('cinema');
    let gameCheckBox = document.getElementsByName('game');

    // Vérifier si au moins une case à cocher est cochée
    let isValidInformatiqueCheckBox = false;
    for (let i = 0; i < informatiqueCheckBox.length; i++) {
        if (informatiqueCheckBox[i].checked) {
            isValidInformatiqueCheckBox = true;
            break;
        }
    }

    let IsValidSportCheckBox = false;
    for (let i = 0; i < sportCheckBox.length; i++) {
        if (sportCheckBox[i].checked) {
            IsValidSportCheckBox = true;
            break;
        }
    }

    let IsValidLectureCheckBox = false;
    for (let i = 0; i < lectureCheckBox.length; i++) {
        if (lectureCheckBox[i].checked) {
            IsValidLectureCheckBox = true;
            break;
        }
    }

    let IsValidCinemaCheckBox = false;
    for (let i = 0; i < cinemaCheckBox.length; i++) {
        if (cinemaCheckBox[i].checked) {
            IsValidCinemaCheckBox = true;
            break;
        }
    }

    let IsValidGameCheckBox = false;
    for (let i = 0; i < gameCheckBox.length; i++) {
        if (gameCheckBox[i].checked) {
            IsValidGameCheckBox = true;
            break;
        }
    }

    return {
        game: IsValidGameCheckBox,
        cinema: IsValidCinemaCheckBox,
        lecture: IsValidLectureCheckBox,
        sport: IsValidSportCheckBox,
        informatique: isValidInformatiqueCheckBox,
        error: function() {
            if(!this.game && !this.cinema && !this.lecture && !this.sport && !this.informatique) {
                return "Vous devez séléctionnez aux moins un hobby";
            } else {
                return false;
            }
        }
    }
}

function validateField() {
    let nameInput = document.getElementsByName('name');
    let emailInput = document.getElementsByName('email');
    let telInput = document.getElementsByName('tel');
    let websiteInput = document.getElementsByName('website');
    let birthdayInput = document.getElementsByName('birthday');

    let nameIsValid = false;
    let emailIsValid = false;
    let telIsValid = false;
    let websiteIsValid = false;
    let birthdayIsValid = false;

    let nameValue = "";
    let emailValue = "";
    let telValue = "";
    let websiteValue = "";
    let birthdayValue = "";

    let nameError = "";
    let emailError = "";
    let telError = "";
    let websiteError = "";
    let birthdayError = "";

    for(let i = 0; i < nameInput.length; i++) {
        nameValue = nameInput[i].value;
        nameIsValid = validateName(nameValue);
        nameError = validateName(nameValue) ? false : "Votre nom est invalide il doit contenir au minimum 3 caractères.";
    }

    for(let i = 0; i < emailInput.length; i++) {
        emailValue = emailInput[i].value;
        emailIsValid = validateEmail(emailValue);
        emailError = validateEmail(emailValue) ? false : "Votre adresse email est invalide.";
    }

    for(let i = 0; i < telInput.length; i++) {
        telValue = telInput[i].value;
        telIsValid = validatePhoneNumber(telValue);
        telError = validatePhoneNumber(telValue) ? false : "Votre numéro de téléphone est invalide il doit contenir 10 chiffres.";
    }

    for(let i = 0; i < nameInput.length; i++) {
        websiteValue = websiteInput[i].value;
        websiteIsValid = validateURL(websiteValue);
        websiteError = validateURL(websiteValue) ? false : "L'url de votre site web est invalide il doit contenir https://nom-de-votre-site-web.fr.";
    }

    for(let i = 0; i < nameInput.length; i++) {
        birthdayValue = birthdayInput[i].value;
        birthdayIsValid = validateDateOfBirth(birthdayValue);
        birthdayError = validateDateOfBirth(birthdayValue) ? false : "Votre date de naissance est invalide car elle doit être inférieur à la date actuel.";
    }

    return {
        name: {
            valid: nameIsValid,
            value: nameValue,
            error: nameError
        },
        email: {
            valid: emailIsValid,
            value: emailValue,
            error: emailError
        },
        tel: {
            valid: telIsValid,
            value: telValue,
            error: telError
        },
        website: {
            valid: websiteIsValid,
            value: websiteValue,
            error: websiteError
        },
        birthday: {
            valid: birthdayIsValid,
            value: birthdayValue,
            error: birthdayError
        }
    }
}

function validateForm(data) {
    if(typeof data === 'object') {
        let checkBoxFormData = validateCheckBox();
        let radioFormData = validateRadio();
        let fieldFormData = validateField();

        // Gestion des erreur des checkbox
        if(checkBoxFormData.error()){
            let checkBoxDisplayErrorElement = document.getElementById('error-message-checkbox');
            checkBoxDisplayErrorElement.innerText = checkBoxFormData.error();

            // Supprimer le message d'erreur au bout de 10 secondes
            setTimeout(() => {
                checkBoxDisplayErrorElement.innerHTML = "";
            }, 10000); // 10 secondes.
        }

        // gestion des erreur des radio
        if(radioFormData.error()) {
            let radioBoxDisplayErrorElement = document.getElementById('error-message-radio');
            radioBoxDisplayErrorElement.innerHTML = radioFormData.error();

            // Supprimer le message d'erreur au bout de 10 secondes
            setTimeout(() => {
                radioBoxDisplayErrorElement.innerHTML = "";
            }, 10000); // 10 secondes.
        }

        let fieldDisplayErrorElement = document.getElementById('error-message-field');
        for(let item in fieldFormData) {
            if (fieldFormData[item].error) {
                fieldDisplayErrorElement.innerHTML += `${fieldFormData[item].error} <br>`;
            }
        }

        setTimeout(() => {
            fieldDisplayErrorElement.innerHTML = "";
        }, 10000) // 10 secondes
    } else {
        alert("Une erreur est survenue lors de l'envoie de votre formulaire, veuillez réessayer");
    }
}

function validateEmail(email) {
    // Expression régulière pour valider une adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Teste l'adresse e-mail par rapport à l'expression régulière
    return emailRegex.test(email);
}

function validateDateOfBirth(dateString) {
    // Vérifier le format de la date (AAAA-MM-JJ)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
        return false;
    }

    // Créer un objet Date à partir de la chaîne de date
    const birthDate = new Date(dateString);

    // Vérifier si la date est valide
    if (isNaN(birthDate.getTime())) {
        return false;
    }

    // Vérifier si la date de naissance est antérieure à la date actuelle
    const currentDate = new Date();
    return birthDate < currentDate;
}

function validateURL(url) {
    // Expression régulière pour valider une URL simple
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // Teste l'URL par rapport à l'expression régulière
    return urlRegex.test(url);
}

function validatePhoneNumber(phoneNumber) {
    // Expression régulière pour valider un numéro de téléphone à 10 chiffres
    const phoneRegex = /^\d{10}$/;

    // Teste le numéro de téléphone par rapport à l'expression régulière
    return phoneRegex.test(phoneNumber);
}

function validateName(name) {
    return name.length > 3;
}