document.body.onload = addElement();

function addElement() {
    let newArticle = document.createElement("article");
    newArticle.setAttribute("id", "article1");

    let newContent = document.createTextNode(
        "L'important n'est pas la chute, mais l'atterrissage."
    );
    newArticle.appendChild(newContent);

    let currentArticle = document.getElementById("article1");
    document.body.insertBefore(newArticle, currentArticle);
}

button.addEventListener("click", () => {
    if (getComputedStyle(article1).display != "none") {
        article1.style.display = "none";
    } else {
        article1.style.display = "block";
    }
});

function showhide() {
    if (getComputedStyle(article1).display != "none") {
        article1.style.display = "none";
    } else {
        article1.style.display = "block";
    }
}
button.onclick = showhide();
