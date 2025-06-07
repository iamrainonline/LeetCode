const num1 = [1, 2];
const num2 = [3, 4];

// Add  num1 * num2
const cartesianProduct = (num1, num2) => {
  let result = [];
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      result.push([num1[i], num2[j]]);
    }
  }
  return result;
};

console.log(cartesianProduct(num1, num2));

// Cartesian product
// Add all products with eachother
// example:

// 1,3
// 1,4
// 2,3
// 2,4
