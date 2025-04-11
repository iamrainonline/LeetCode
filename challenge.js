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

// console.log(isValid("(([[]]))"));

// reverse nums in array

let mynums = [0, 1, 2, 3, 4, 5, 6];
const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [(arr[left] = arr[right])];

    left++;
    right--;
  }
  return arr;
};

console.log(reverseArray(mynums));
