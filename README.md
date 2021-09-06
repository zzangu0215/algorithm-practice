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

## Week 1

### 01-Arithmetic

### 02-Odd or Even

### 03-Log Nums

## Week 2

### 01-Log Even Nums

### 02-Countdown

### 03-Sum Array

## Week 3

### 01-Fizz Buzz

### 02-Max Num

### 03-Vowel Count

## Week 4

### 01-Is Palindrome

### 02-Factorial

### 03-Title Case

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
