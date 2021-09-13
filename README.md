# Algorithm Practice

## Table of Contents

- [**Week 1**](#week-1)
  - [arithmetic](#01-arithmetic)
  - [odd or even](#02-odd-or-even)
  - [log nums](#03-log-nums)
- [**Week 2**](#week-2)
  - [log even nums](#01-log-even-nums)
  - [countdown](#02-countdown)
  - [sum array](#03-sum-array)
- [**Week 3**](#week-3)
  - [fizz buzz](#01-fizz-buzz)
  - [max num](#02-max-num)
  - [vowel count](#03-vowel-count)
- [**Week 4**](#week-4)
  - [is palindrome](#01-is-palindrome)
  - [factorial](#02-factorial)
  - [title case](#03-title-case)
- [**Week 5**](#week-5)
  - [character count](#01-character-count)
  - [product of largest two](#02-product-of-largest-two)
  - [camel case](#03-camel-case)
- [**Week 6**](#week-6)
  - [linear search](#01-linear-search)
  - [is unique](#02-is-unique)
  - [is anagram](#03-is-anagram)
- [**Week 7**](#week-7)
  - [most songs in playlist](#01-most-songs-in-playlist)
  - [is perfect square](#02-is-perfect-square)
  - [array search 2d](#03-array-search-2d)
- [**Week 8**](#week-8)
  - [multiply into 20](#01-multiply-into-20)
  - [zeroes and ones](#02-zeroes-and-ones)
  - [merge sorted](#03-merge-sorted)
- [**Week 9**](#week-9)
  - [double triple map](#01-double-triple-map)
  - [array intersection](#02-array-intersection)
  - [squares of a sorted array](#03-squares-of-a-sorted-array)

## Week 1

### 01-Arithmetic

Q. Write code to create functions capable of different arithmetic operations.

Solution:

```js
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};
```

### 02-Odd or Even

Q. Write code to create a function that determines whether a number is odd or even.

Solution:

```js
const oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
```

### 03-Log Nums

Q. Write code to create a function that prints all whole numbers from 1 to a given number.

Solution:

```js
const logNums = function (num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
```

## Week 2

### 01-Log Even Nums

Q. Write code to create a function that prints even numbers from 0 to a given number.

Solution #1:

```js
const logEvenNums = function (num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
```

Solution #2:

```js
const logEvenNums = function (num) {
  for (let i = 0; i <= num; i += 2) {
    console.log(i);
  }
};
```

### 02-Countdown

Q. Write code to create a function that prints all whole numbers from `num` to a given number.

Solution:

```js
const countdown = function (num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};
```

### 03-Sum Array

Q. Write code to create a function that adds up all the numbers in a given array and returns the total.

Solution:

```js
const sumArray = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    result += currentNumber;
  }

  return result;
};
```

## Week 3

### 01-Fizz Buzz

Q. Write code to create a function that solves the [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) problem.

Solution:

```js
const fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (currentNumber % 3 === 0) {
      console.log("Fizz");
    } else if (currentNumber % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNumber);
    }
  }
};
```

### 02-Max Num

Q. Write code to create a function that returns the largest number present in a given array.

Solution:

```js
const maxNum = function (arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  return max;
};
```

### 03-Vowel Count

Q. Write code to create a function that counts the number of vowels in a given string.

Solution #1:

```js
const vowelCount = function (str) {
  let result = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};
```

Solution #2:

```js
const vowelCount = function (str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      result += 1;
    }
  }

  return result;
};
```

## Week 4

### 01-Is Palindrome

Q. Write code to create a function that takes in a string and determines whether or not it is a palindrome. A **palindrome** is any string spelled the same forwards as it is backward.

Solution #1:

```js
const isPalindrome = function (str) {
  const reversedString = str.split("").reverse().join("");

  if (reversedString === str) {
    return true;
  }
  return false;
};
```

Solution #2:

```js
const isPalindrome = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
```

### 02-Factorial

Q. Write code to create a function that returns the factorial of a given number. A **factorial** of a number is the product of all positive integers less than or equal to the number. For more information, see the [Wikipedia page on factorials](https://en.wikipedia.org/wiki/Factorial).

Solution:

```js
const factorial = function (num) {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result *= i;
  }

  return result;
};
```

### 03-Title Case

Q. Write code to create a function that capitalizes the first letter of every word in a given string.

Solution:

```js
const titleCase = function (str) {
  const result = [];

  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split("");

    word[0] = word[0].toUpperCase();

    result.push(word.join(""));
  }

  return result.join(" ");
};
```

## Week 5

### 01-Character Count

Q. Write code to create a function that takes a string and returns an object containing the characters in the string and the number of times they appear.

> Hint: [MDN Web Docs on object bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

Solution:

```js
const characterCount = function (str) {
  const charObject = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char in charObject) {
      charObject[char]++;
    } else {
      charObject[char] = 1;
    }
  }

  return charObject;
};
```

### 02-Product of Largest Two

Q. Write code to create a function that finds the largest two numbers in an array and returns the product of both numbers.

Solution #1:

```js
const productOfLargestTwo = function (arr) {
  const largest = Math.max(...arr);

  const newArr = arr.filter((num) => num < largest);
  const secondLargest = Math.max(...newArr);

  return largest * secondLargest;
};
```

Solution #2:

```js
var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};
```

### 03-Camel Case

Q. Write code to create a function that takes a string and returns the string in camel case.

Solution #1:

```js
const camelCase = function (str) {
  const words = str.split(" ");

  const result = words
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");

  return result[0].toLowerCase() + result.slice(1);
};
```

Solution #2:

```js
var camelCase = function (str) {
  var result = "";
  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    result += letters.join("");
  }

  return result;
};
```

## Week 6

### 01-Linear Search

Q. Write code to create a function that takes an array of numbers and a target number and returns the index of the target number in the given array.

Solution:

```js
const linearSearch = (arr, target) => {
  if (target in arr) {
    for (let i = 0; i < arr.length; i++) {
      if (target === arr[i]) return i;
    }
  } else {
    return -1;
  }
};
```

### 02-Is Unique

Q. Write code to create a function that takes an array of numbers and returns `true` if no number appears more than once in the given array; else, it returns `false`.

Solution:

```js
const isUnique = (arr) => {
  const numOpject = {};

  for (let i = 0; i < arr.length; i++) {
    if (numOpject[arr[i]] === true) return false;

    numOpject[arr[i]] = true;
  }

  return true;
};
```

### 03-Is Anagram

Q. Write code to create a function that takes in two strings and return `true` if one string is an anagram of another string and otherwise returns `false`.

> **Note:** An **anagram** is a word or phrase made by rearranging the letters of another word or phrase. See the [Wikipedia page on anagrams](https://en.wikipedia.org/wiki/Anagram) for more information.

Solution #1:

```js
const isAnagram = (strA, strB) => {
  const strA_Arr = strA.split("").sort();
  const strB_Arr = strB.split("").sort();

  if (strA_Arr.join("") === strB_Arr.join("")) return true;
  else return false;
};
```

Solution #2:

```js
const isAnagram = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }

  const aLetterMap = {};
  const bLetterMap = {};
  const strLength = strA.length;

  for (let i = 0; i < strLength; i += 1) {
    const aLetter = strA[i];
    const bLetter = strB[i];

    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }

  // Array.prototype.some tests whether at least one element in the array passes
  // the test implemented by the provided function.
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
  const hasUnequalLetterCount = Object.keys(aLetterMap).some(
    (key) => aLetterMap[key] !== bLetterMap[key]
  );

  return !hasUnequalLetterCount;
};
```

## Week 7

### 01-Most Songs in Playlist

Q. Write code to create a function that takes an array of numbers, each representing the duration of a song. You will return the maximum number of songs present in the array that can fit into a 60 minute playlist.

Solution #1:

```js
const mostSongsInPlaylist = function (arr) {
  const sortedArr = arr.sort();
  let totalMins = 0;
  let totalSongs = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    const currentSongDuration = sortedArr[i];

    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};
```

Solution #2:

```js
const mostSongsInPlaylist = function (arr) {
  const sortedArr = arr.sort();
  let sum = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    sum += sortedArr[i];

    if (sum > 60) return i;
  }

  return sortedArr.length;
};
```

### 02-Is Perfect Square

Q. Write code to create a function that takes in a whole number, and returns `true` if the number is a [perfect square](https://en.wikipedia.org/wiki/Square_number), otherwise returns `false`.

Solution:

```js
const isPerfectSquare = function (num) {
  let i = 0;

  while (true) {
    if (i * i === num) return true;
    if (i * i > num) return false;
    i++;
  }
};
```

### 03-Array Search 2d

Q. Write code to create a function that takes in a 2-dimensional array and searches each 2D element for the character "X".

Solution #1:

```js
const arraySearch2D = function (arr) {
  const newArr = arr.flat();
  let count = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "X") count += 1;
  }

  return count;
};
```

Solution #2:

```js
const arraySearch2D = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === "X") {
        count++;
      }
    }
  }

  return count;
};
```

## Week 8

### 01-Multiply Into 20

Q. Write code to create a function that takes an array of unique numbers. Return `true` if any two numbers can be multiplied into 20, else return `false`.

Solution #1:

```js
const multiplyInto20 = function (arr) {
  const temp = arr.filter((num) => 20 % num === 0 && num > 0);

  if (temp.length >= 2) return true;
  else return false;
};
```

Solution #2:

```js
const multiplyInto20 = function (arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    const neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    }
    numMap[currentNum] = true;
  }

  return false;
};
```

### 02-Zeroes and Ones

Q. Write code to create a function that takes in a string containing only 0s and 1s, and returning `true` if there are an equal number of 0s and 1s, else returning `false`.

Solution:

```js
const zeroesAndOnes = function (str) {
  let zeroes = 0;
  let ones = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") zeroes++;
    if (str[i] === "1") ones++;
  }

  if (zeroes === ones) return true;
  else return false;
};
```

### 03-Merge Sorted

Q. Write code to create a function that takes in two sorted arrays of numbers and merges the contents of both arrays into one new sorted array.

> **Note**: You may not use the built in sort method for this activity.

Solution:

```js
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
```

## Week 9

### 01-Double Triple Map

Q. Write code to create a function that takes in an array of integers and returns a transformed array where even numbers are doubled and odd numbers are tripled.

Solution #1:

```js
const doubleTripleMap = function (arr) {
  const newArr = arr.map((num) => {
    if (num % 2 === 0) return num * 2;
    else return num * 3;
  });

  return newArr;
};
```

Solution #2:

```js
const doubleTripleMap = function (arr) {
  const doubleTripleArr = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0) {
      doubleTripleArr.push(num * 2);
    } else {
      doubleTripleArr.push(num * 3);
    }
  }
  return doubleTripleArr;
};
```

### 02-Array Intersection

### 03-Squares of A Sorted Array
