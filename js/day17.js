// using set convert string into set and spread it back into an array
const str = 'banana';
const uniqueChars = [...new Set(str)].join('');
console.log(uniqueChars);