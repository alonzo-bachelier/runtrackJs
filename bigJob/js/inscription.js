$(document).ready(function () {
    let conditions = {
        prenom: false,
        nom: false,
        email: false,
        mdp: false,
        mdpVerif: false,
    };

    function updateSubmitButtonState() {
        const allConditionsMet = Object.values(conditions).every(Boolean);
        $("#bouton-confirmer button").prop("disabled", !allConditionsMet);
    }

    function toggleErrorMessage(elementId, condition, message) {
        if (!condition) {
            $(elementId).text(message).show();
        } else {
            $(elementId).hide();
        }
    }

    $("#prenom").on("input", function () {
        let valeur = $(this).val().replace(/\d/g, "");
        $(this).val(valeur);
        conditions.prenom = valeur.length >= 3;
        toggleErrorMessage(
            "#prenom-p",
            conditions.prenom,
            "Le prénom doit contenir au moins 3 caractères."
        );
        updateSubmitButtonState();
    });

    $("#nom").on("input", function () {
        let valeur = $(this).val().replace(/\d/g, "");
        $(this).val(valeur);
        conditions.nom = valeur.length >= 3;
        toggleErrorMessage(
            "#nom-p",
            conditions.nom,
            "Le nom doit contenir au moins 3 caractères."
        );
        updateSubmitButtonState();
    });

    $("#mail").on("input", function () {
        conditions.email = $(this).val().includes("@laplateforme.io");
        toggleErrorMessage(
            "#mail-p",
            conditions.email,
            "Seuls les mails '@laplateforme.io' peuvent s'inscrire"
        );
        updateSubmitButtonState();
    });

    $("#mot-de-passe").on("input", function () {
        let motDePasse = $(this).val();
        let conditionsPwd =
            motDePasse.match(/[a-z]/) &&
            motDePasse.match(/[A-Z]/) &&
            motDePasse.match(/[0-9]/) &&
            motDePasse.match(/[&\#\_|*\-!?]/) &&
            motDePasse.length >= 8;
        conditions.mdp = !!conditionsPwd;
        toggleErrorMessage(
            "#message-erreur",
            conditions.mdp,
            "Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial."
        );
        conditions.mdpVerif = motDePasse === $("#mdp-verif").val();
        updateSubmitButtonState();
    });

    $("#mdp-verif").on("input", function () {
        conditions.mdpVerif = $(this).val() === $("#mot-de-passe").val();
        if ($(this).val() !== $("#mot-de-passe").val()) {
            $("#label-mdp")
                .text("Mot de passe different !")
                .css("color", "red");
        } else {
            $("#label-mdp")
                .text("Mot de passe identique !")
                .css("color", "green");
        }

        updateSubmitButtonState();
    });

    $("#bouton-confirmer button").click(function (event) {
        event.preventDefault();
        if (!$(this).prop("disabled")) {
            window.location.href = "connexion.html";
        }
    });

    updateSubmitButtonState();
});
