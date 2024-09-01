class Nodex {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Nodex(data, this.head);
  }
}

const ll = new LinkedList();

ll.insertFirst("babic");
ll.insertFirst("cristi");
ll.insertFirst("george");
// console.log(ll);

// LCM

const mystrs = ["calmant", "calamar", "cal", "calculator"];
var longestCommonPrefix = function (strs) {
  //
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

// console.log(longestCommonPrefix(mystrs));

const arr = [1, 2, 3, 4, 5, 6];

const twoSum = (arr, num) => {
  const hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = num - arr[i];
    hashmap[arr[i]] = complement;
  }
  console.log(hashmap);
};

// twoSum(arr, 7);

// first unique char
// const firstUnique = (str) => {
//   let map = {};
//   for (let i = 0; i <= str.length; i++) {
//     map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
//   }

//   for (keys in map) {
//     if (map[keys] === 1) {
//       return keys;
//     }
//   }
// };

// console.log(firstUnique("babic"));

// move zeroes on array
const zeroarr = [1, 2, 3, 0, 0, 0];

const moveZero = (arr) => {
  let currIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[currIndex] = arr[i];
      currIndex++;
    }
  }
  for (let i = currIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZero(zeroarr));
