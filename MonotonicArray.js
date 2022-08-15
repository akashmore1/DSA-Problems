/*
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/
const findMonotonicArray = (nums) => {
  let index = 0;
  let differenceValue = 0;
  let tempDiff = 0;

  //   Instead of below loop we can directly compare first and last element of array
  while (differenceValue === 0 && index < nums.length - 1) {
    differenceValue = nums[index] - nums[index + 1];
    index++;
  }
  if (differenceValue < 0) {
    for (let i = 0; i < nums.length - 1; i++) {
      tempDiff = nums[i] - nums[i + 1];
      if (tempDiff > 0) {
        return false;
      }
    }
  } else if (differenceValue > 0) {
    for (let i = 0; i < nums.length - 1; i++) {
      tempDiff = nums[i] - nums[i + 1];
      if (tempDiff < 0) {
        return false;
      }
    }
  } else {
    return true;
  }
  return true;
};
