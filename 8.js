//Q8.Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(codeSnippet) {
    const stack = [];
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
  
    for (let char of codeSnippet) {
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        const matchingOpenBracket = openBrackets[closeBrackets.indexOf(char)];
        if (stack.pop() !== matchingOpenBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test examples
  const codeSnippet1 = 'function add(a, b) { return a + b; }';
  const codeSnippet2 = 'function multiply(a, b) { return a * b; } [2, 4, 6]';
  const codeSnippet3 = 'const obj = { name: "John", age: 30 ];';
  
  console.log(areBracketsClosed(codeSnippet1)); // Output: true
  console.log(areBracketsClosed(codeSnippet2)); // Output: true
  console.log(areBracketsClosed(codeSnippet3)); // Output: false
  