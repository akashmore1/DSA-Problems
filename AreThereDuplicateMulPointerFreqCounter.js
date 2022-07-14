"use strict";

// Frequency counter patterns
function areThereDuplicates(...args) {
  const argsObj = {};

  for (let arg of args) {
    if (argsObj.hasOwnProperty(arg)) {
      argsObj[arg] = argsObj[arg] + 1;
    } else {
      argsObj[arg] = 1;
    }
  }

  for (let key in argsObj) {
    if (argsObj[key] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(4, 2, 1, 3, 4, 6));

// multiple pointers patterns
function areThereDuplicatesMultiplePointer(...args) {
  //   const a = args.sort((a, b) => {
  //     return a > b;
  //   });
  //   console.log(a);
  // lern about sort.. afterwards now consider array is sorted.

  let start = 0;
  let end = 1;

  for (let i = 0; i < args.length - 1; i++) {
    if (args[start] === args[end]) {
      return true;
    }
    start++;
    end++;
  }

  return false;
}

console.log(areThereDuplicatesMultiplePointer(1, 2, 3, 4, 4, 6, 7, 8, 9));
