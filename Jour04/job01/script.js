$("#button").click(async function () {
    const response = await fetch("expression.txt");
    const text = await response.text();

    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);

    $("#div1").append(para);
});
