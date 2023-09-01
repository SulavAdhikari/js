function calculateMeanAndMedian(inpVar) {
    // Filter out non-number elements from the array
    const numbers = inpVar.filter(element => typeof element === 'number');

    // Calculate the mean
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    // Calculate the median
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);
    const median =
        sortedNumbers.length % 2 === 0
            ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
            : sortedNumbers[middle];

    return { mean, median };
}

// Testing the function

// Case 1
console.log("\nCase 1:\narray is [1, 2, 3, 4, 5]");
result = calculateMeanAndMedian([1, 2, 3, 4, 5]);
console.log("Mean:", result.mean);
console.log("Median:", result.median);
console.log("Pass:", result.mean === 3 && result.median === 3);

// Case 2
console.log("\nCase 2:\narray is [10, 20, 30]");
result = calculateMeanAndMedian([10, 20, 30]);
console.log("Mean:", result.mean);
console.log("Median:", result.median);
console.log("Pass:", result.mean === 20 && result.median === 20);

// Case 3
console.log("\nCase 3:\narray is ['a', 'b', 5, 10, 'c', 15]");
result = calculateMeanAndMedian(['a', 'b', 5, 10, 'c', 15]);
console.log("Mean:", result.mean);
console.log("Median:", result.median);
console.log("Pass:", result.mean === 10 && result.median === 10);