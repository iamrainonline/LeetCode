var isValid = function (s) {
  const hashmap = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashmap) {
      stack.push(hashmap[s[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("([{}])"));
