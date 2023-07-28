//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disc 1 from ${source} to ${destination}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disc ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
  }
  
  // Example usage:
  const numberOfDiscs = 3;
  towerOfHanoi(numberOfDiscs, 'A', 'B', 'C');
  
  