// Remove Duplicates from 2 arrays using Set method
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
// [1, 2, 3, 4, 5, 6, 7, 8];

function unionValues(arr_01, arr_02) {
  let arr = new Set([...arr_01, ...arr_02]);
  return arr;
}
console.log(unionValues(inputA, inputB));
