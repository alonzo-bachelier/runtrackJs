let nom = $("#nom").val();
let prenom = $("#prenom").val();
let adresse = $("#adresse").val();
let code = $("#code").val();
let mail = $("#mail").val();
let motDePasse = $("#mot-de-passe").val();
let mdpVerif = $("#mdp-verif").val();
let messageErreur = $("#message-erreur");
let nomVerif = $("#nom-verif");
let prenomVerif = $("#prenom-verif");
let adresseVerif = $("#adresse-verif");
let codeVerif = $("#code-verif");
let mdpPara = $("#mdp2-verif");
let mailVerif = $("#mail-verif");
let conditionsRemplies = true;

$(document).ready(function () {
    $("#mail").on("input", function () {
        let mail = $(this).val();
        let mailRegex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $("#mail-verif").text(mailRegex.test(mail) ? "" : "Email invalide !");
    });

    $("#mot-de-passe").on("input", function () {
        let motDePasse = $(this).val();
        let conditions =
            motDePasse.match(/[a-z]/) &&
            motDePasse.match(/[A-Z]/) &&
            motDePasse.match(/[0-9]/) &&
            motDePasse.length >= 8;
        $("#message-erreur").text(
            conditions
                ? ""
                : "Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule et un chiffre."
        );
        verifierCorrespondanceMdp();
    });

    $("#mdp-verif").on("input", function () {
        verifierCorrespondanceMdp();
    });

    function verifierCorrespondanceMdp() {
        let motDePasse = $("#mot-de-passe").val();
        let mdpVerif = $("#mdp-verif").val();
        if (motDePasse !== mdpVerif) {
            $("#mdp2-verif")
                .text("Les mots de passe ne correspondent pas !")
                .css("color", "red");
        } else {
            $("#mdp2-verif")
                .text("Les mots de passe correspondent.")
                .css("color", "green");
        }
    }

    $("#nom").on("input", function () {
        let nom = $(this).val();
        $("#nom-verif").text(nom.length < 3 ? "Nom trop court" : "");
    });

    $("#prenom").on("input", function () {
        let prenom = $(this).val();
        $("#prenom-verif").text(prenom.length < 3 ? "Prénom trop court" : "");
    });

    $("#adresse").on("input", function () {
        let adresse = $(this).val();
        $("#adresse-verif").text(adresse.length < 5 ? "Adresse invalide" : "");
    });

    $("#code").on("input", function () {
        let code = $(this).val();
        $("#code-verif").text(code.length < 3 ? "Code postal invalide" : "");
    });
});
