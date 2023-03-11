function myFib(num) {
   let fib = [0, 1];

   for (i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
   }
   let addone = fib[fib.length - 1];
   let addtwo = fib[fib.length - 2];
   console.log(fib, "Total:", addone + addtwo);
}

console.log(myFib(10));
