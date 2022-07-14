# Day_12
Solution of day_12 from 24 days GitHub question series.


### Checking all letters of second words should present in first word, in the same order using include function  
  
function characterMatch(arr) {   
  let str_01 = arr[0].toLowerCase().split("");     
  let str_02 = arr[1].toLowerCase().split("");   
  let count = str_02.length;  
  if (str_01.includes(str_02[0])) {  
    for (let elem of str_02) {  
      if (str_01.includes(elem)) {  
        let index = str_01.indexOf(elem);  
        str_01.splice(0, index);   
        count -= 1;  
      }  
    }  
    if (count === 0) {  
      return "character matched";  
    } else {  
      return "character is not matched";  
    }  
  } else {  
    return "letters of second words is not present in first word";  
  }     
}  
console.log(characterMatch(["Ritesh", "trsh"]));  
  
  
  
### Checking all letters of second words should present in first word, in the same order using indexOf with indexing  
   
  
function characterMatch(arr) {  
  let str_01 = arr[0].toLowerCase().split("");  
  let str_02 = arr[1].toLowerCase().split("");  
  let count = str_02.length;  
  if (str_01.includes(str_02[0])) {  
    for (let i = 0; i < str_02.length; i++) {  
      for (let j = 0; j < str_01.length; j++) {  
        if (str_02[i] === str_01[j]) {  
          str_01.splice(0, j);  
          i += 1;  
          j = -1;  
          count -= 1;  
        }  
      }  
    }  
    if (count === 0) {  
      return "character matched";  
    } else {  
      return "character is not matched";  
    }  
  } else {  
    return "letters of second words is not present in first word";  
  }  
}  
console.log(characterMatch(["RThello", "RHeLoT"]));  
    
  
### Unique values only from 2 arrays i.e. union values  
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



### Remove Duplicates from 2 arrays using Set method  
const inputA = [1, 2, 3, 4, 5, 1];  
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];  
  
// Output  
// [1, 2, 3, 4, 5, 6, 7, 8];  
    
function unionValues(arr_01, arr_02) {  
  let arr = new Set([...arr_01, ...arr_02]);  
  return arr;  
}  
console.log(unionValues(inputA, inputB));  


