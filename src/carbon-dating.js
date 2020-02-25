const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(val) {
  if (typeof val !== 'string') return false;

  let parsedVal = parseFloat(val);

  if (parsedVal > 0 && parsedVal < MODERN_ACTIVITY) {
    let year = Math.log(MODERN_ACTIVITY / parsedVal) / (LN2 / HALF_LIFE_PERIOD);
    
    return Math.ceil(year);
  } 
  return false;
};
