/*  
You are given an array of integers in which each subsequent value is not less than pervious value.
Write a function that takes this array as an input and returns 
a new array with squares of each number sorted in ascending order
*/

var sortedSquares = function (nums) {
  const solutionArr = new Array(nums.length).fill(0);
  let solutionArrEnd = solutionArr.length - 1;
  let start = 0;
  let end = nums.length - 1;

  const modulusNum = (num) => {
    return num < 0 ? num * -1 : num;
  };

  while (start <= end) {
    let startNum = modulusNum(nums[start]);
    let endNum = modulusNum(nums[end]);
    if (startNum <= endNum) {
      solutionArr[solutionArrEnd] = endNum ** 2;
      solutionArrEnd--;
      end--;
    } else {
      solutionArr[solutionArrEnd] = startNum ** 2;
      solutionArrEnd--;
      start++;
    }
  }
  return solutionArr;
};
