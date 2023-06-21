function sum(d) {
   var a = 3;
   return function (b) {
      console.log(a + b);
   };
}

var fn = sum();
let res = fn(2);

function sum(d) {
   var a = d;
   return function (b) {
      console.log(a + b);
   };
}
sum(3)(2);

// complete the function

var x = 21;
var girl = function () {
   console.log(x);
   var x = 20;
};
girl();
