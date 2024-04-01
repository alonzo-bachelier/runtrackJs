$(document).ready(function () {
    const border = $("#border");
    const empty = $("#empty");
    const messageElement = $("#message");
    const restart = $("#restart");
    const initialState = border.html();

    $(".connexion").sortable({
        connectWith: ".connexion",
    });

    $("#shuffle").click(function () {
        const images = border.find("img");
        const shuffled = images.sort(() => 0.5 - Math.random());
        border.append(shuffled);
    });

    $("#check").click(function () {
        const currentOrder = $(".connexion img")
            .map(function () {
                return this.id;
            })
            .get()
            .join("");

        if (currentOrder === "arc1arc2arc3arc4arc5arc6") {
            messageElement.text("Vous avez gagné").css("color", "green");
            restart.css("display", "block");
        } else {
            messageElement.text("Vous avez perdu").css("color", "red");
        }
    });

    restart.click(function () {
        border.html(initialState);
        empty.empty();
        restart.hide();
        messageElement.hide();
    });
});
