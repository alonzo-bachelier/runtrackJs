let c = [38, 40, 37, 39, 65, 76, 79, 78, 90, 79];// HAUT BAS GAUCHE DROIT A L O N Z O
let n = 0;

$(document).keydown(function (e) {
    if (e.keyCode === c[n++]) {
        if (n === c.length) {
            document.body.style.backgroundColor = "blue";
            window.open("https://laplateforme.io/", "_blank", "width=600,height=300");
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});