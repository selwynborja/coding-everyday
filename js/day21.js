const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Enter a Number: ', (input) => {
  if (input.trim() === '' || isNaN(input)){
    console.log('Error: That is not a number.');
  } else {
    console.log('Success! You entered a number: ' + input);
  }

  r1.close();
});