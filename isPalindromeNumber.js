"use strict";

var isPalindrome = function (x) {
  if (x < 0) return false;
  const num = x;
  let numStr = "";

  while (x) {
    numStr += x % 10;
    x = Math.floor(x / 10);
  }
  console.log(Number(numStr));
  if (num === Number(numStr)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
