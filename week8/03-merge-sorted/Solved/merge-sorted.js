// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = (arr1, arr2) => {
  const result = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    const num1 = arr1[idx1];
    const num2 = arr2[idx2];

    if (num1 < num2) {
      result.push(num1);
      idx1 += 1;
    } else {
      result.push(num2);
      idx2 += 1;
    }
  }

  while (idx1 < arr1.length) {
    const num1 = arr1[idx1];
    result.push(num1);
    idx1 += 1;
  }

  while (idx2 < arr2.length) {
    const num2 = arr2[idx2];
    result.push(num2);
    idx2 += 1;
  }

  return result;
};
