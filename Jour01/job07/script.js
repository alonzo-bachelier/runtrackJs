function estJourTravaille(date) {
    const joursFeries = [
        "2024-01-01", "2024-05-09", "2024-11-01", "2024-04-01",
        "2024-05-20", "2024-11-11", "2024-05-01", "2024-07-14",
        "2024-12-25", "2024-05-08", "2024-08-15",
    ];

    const dateFormatted = date.toISOString().split("T")[0];

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = new Intl.DateTimeFormat('fr-FR', options).format(date);

    const jourDeLaSemaine = date.getDay();

    if (joursFeries.includes(dateFormatted)) {
        return `Le ${dateString} est un jour férié.`;
    } else if (jourDeLaSemaine === 0 || jourDeLaSemaine === 6) {
        return `Le ${dateString} est le week-end.`;
    } else {
        return `Le ${dateString} est un jour travaillé.`;
    }
}

console.log(estJourTravaille(new Date("2024-01-01")));
console.log(estJourTravaille(new Date("2024-06-09")));
console.log(estJourTravaille(new Date("2024-06-25")));
console.log(estJourTravaille(new Date("2024-04-07")));
