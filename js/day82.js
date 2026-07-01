const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your credit/debit card number: ", (input) => {

  const cleanNumber = input.replace(/\D/g, '');

  if(cleanNumber.length >= 13 && cleanNumber.length <= 19){
    const formattedNumber = cleanNumber.replace(/(.{4})/g, '$1').trim();
    console.log(`Thank you! Saved as: ${cleanNumber}`);
    console.log(`Formatted View: ${formattedNumber}`);
  } else {
    console.log(`\nError: Invalid card length. Please enter a valid number.`);
  }
  
  rl.close();
});