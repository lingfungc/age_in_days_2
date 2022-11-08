const ageInDays = (year, month, day) => {
  const today = Date.now();
  const birthDay = new Date(year, month - 1, day);
  return Math.floor((today - birthDay) / (1000 * 60 * 60 * 24));
};

// Need to use syntax new Date to get the date
// Month argument in JavaScript is starting from 0 - 11

console.log(ageInDays(1997, 6, 30));
console.log(ageInDays(2022, 11, 7));
