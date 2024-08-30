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

const data = [0, 0, 0, "undefined", null, null];

const sortData = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      input.splice(input[i], 1);
      input.push(0);
    } else {
      return input;
    }
  }
};

// console.log(sortData(data));
