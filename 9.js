//Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty.');
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty.');
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    reverse() {
      const auxiliaryStack = new Stack();
  
      while (!this.isEmpty()) {
        auxiliaryStack.push(this.pop());
      }
  
      this.items = auxiliaryStack.items;
    }
  }
  
  // Test example
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log('Original stack:', stack.items);
  stack.reverse();
  console.log('Reversed stack:', stack.items);
  