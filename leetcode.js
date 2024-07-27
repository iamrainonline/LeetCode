function maxSubarraySum(arr, num) {
   if (num > arr.length) {
      return num;
   }

   var max = -Infinity;
   for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0;
      for (let j = 0; j < num; j++) {
         temp += arr[i + j];
      }
      if (temp > max) {
         max = temp;
      }
   }
   return max;
}

// console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 3));

function plusOne(nums) {
   for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < 9) {
         nums[i]++;
         return nums;
      }
      nums[i] = 0;
   }
   nums.unshift(1);
   return nums;
}
// console.log(plusOne([1, 3, 3]));

class Person {
   constructor() {
      this.name = "bob";
   }
   sayHello() {
      const that = this;
      return function plm() {
         console.log(that.name);
      };
   }
}

const p = new Person();
const f = p.sayHello();
