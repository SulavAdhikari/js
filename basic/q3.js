function abbreviateName(name) {
    // Split the input string into an array of words
    const words = name.split(' ');

    // Initialize a variable to store the initials
    let initials = '';

    // Iterate through the words and add the first character of each word to the initials
    for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0).toUpperCase();
    }

    return initials;
}

// Testing the function

// Case 1
console.log("\nCase 1:\nname is 'Sulav Adhikari'");
result = abbreviateName('Sulav Adhikari');
console.log("Abbreviated Name:", result);
console.log("Pass:", result === 'SA');

// Case 2
console.log("\nCase 2:\nname is 'Swikrit Bhatta'");
result = abbreviateName('Swikrit Bhatta');
console.log("Abbreviated Name:", result);
console.log("Pass:", result === 'SB');

// Case 3
console.log("\nCase 3:\nname is 'Sangeer'");
result = abbreviateName('Sangeer');
console.log("Abbreviated Name:", result);
console.log("Pass:", result === 'S');
