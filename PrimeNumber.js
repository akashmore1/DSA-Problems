"use strict";

// If prime return true else false.
const isPrimeNumber = (number) => {
  if (number === 1) {
    return null;
  }

  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  for (let i = 2; i < (number + 1) / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNumber(97));
