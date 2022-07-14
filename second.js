// Checking all letters of second words should present in first word, in the same order using indexOf with indexing

// function characterPresent(arr) {
//   var first = arr[0].toLowerCase();
//   var second = arr[1].toLowerCase();
//   for (var letter of second) {
//     if (first.indexOf(letter) == -1) {
//       //-1 means not found in array
//       return false;
//     }
//   }
//   return true;
// }
// console.log(characterPresent(["hello", "rolhe"]));

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
