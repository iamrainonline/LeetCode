function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}

//   solve #2

function validParentheses(parens) {
  var stack = [],
    i;

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
    } else if ("(" !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

// Q2

const validAnagram = (s, t) => {
  let hashmap = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    hashmap[letter] ? hashmap[letter]++ : (hashmap[letter] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    hashmap[letter] ? hashmap[letter]-- : (hashmap[letter] = -1);
  }
  let count = Object.values(hashmap);
  let test = [];
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      test.push(count[i]);
    }
  }
  return test.length > 0 ? false : true;
};

console.log(validAnagram("radar", "radra"));

var isValid = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let char of s) {
    if (char in hashMap) {
      stack.push(hashMap[char]);
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("((()))"));

const person = {
  firstName: "john",
  greet: () => {
    console.log("hello", +this.name);
  },
};
const greetMe = person.greet;
// console.log(greetMe);
greetMe();
