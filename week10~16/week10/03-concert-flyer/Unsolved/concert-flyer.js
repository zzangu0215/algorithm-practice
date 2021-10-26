// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

const concertFlyer = function (magazine, flyer) {
  const magWordsArr = magazine.split(" ");
  const flyWordsArr = flyer.split(" ");

  let count = 0;

  for (let i = 0; i < flyWordsArr.length; i++) {
    if (magWordsArr.includes(flyWordsArr[i])) count++;
  }

  if (count === flyWordsArr.length) return true;
  else return false;
};
