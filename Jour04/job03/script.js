const select = $("#type");
const resultSection = $("#results-filter");

fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
        const typesSet = new Set();

        data.forEach(pokemon => {
            pokemon.type.forEach(type => {
                typesSet.add(type);
            });
        });

        typesSet.forEach(type => {
            $("<option>", {
                value: type,
                text: type,
            }).appendTo(select);
        });
    })
    .catch(error =>
        console.log("Erreur lors de la récupération des types : ", error)
    );
function showResult(resultContent) {
    resultSection.empty();

    if (resultContent.length === 0) {
        resultSection.text("Aucun résultat trouvé.");
    } else {
        const div = $("<div>");
        resultContent.forEach(pokemon => {
            const paragraph = $("<p>");
            paragraph
                .text(
                    `ID: ${pokemon.id}, nom: ${
                        pokemon.name.french
                    }, type: ${pokemon.type.join(", ")}`
                )
                .appendTo(div);
        });
        resultSection.append(div);
    }
}
$("#filter").click(function () {
    const id = $("#id").val();
    const nom = $("#name").val();
    const type = $("#type").val();

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let resultFilter;
            if (type === "All") {
                resultFilter = data.filter(pokemon => {
                    return (
                        (!id || pokemon.id.toString() === id) &&
                        (!nom ||
                            pokemon.name.french
                                .toLowerCase()
                                .includes(nom.toLowerCase()))
                    );
                });
            } else {
                resultFilter = data.filter(pokemon => {
                    return (
                        (!id || pokemon.id.toString() === id) &&
                        (!nom ||
                            pokemon.name.french
                                .toLowerCase()
                                .includes(nom.toLowerCase())) &&
                        (!type || pokemon.type.includes(type))
                    );
                });
            }

            showResult(resultFilter);
        })
        .catch(error =>
            console.error("Erreur lors de la récupération des données", error)
        );
});
