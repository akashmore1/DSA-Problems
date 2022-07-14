"use strict";

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum = tempSum + arr[i];
  }

  maxSum = tempSum;

  for (let i = 1; i < arr.length - num + 1; i++) {
    debugger;
    tempSum = tempSum - arr[i - 1] + arr[i + num - 1];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    console.log(tempSum, maxSum);
  }

  return maxSum;
}

const answer = maxSubarraySum([2, 3], 3);

console.log(answer);
