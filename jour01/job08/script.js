// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to sum two prime numbers or return false if any of them is not prime
function sumPrimeNumbers(num1, num2) {
    if (isPrime(num1) && isPrime(num2)) {
        return num1 + num2;
    } else {
        return false;
    }
}

// Example usage:
//console.log(sumPrimeNumbers(x, y)); sendo que x deve ser um numero e y outro