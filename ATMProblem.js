"use strict";

console.log("Hello World!");

const getNumberOfNotes = (moneyNumber) => {
  if (moneyNumber % 100 !== 0) {
    return `Enter a valid number`;
  }

  let numberOf2000 = 0;
  let numberOf500 = 0;
  let numberOf200 = 0;
  let numberOf100 = 0;
  let remainingMoney = moneyNumber;

  if (remainingMoney >= 2000) {
    let notes = remainingMoney / 2000;
    numberOf2000 += Math.floor(notes);
    remainingMoney = remainingMoney % 2000;
  }

  if (remainingMoney >= 500) {
    let notes = remainingMoney / 500;
    numberOf500 += Math.floor(notes);
    remainingMoney = remainingMoney % 500;
  }

  if (remainingMoney >= 200) {
    let notes = remainingMoney / 200;
    numberOf200 += Math.floor(notes);
    remainingMoney = remainingMoney % 200;
  }
  if (remainingMoney >= 100) {
    let notes = remainingMoney / 100;
    numberOf100 += Math.floor(notes);
  }

  return `Number of 2000 is ${numberOf2000}. Number of 500 is ${numberOf500}. Number of 200 is ${numberOf200}. Number of 100 is ${numberOf100}`;
};

console.log(getNumberOfNotes(435400));
