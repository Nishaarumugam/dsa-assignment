//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  function prefixToInfix(prefixExpr) {
    const stack = [];
  
    for (let i = prefixExpr.length - 1; i >= 0; i--) {
      const char = prefixExpr[i];
  
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpr = `(${operand1} ${char} ${operand2})`;
        stack.push(infixExpr);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  // Test examples
  const prefixExpr1 = '+AB';
  const prefixExpr2 = '*+AB-CD';
  const prefixExpr3 = '+*AB-CD/EF';
  
  console.log(prefixToInfix(prefixExpr1)); // Output: (A + B)
  console.log(prefixToInfix(prefixExpr2)); // Output: ((A + B) * (C - D))
  console.log(prefixToInfix(prefixExpr3)); // Output: ((A * B) + (C - D) / (E / F))
  