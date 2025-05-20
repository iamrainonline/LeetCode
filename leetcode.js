class Node {
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

  // insert first node

  // insert last node

  // insert at index

  // get at index

  // remove at index

  // clear the list

  // print list data
}

var maxSubArray = function (nums) {
  let currentMax = nums[0]; // current max sum *ending at* this position
  let maxSoFar = nums[0]; // overall max we've seen

  for (let i = 1; i < nums.length; i++) {
    // Should I start a new subarray at nums[i], or continue the current one?
    currentMax = Math.max(currentMax + nums[i], nums[i]);

    // Update global max if current is bigger
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function birthdayCakeCandles(candles) {
  // Write your code here
  let hashmap = {};

  for (let i = 0; i < candles.length; i++) {
    if (hashmap[candles[i]]) {
      hashmap[candles[i]]++;
    } else {
      hashmap[candles[i]] = 1;
    }
  }
  let candlesBlown = Math.max(...Object.values(hashmap));
  return candlesBlown;
}

console.log(birthdayCakeCandles([1, 4, 4, 2]));
