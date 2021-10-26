// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const permutationSubstring = function (str, sub) {
  const strArr = str.split("").sort();
  const subArr = sub.split("").sort();

  let count = 0;
  for (let i = 0; i < subArr.length; i++) {
    if (strArr.join("").includes(subArr[i])) count++;
  }

  if (count === subArr.length) return true;
  else return false;
};
