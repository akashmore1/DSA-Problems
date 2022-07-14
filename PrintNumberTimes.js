"use strict";

const printNumberTimes = (num) => {
  let counter = 1;
  debugger;
  for (let i = num; i < 0; i--) {
    console.log(i);
    debugger;
    while (counter <= num) {
      console.log(i);
    }
    counter++;
  }
  return counter;
};

printNumberTimes(4);
console.log("Hello World!");
