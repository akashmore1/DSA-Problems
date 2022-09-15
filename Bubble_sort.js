"use strict";

// Algorithm:
/*
1. compare two ajacent element of array from start.
2. if first element is greater than second then swap them
3. repeat this process until whole array is sorted.
4. For nearly sorted array, to avoid extra swaps we maintain extra variable noSwap: if(true) break loop
*/

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const bubbleSort = (nums) => {
  let noSwap;
  for (let i = nums.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[j], nums[j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return nums;
};

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
