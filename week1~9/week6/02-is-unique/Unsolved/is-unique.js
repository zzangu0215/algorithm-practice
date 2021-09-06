// Write code to create a function that accepts an array numbers. Return `true`
// is no number appears in the array more than once, else return `false`

const isUnique = (arr) => {
  const numOpject = {};

  for (let i = 0; i < arr.length; i++) {
    if (numOpject[arr[i]] === true) return false;

    numOpject[arr[i]] = true;
  }

  return true;
};
