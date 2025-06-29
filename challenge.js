const maxSubarray = (numsArr) => {
  let currMax = numsArr[0];
  let Maxima = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    currMax = Math.max(currMax + numsArr[i], numsArr[i]);
    Maxima = Math.max(Maxima, currMax);
  }
  return Maxima;
};

// console.log(maxSubarray([-2, 4, 5, -2, -2, -2, 2, -2, 11]));

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c;

  console.log(a); // primul număr
  if (n > 1) console.log(b); // al doilea număr

  for (let i = 2; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

// Exemplu de apel:
fibonacci(5);
