# Algorithm Practice

## Week 5

### 01-Character-Count

Q. Write the code to create a function that takes a string and returns an object containing the characters in the string and the number of times they appear.

Hint: [MDN Web Docs on object bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

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
