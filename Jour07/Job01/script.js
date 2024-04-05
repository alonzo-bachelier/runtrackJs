$(document).ready(function () {
    $(".sidenav").sidenav();
});
const password = $("#password");
const passwordVerif = $("#password-verif");
const icon = $("#icon");

passwordVerif.on("input", function () {
    if (password.val() === passwordVerif.val()) {
        icon.text("lock_open");
    } else {
        icon.text("lock");
    }
});
