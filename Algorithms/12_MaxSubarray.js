// KADANE's ALGORITHM

var maxSubArray = function (nums) {
  let currMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i]);
    maxima = Math.max(maxima, currMax);
  }

  return maxima;
};

console.log(maxSubArray([-2, 1 - 3, 4, -1, 2, 1, -5, 4]));
