// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  const left = 0;
  const right = arr.length - 1;
  const half = right / 2;

  for (let i = 0; i < half; i++) {
    const temp = arr[left + i];
    arr[left + i] = arr[right - i];
    arr[right - i] = temp;
  }

  return arr;
};
