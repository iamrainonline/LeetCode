function birthdayCakeCandles(candles) {
  // Write your code here
  let hashmap = {};

  for (let i = 0; i < candles.length; i++) {
    if (hashmap[candles[i]]) {
      hashmap[candles[i]]++;
    } else {
      hashmap[candles[i]] = 1;
    }
  }
  let candlesBlown = Math.max(...Object.values(hashmap));
  return candlesBlown;
}

console.log(birthdayCakeCandles([1, 4, 4, 2]));

// What is the question here.
// You have candles on a cake, based off their height. 4 is highest candle.
// You can only blow the highest candles.
// Count how many candles you can blow:
// Example [1,4,4,2]
// Output: 2  (4 is highest, twice);
