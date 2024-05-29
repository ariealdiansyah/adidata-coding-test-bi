var isValid = function (s) {
  const stack = [];
  const matchingBrackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of s) {
    if (Object.values(matchingBrackets).includes(char)) {
      stack.push(char);
    } else if (Object.keys(matchingBrackets).includes(char)) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingBrackets[char]
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))