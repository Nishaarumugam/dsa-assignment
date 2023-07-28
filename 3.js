//Q3. Write a program to check if two strings are a rotation of each other?

function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenatedStr = str1 + str1;
  
    if (concatenatedStr.includes(str2)) {
      return true;
    }
  
    return false;
  }
  
  // Example usage:
  const string1 = "abcd";
  const string2 = "cdab";
  
  if (areStringsRotations(string1, string2)) {
    console.log("The two strings are rotations of each other.");
  } else {
    console.log("The two strings are not rotations of each other.");
  }
  
  