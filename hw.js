// Task 1: Define the function letterFinder
function letterFinder(word, match) {
    // Task 2: Create a for loop to iterate through each letter in the word
    for (let i = 0; i < word.length; i++) {
        // Task 3: Check if the current letter matches the given letter
        if (word[i] === match) {
            // Task 4: Log the match found
            console.log('Found the', match, 'at', i);
        } else {
            // Task 5: Log if no match is found
            console.log('---No match found at', i);
        }
    }
}

// Task 6: Call the function with "test" and "t"
letterFinder("test", "t");``