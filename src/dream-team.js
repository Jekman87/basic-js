module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;

  let teamArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      let letter = arr[i].match(/\w/i)[0];

      teamArr.push(letter.toUpperCase());
    }
  }
  
  return teamArr.sort().join('');
};