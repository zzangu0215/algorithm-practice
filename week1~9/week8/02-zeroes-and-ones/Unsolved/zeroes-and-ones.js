// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

const zeroesAndOnes = function (str) {
  let zeroes = 0;
  let ones = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") zeroes++;
    if (str[i] === "1") ones++;
  }

  if (zeroes === ones) return true;
  else return false;
};
