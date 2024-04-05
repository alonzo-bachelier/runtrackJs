$(document).ready(function () {
    $("#prenom").on("input", function () {
        Promise.resolve().then(() => {
            let valeurSansChiffres = $(this).val().replace(/\d/g, "");
            $(this).val(valeurSansChiffres);

            if ($("#prenom").val().length < 3) {
                $("#prenom-p").show();
            } else if ($("#prenom").val().length >= 3) {
                $("#prenom-p").hide();
            }
        });
    });

    $("#nom").on("input", function () {
        Promise.resolve().then(() => {
            let valeurSansChiffres = $(this).val().replace(/\d/g, "");
            $(this).val(valeurSansChiffres);

            if ($("#nom").val().length < 3) {
                $("#nom-p").show();
            } else if ($("#nom").val().length >= 3) {
                $("#nom-p").hide();
            }
        });
    });

    $("#mail").on("input", function () {
        Promise.resolve().then(() => {
            if ($("#mail").val().includes("@laplateforme.io")) {
                $("#mail-p").hide();
            } else {
                $("#mail-p").show();
            }
        });
    });
});
