// Given an array, rotate the array to the right by k steps, where k is non-negative.

// ======================== space O(1) time (n) =========================== //
const reverse = (arr, start, end) => {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

const rotateArr = (nums, k) => {
  k = k % nums.length;
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
  return nums;
};
