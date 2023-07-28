//Q4. Write a program to print the first non-repeated character from a string?



function findFirstNonRepeatedCharacter(str) {
    const charFrequency = {};
  
    // Count the frequency of each character
    for (let char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Find the first non-repeated character
    for (let char of str) {
      if (charFrequency[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character found
    return null;
  }
  
  // Example usage:
  const inputString = "aabbcdeeffg";
  const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log("The first non-repeated character is:", firstNonRepeatedChar);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  