var isPowerOfThree = function (n) {
   while (n && n !== 1) n = n % 3 === 0 ? n / 3 : false;
   return n === 1;
};

console.log(isPowerOfThree(45));