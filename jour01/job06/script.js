// Define the fizzbuzz function
function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Call the fizzbuzz function to display the numbers with the FizzBuzz rules
fizzbuzz();