const readline = require('readline');

// create interface for terminal input and output
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

const translations = {
  "one" : "isa",
  "two" : "dalawa",
  "three" : "tatlo",
  "four" : "apat",
  "five" : "lima",
  "six" : "anim",
  "seven" : "pito",
  "eight" : "walo",
  "nine" : "siyam",
  "ten" : "sampu"
};

// ask the user for input
r1.question('Enter a number in words (one to ten): ', (answer) => {
  const word = answer.trim().toLowerCase();

  if (translations[word]){
    console.log(`The tagalog translation is : ${translations[word]}`);
  } else {
    console.log('Invalid input. Please enter a number word from one to ten.')
  }

  r1.close();
});