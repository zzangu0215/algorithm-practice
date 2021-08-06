// Write a function to take an array of integers and return the minimum number
// of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
  const uniqueNums = {};
  let increments = 0;

  for (let i = 0; i < nums.length; i += 1) {
    while (uniqueNums[nums[i]] === true) {
      nums[i] += 1;
      increments += 1;
    }

    uniqueNums[nums[i]] = true;
  }

  return increments;
};
