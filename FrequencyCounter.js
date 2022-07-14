"use strict";

// Write a function called sameFrequency. Given two positive integers, find out if two numbers have same frequency of digits.

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const numObj1 = {};
  const numObj2 = {};

  const numStr1 = String(num1);
  const numStr2 = String(num2);

  if (numStr1.length !== numStr2.length) {
    return false;
  }

  for (let char of numStr1) {
    if (numObj1.hasOwnProperty(char)) {
      numObj1[char] = numObj1[char] + 1;
    } else {
      numObj1[char] = 1;
    }
  }

  for (let char of numStr2) {
    if (numObj2.hasOwnProperty(char)) {
      numObj2[char] = numObj2[char] + 1;
    } else {
      numObj2[char] = 1;
    }
  }

  for (let key in numObj1) {
    if (!numObj2.hasOwnProperty(key)) {
      return false;
    } else if (numObj1[key] !== numObj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(1234567890, 6789012345)); // true
console.log(sameFrequency(123, 133)); // false
