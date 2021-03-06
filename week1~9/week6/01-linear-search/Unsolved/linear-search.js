// Write code to create a function that accepts an array of numbers and a target
// number. If the target number is present in the array, return its index. If
// the target number is not present, return -1. You may not use the `indexOf`,
// `lastIndexOf` or `includes` methods

const linearSearch = (arr, target) => {
  if (target in arr) {
    for (let i = 0; i < arr.length; i++) {
      if (target === arr[i]) return i;
    }
  } else {
    return -1;
  }
};
