var hammingWeight = function (n) {
   let bits = 0;
   let x = n.toString(2).split("");
   for (let i = 0; i < x.length; i++) {
      if (x[i] === "1") {
         bits++;
      }
   }
   return bits;
};

console.log(hammingWeight(00000000000000000000000000001011));
