const compteur = document.getElementById("compteur");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    addOne();
});

let count = 0;

function addOne() {
    count ++;
    compteur.innerHTML = count;
}
