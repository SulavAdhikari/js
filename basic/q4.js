function findAgeDifference(ages) {
    if (ages.length === 0) {
        return "No family members found.";
    }

    let youngest = ages[0];
    let oldest = ages[0];

    for (let i = 1; i < ages.length; i++) {
        if (ages[i] < youngest) {
            youngest = ages[i];
        }
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }

    const ageDifference = oldest - youngest;

    return {
        youngestAge: youngest,
        oldestAge: oldest,
        ageDifference: ageDifference
    };
}

// Testing the function

// Case 1
console.log("\nCase 1:\nFamily ages are [30, 25, 40, 18, 50]");
result = findAgeDifference([30, 25, 40, 18, 50]);
console.log("Youngest Age:", result.youngestAge);
console.log("Oldest Age:", result.oldestAge);
console.log("Age Difference:", result.ageDifference);
console.log("Pass:", result.youngestAge === 18 && result.oldestAge === 50 && result.ageDifference === 32);

// Case 2
console.log("\nCase 2:\nFamily ages are [20, 22, 20, 21, 22]");
result = findAgeDifference([20, 22, 20, 21, 22]);
console.log("Youngest Age:", result.youngestAge);
console.log("Oldest Age:", result.oldestAge);
console.log("Age Difference:", result.ageDifference);
console.log("Pass:", result.youngestAge === 20 && result.oldestAge === 22 && result.ageDifference === 2);

// Case 3
console.log("\nCase 3:\nFamily ages are []");
result = findAgeDifference([]);
console.log("Result:", result);
console.log("Pass:", result === "No family members found.");
