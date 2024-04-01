const textarea = document.getElementById("keylogger");
let isFocused = false;

textarea.addEventListener("focus", function () {
    isFocused = true;
});

textarea.addEventListener("blur", function () {
    isFocused = false;
});

document.addEventListener("keydown", function (event) {
    if (event.key.length === 1 && /[a-z]/i.test(event.key)) {
        event.preventDefault(); 

        if (isFocused) {
            textarea.value += event.key.repeat(2);
        } else {
            textarea.value += event.key;
        }
    }
});
