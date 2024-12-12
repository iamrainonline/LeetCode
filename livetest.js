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
var longestCommonPrefix = (strs) => {
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

// hashmap and twosum again.

const arr = [2, 4, 15, 22];
const num = 6;

const twoSum = (arr, num) => {
  const hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = num - arr[i];
    if (complement in hashmap) {
      return [arr.indexOf(complement), i];
    }
    hashmap[arr[i]] = i;
  }
  return hashmap;
};

console.log(twoSum(arr, 6));
