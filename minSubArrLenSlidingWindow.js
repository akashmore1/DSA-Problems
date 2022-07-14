"use strict";

// Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.

function minSubArrayLen(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (sum < num) {
    return 0;
  }

  let i = 0;
  let j = 0;
  let minSubArrayLength = Infinity;
  let tempSum = arr[0];

  while (j < arr.length) {
    if (tempSum < num) {
      j++;
      tempSum = tempSum + arr[j];
    } else if (tempSum >= num) {
      minSubArrayLength = Math.min(minSubArrayLength, j - i + 1);
      tempSum = tempSum - arr[i];
      i++;
    }
  }

  return minSubArrayLength;
}

console.log(minSubArrayLen([1, 2, 3, 2, 1, 1, 4, 2, 3, 3], 7));
