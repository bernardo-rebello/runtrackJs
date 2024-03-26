// Definition of the displayDaysWeeks function
function afficherJoursSemaines() {
    // Creating a table containing the days of the week
    let joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Selecting the HTML element where we will display the days of the week
    let joursSemainesDiv = document.getElementById("joursSemaines");

    // "for" loop to display each day of the week
    for (let i = 0; i < joursSemaines.length; i++) {
        // Creating a paragraph element to display each day
        let paragraphe = document.createElement("p");
        // Adding day of week text to paragraph element
        paragraphe.textContent = joursSemaines[i];
        // Added paragraph element to weekday division
        joursSemainesDiv.appendChild(paragraphe);
    }
}

// Calling the function to display the days of the week
afficherJoursSemaines();