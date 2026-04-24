// split name string into array
const name = "nhoj";
let charArr = name.split('');

// capitalizing the first index of the array
charArr[0] = charArr[0].toUpperCase();

// reconstruct to a string
const capitalizeName = charArr.join('');
console.log(capitalizeName);