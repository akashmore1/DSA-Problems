"use strict";
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
//
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// The following is brute-force approach.We are checking every combination possible.
// The time complexity of following function is n^2.

var twoSum = function (nums, target) {
  // In this we are taking nums[i] element as pivot and then adding it to all furthur elements to check it matches target.
  // We are using loop inside loop because, this pivot will move furthur with every iteration.
  let iterator = 0;
  let arrLength = nums.length;

  for (let i = iterator; i < arrLength; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return `No two elements in ${nums} have sum equal to ${target}`;
};

console.log(twoSum([2, 5, 5, 11], 16));
