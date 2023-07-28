//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.



function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at left and right positions
      [arr[left], arr[right]] = [arr[right], arr[left]];
  
      // Move the pointers inward
      left++;
      right--;
    }
  }
  
  const nums = [1, 2, 3, 4, 5];
  console.log("Original array:", nums);
  
  reverseArrayInPlace(nums);
  console.log("Reversed array:", nums);
  