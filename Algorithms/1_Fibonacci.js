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

// Climbing Stairs

function climbingStairCase(n) {
  const nOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }
  return nOfWays[n - 1];
  // de ce  -1 ?
  // array-ul incepe de la  0,1,2,3,4
  // nOfWays[n] (in caz ca n este 3), return  va fi   al 4lea numar d in array
  // dar avem nevoie de  al  3-lea numar.  asa ca facem  3-1 (numarul de pasi)
}

console.log(climbingStairCase(3));

const fib = (num) => {
  let a = 0;
  let b = 1;
  let c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < num; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};

fib(5);
