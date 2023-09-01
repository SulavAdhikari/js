// Function to count distinct elements in a 2D array
function countDistinctElements(arrays) {
    const distinctElementsCount = {};

    for (let i = 0; i < arrays.length; i++) {
        const innerArray = arrays[i];

        for (let j = 0; j < innerArray.length; j++) {
            const element = innerArray[j];

            if (distinctElementsCount.hasOwnProperty(element)) {
                distinctElementsCount[element]++;
            } else {
                distinctElementsCount[element] = 1;
            }
        }
    }

    return distinctElementsCount;
}

// Test cases
const arrayOfArrays1 = [
    ['apple', 'banana', 'cherry'],
    ['banana', 'date', 'fig'],
    ['apple', 'cherry', 'date', 'elderberry']
];

const arrayOfArrays2 = [
    ['apple', 'banana', 'cherry'],
    ['banana', 'date', 'cherry'],
    ['apple', 'cherry', 'date', 'elderberry']
];

console.log("\nTest Case 1:");
const result1 = countDistinctElements(arrayOfArrays1);
console.log(result1);

console.log("\nTest Case 2:");
const result2 = countDistinctElements(arrayOfArrays2);
console.log(result2);
