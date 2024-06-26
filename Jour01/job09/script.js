function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'");
        return numbers;
    }
}

let arr = [44, 33, 11, 55, 66, 99, 88, 22, 77]; 
console.log("Tableau non trié:"); 
console.table(arr);
console.log("Tri ascendant:"); 
console.table(tri(arr.slice(), "asc")); 
console.log("Tri descendant:");
console.table(tri(arr.slice(), "desc"));
