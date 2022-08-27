function pad(s) {
  return s < 10 ? "0" + s : s;
}

const find_first_month_sunscription = (day, month, year) => {
  let newMonth, newDay, newYear;
  if (Number(day) >= 1 && Number(day) <= 14) {
    newDay = 1;
  }
  if (Number(month) === 12) {
    newMonth = 1;
    newYear = Number(year) + 1;
  } else {
    newMonth = Number(month) + 1;
    newYear = Number(year);
  }

  return [newDay, newMonth, newYear];
};

const calculate_new_expiry = (startDate, months) => {
  const dateArr = startDate.split("/");
  const day = dateArr[0];
  const month = dateArr[1];
  const year = dateArr[2];

  const first_month_subscription = find_first_month_sunscription(
    day,
    month,
    year
  );

  const newMonth =
    first_month_subscription[1] + months - 1 <= 12
      ? first_month_subscription[1] + months - 1
      : (first_month_subscription[1] + months - 1) % 12;

  const newYear =
    first_month_subscription[1] + months - 1 <= 12
      ? first_month_subscription[2]
      : first_month_subscription[2] + 1;

  const newDay = first_month_subscription[0];

  return `${pad(newDay)}/${pad(newMonth)}/${newYear}`;
};

const calculate_days_in_subscription = (start_date, end_date) => {
  const convertMDY = (date) => {
    let arr = date.split("/");
    return `${pad(arr[1])}/${pad(arr[0])}/${arr[2]}`;
  };
  let s_date = new Date(convertMDY(start_date));
  let e_date = new Date(convertMDY(end_date));

  let difference = e_date.getTime() - s_date.getTime();
  const number_days = Math.ceil(difference / (1000 * 3600 * 24));

  return number_days;
};

const calculate_cost_of_subscription = (month_const, number_of_days) => {
  const one_day_cost = month_const / 30;
  const total_cost = one_day_cost * number_of_days;
  return total_cost;
};

const calculate_subscription = (expiry_date, months_to_buy, monthly_cost) => {
  // 1. Find new expiry date
  const new_expiry = calculate_new_expiry(expiry_date, months_to_buy);

  // 2. Find total number of days in subscription
  const number_of_days = calculate_days_in_subscription(
    expiry_date,
    new_expiry
  );

  // 3.Find total cost for all days in subscription
  const cost_of_subscription = calculate_cost_of_subscription(
    monthly_cost,
    number_of_days
  );

  return `${new_expiry}, ${cost_of_subscription}`;
};

console.log(calculate_subscription("04/11/2022", 4, 1000));
