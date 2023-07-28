//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seenNumbers = new Set();
  
    for (let num of arr) {
      const complement = targetSum - num;
      if (seenNumbers.has(complement)) {
        pairs.push([num, complement]);
      }
      seenNumbers.add(num);
    }
  
    return pairs;
  }
  
  const nums = [2, 4, 8, 6, 3, 9, 1];
  const target = 10;
  
  const result = findPairsWithSum(nums, target);
  
  if (result.length > 0) {
    console.log("Pairs found:");
    for (let pair of result) {
      console.log(pair);
    }
  } else {
    console.log("No pairs found for the given target sum.");
  }
  
  