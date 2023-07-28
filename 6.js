//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
  }
  
  function postfixToPrefix(postfixExp) {
    const stack = [];
  
    for (let char of postfixExp) {
      if (isOperator(char)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(char + operand1 + operand2);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpression = "35+";
  const prefixExpression = postfixToPrefix(postfixExpression);
  
  console.log("Prefix expression:", prefixExpression);
  