"use strict";

// Algorithm:
/*
1. compare two ajacent element of array from start.
2. if first element is greater than second then swap them
3. repeat this process until whole array is sorted.
*/

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const bubbleSort = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
};

console.log(bubbleSort([3, 2, 1, 4, 9, -3, 2, 0, 99]));
