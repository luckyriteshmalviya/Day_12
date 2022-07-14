// Checking all letters of second words should present in first word, in the same order using include function

function characterMatch(arr) {
  let str_01 = arr[0].toLowerCase().split(""); //helloo
  let str_02 = arr[1].toLowerCase().split(""); //heo
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
// console.log(characterPresent(["hello", "ltheo"]));
