// O(1)
const twoSam = (nums, target) => {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in hashmap) {
      return [nums.indexOf(complement), i];
    }
    hashmap[nums[i]] = i;
  }
  return [];
};

console.log(twoSam([1, 3, 9, 3, 11], 6));
