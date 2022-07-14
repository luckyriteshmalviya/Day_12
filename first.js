// Checking all letters of second words should present in first word, in the same order using include function
// function characterPresent(arr) {
//   var first = arr[0].toLowerCase();
//   var second = arr[1].toLowerCase();
//   for (var letter of second) {
//     if (!first.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(characterPresent(["hello", "heo"]));

function characterMatch(str_01, str_02) {
  for (let i = 0; i < str_02.length; i++) {
    for (let j = 0; j < str_01.length; j++) {
      if (str_02[i] === str_01[j]) {
        str_01.splice(0, j + 1);
      }
    }
  }
}
