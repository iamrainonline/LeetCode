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
  let currMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxima = Math.max(maxima, currMax);
  }

  return maxima;
};

console.log(maxSubArray([-2, 1 - 3, 4, -1, 2, 1, -5, 4]));
