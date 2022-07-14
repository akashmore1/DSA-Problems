"use strict";

const firstDate = "1 jan 2020";
const lastDate = "31 dec 2020";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const dayFirstMonth = Number(firstDate.slice(0, firstDate.indexOf(" ")));
const dayLastMonth = Number(lastDate.slice(0, lastDate.indexOf(" ")));

const firstMonth = (firstDate) => {
  return firstDate.slice(
    firstDate.indexOf(" ") + 1,
    firstDate.lastIndexOf(" ")
  );
};

const lastMonth = (lastDate) => {
  return lastDate.slice(lastDate.indexOf(" ") + 1, lastDate.lastIndexOf(" "));
};

const findNumberOfDaysInMonth = (month) => {
  const i = months.indexOf(month);
  let numberOfDays;

  if (
    i === 0 ||
    i === 2 ||
    i === 4 ||
    i === 6 ||
    i === 7 ||
    i === 9 ||
    i === 11
  ) {
    numberOfDays = 31;
  } else if (i === 1) {
    numberOfDays = 28;
  } else {
    numberOfDays = 30;
  }

  return numberOfDays;
};

const numberOfDaysBetweenMonths = (firstMonth, lastMonth) => {
  const betweenMonths = months.slice(
    months.indexOf(firstMonth) + 1,
    months.indexOf(lastMonth)
  );

  let numberOfDaysBetweenMonths = 0;
  for (let i = 0; i < betweenMonths.length; i++) {
    numberOfDaysBetweenMonths =
      numberOfDaysBetweenMonths + findNumberOfDaysInMonth(betweenMonths[i]);
  }
  return numberOfDaysBetweenMonths;
};

const numberOfDaysLeftInMonth = (firstDate, lastDate) => {
  const daysLeftInFirstMonth =
    findNumberOfDaysInMonth(firstMonth(firstDate)) +
    dayLastMonth -
    dayFirstMonth;

  return daysLeftInFirstMonth;
};

const findNumberOfBetweenDays = (firstDate, lastDate) => {
  let totalDays;
  if (firstMonth(firstDate) === lastMonth(lastDate)) {
    totalDays = dayLastMonth - dayFirstMonth - 1;
  } else {
    totalDays =
      numberOfDaysLeftInMonth(firstDate, lastDate) +
      numberOfDaysBetweenMonths(firstMonth(firstDate), lastMonth(lastDate));
  }
  return totalDays;
};

console.log("total days ", findNumberOfBetweenDays(firstDate, lastDate));
