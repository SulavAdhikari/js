function calculateFactorial(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Invalid input. Please provide a non-negative number.";
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// Testing the function

// Case 1
console.log("\nCase 1:\nNumber is 5");
result = calculateFactorial(5);
console.log("Factorial:", result);
console.log("Pass:", result === 120);

// Case 2
console.log("\nCase 2:\nNumber is 0");
result = calculateFactorial(0);
console.log("Factorial:", result);
console.log("Pass:", result === 1);

// Case 3
console.log("\nCase 3:\nNumber is -3");
result = calculateFactorial(-3);
console.log("Result:", result);
console.log("Pass:", result === "Invalid input. Please provide a non-negative number.");
