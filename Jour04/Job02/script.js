async function jsonKeyValue(json, key) {
    const response = await fetch(json);
    const data = await response.json();

    if (key in data) {
        return data[key];
    } else {
        return "KEY INVALID";
    }
}

(async function () {
    const value = await jsonKeyValue("value.json", "city");
    console.log(value);
})();
