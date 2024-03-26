// Define the jourTravaille function
function jourTravaille(dateString) {
    // Create a new Date object from the provided date string
    let date = new Date(dateString);

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = date.getDay();

    // Check if the date is a holiday in 2024
    let holidays2024 = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-30", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];
    let formattedDate = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    
    if (holidays2024.includes(formattedDate)) {
        console.log("The " + formattedDate + " is a holiday.");
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log("No, " + formattedDate + " is a weekend.");
    } else {
        console.log("Yes, " + formattedDate + " is a working day.");
    }
}

// Call the jourTravaille function with the date string "2024-06-24"
// jourTravaille(put the date in the tructure XXXX-YY-AA);