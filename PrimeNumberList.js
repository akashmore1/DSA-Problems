"use strict";

const getPrimeNumberList = (number) => {
  const primeNumberArr = [];

  if (number === 0 || number === 1) {
    return primeNumberArr;
  }

  if (number === 2) {
    primeNumberArr.push(2);
  }

  for (let i = 2; i <= number; i++) {
    // debugger;
    if (i === 2) {
      primeNumberArr.push(i);
    }
    if (i % 2 !== 0) {
      //   debugger;
      for (let j = 2; j <= (i + 1) / 2; j++) {
        // debugger;
        if (i % j === 0) {
          continue;
        }
        if (i % j !== 0) {
          if (!primeNumberArr.includes(i)) {
            debugger;
            if (j === (i + 1) / 2) {
              primeNumberArr.push(i);
            }
          }
        }
      }
    }
  }

  return primeNumberArr;
};

console.log(getPrimeNumberList(20));
