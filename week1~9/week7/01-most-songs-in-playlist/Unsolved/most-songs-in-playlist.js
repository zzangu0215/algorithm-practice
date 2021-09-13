// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const mostSongsInPlaylist = function (arr) {
  const sortedArr = arr.sort();
  let sum = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i];

    if (sum > 60) return i;
  }

  return sortedArr.length;
};
