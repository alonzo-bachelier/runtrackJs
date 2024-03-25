function jourTravaille(date) {
    const joursFeries = [
        "2024-01-01",
        "2024-05-09",
        "2024-11-01",
        "2024-04-01",
        "2024-05-20",
        "2024-11-11",
        "2024-05-01",
        "2024-07-14",
        "2024-12-25",
        "2024-05-08",
        "2024-08-15",
    ];

    let dateFormatted = date.toISOString().split("T")[0];

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    let dateString = new Intl.DateTimeFormat("fr-FR", options).format(date);

    if (joursFeries.includes(dateFormatted)) {
        console.log(`Le ${dateString} est un jour férié.`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Le ${dateString} est le week-end.`);
    } else {
        console.log(`Le ${dateString} est un jour travaillé.`);
    }
}

jourTravaille(new Date("2024-01-01"));
jourTravaille(new Date("2024-06-09"));
jourTravaille(new Date("2024-06-25"));
jourTravaille(new Date("2024-04-07"));
