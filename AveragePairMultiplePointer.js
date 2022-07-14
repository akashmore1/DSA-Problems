"use strict";

// Write a function called averagePair. Given a sorted array of integers and a target average, termine if there is pair of values in array where the average of pair equals the target average.
// There may be more than one pair that target value.

const averagePair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) {
    return false;
  }

  while (start < end) {
    if ((arr[start] + arr[end]) / 2 === target) {
      return true;
    } else if ((arr[start] + arr[end]) / 2 < target) {
      start++;
    } else if ((arr[start] + arr[end]) / 2 > target) {
      end--;
    }
  }

  return false;
};

console.log(averagePair([1, 2, 3, 4, 5, 6, 7], 4.4));
