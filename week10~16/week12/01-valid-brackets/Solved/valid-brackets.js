// Write a function to take a string and return true if it contains valid sets
// of matching brackets, else return false

const validBrackets = function (str) {
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (char === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    } else if (char === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
  }

  return stack.length === 0;
};
