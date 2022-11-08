const ageInDays = (year, month, day) => {
  const today = new Date();
  const birthDay = new Date(year, month - 1, day);
  return Math.floor((today - birthDay) / (1000 * 60 * 60 * 24));
};

// Need to use syntax new Date to get the date
// Month argument in JavaScript is starting from 0 - 11

console.log(ageInDays(1997, 6, 30));
console.log(ageInDays(2022, 11, 7));

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.

// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"

// Alternative logic

// const ageInDays = (day, month, year) => {
//   const birthday = new Date(year, month - 1, day);
//   return Math.round((Date.now() - birthday) / 86400000);
// };
