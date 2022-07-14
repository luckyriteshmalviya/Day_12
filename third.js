// Unique values only from 2 arrays i.e. union values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
// [1, 2, 3, 4, 5, 6, 7, 8];

function unionValues(arr_01, arr_02) {
  const arr = [...arr_01, ...arr_02];
  const obj = {};
  arr.map((element) => {
    obj[element] = 0;
  });
  const arr_03 = Object.keys(obj);
  let res = [];
  arr_03.map((elem) => {
    res.push(Number(elem));
  });
  return res;
}

console.log(unionValues(inputA, inputB));
