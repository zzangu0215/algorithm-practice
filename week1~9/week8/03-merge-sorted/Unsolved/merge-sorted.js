// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = (arr1, arr2) => {
  const sortedArr = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      sortedArr.push(arr1[idx1]);
      idx1++;
    } else {
      sortedArr.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    sortedArr.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    sortedArr.push(arr2[idx2]);
    idx2++;
  }

  return sortedArr;
};
