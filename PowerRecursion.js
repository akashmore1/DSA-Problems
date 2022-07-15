"use strict";

// Solve power of a number recursively.

// 2**4 = 2 * 2 ** 3  => recursive

const findPower = (number, exponent) => {
  if (exponent === 1) {
    return number;
  }

  return number * findPower(number, exponent - 1);
};

console.log(findPower(4, 3));
