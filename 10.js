//Q10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      const poppedValue = this.stack.pop();
      if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedValue;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null; // Or any specific value to indicate an empty stack
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Test example
  const stack = new MinStack();
  stack.push(5);
  stack.push(2);
  stack.push(7);
  stack.push(1);
  console.log("Minimum value:", stack.getMin()); // Output: 1
  console.log("Popped value:", stack.pop()); // Output: 1
  console.log("Minimum value:", stack.getMin()); // Output: 2
  