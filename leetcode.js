const pascalTriangle = (num) => {
  let triangle = [];
  if (num >= 1) {
    triangle.push([1]);
  }
  if (num >= 2) {
    triangle.push([1, 1]);
  }

  for (let i = 2; i < num; i++) {
    let insertOne = 1;

    let prevArray = triangle[i - 1];

    if (prevArray.length === 2) {
      triangle.push([1, 2, 1]);
    } else {
      let add = [];
      let left = 0;
      let right = 1;

      while (right < prevArray.length) {
        add.push(prevArray[left] + prevArray[right]);
        left++;
        right++;
      }
      triangle.push([insertOne, ...add, insertOne]);
    }
  }
  return triangle;
};

console.log(pascalTriangle(10));
