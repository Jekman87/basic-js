const [winter, spring, summer, autumn] = ['winter', 'spring', 'summer', 'autumn'];

module.exports = function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (Object.prototype.hasOwnProperty.call(date, 'getMonth')) throw Error;
  let monthNum, month;

  try {
    monthNum = date.getMonth();
  } catch (error) {
    throw error;
  }

  if (monthNum >= 2 && monthNum <= 4) {
    month = spring;
  } else if (monthNum >= 5 && monthNum <= 7) {
    month = summer;
  } else if (monthNum >= 8 && monthNum <= 10) {
    month = autumn;
  } else {
    month = winter;
  }

  return month;
};
