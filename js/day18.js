const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a string: ', (input) => {
const uniqueChars = [...new Set(input)].join('');

console.log(`Unique characters: ${uniqueChars}`);
readline.close();
});