"use strict";

// Algorithm:
/*
1. compare two ajacent element of array from start.
2. if first element is greater than second then swap them
3. repeat this process until whole array is sorted.
*/

const bubbleSort = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log(bubbleSort([3, 2, 1, 4, 9, -3, 2, 0]));
