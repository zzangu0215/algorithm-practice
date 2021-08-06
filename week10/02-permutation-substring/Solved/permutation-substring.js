// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const permutationSubstring = function (str, sub) {
  const charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (var i = 0; i < sub.length; i++) {
    var char = sub[i];
    if (!charMap[char]) {
      return false;
    }
    charMap[char] -= 1;
  }

  return true;
};
