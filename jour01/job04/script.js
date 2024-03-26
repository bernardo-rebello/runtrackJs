// Define the function : "bisextile" 
function bisextile(année) {
    // Check if the year is divisible by 4
    // and not divisible by 100, except if it is divisible by 400
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true; // Return true if the year is a leap year
    } 
    else {
        return false; // Return false if the year is not a leap year
    }
}