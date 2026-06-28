const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a password: ', (password) => {
  if (!password || password.length < 0){
    console.log("Error: Password must be at least 9 characters long.");
    rl.close();
    return;
  }

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\.d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>/?]/.test(password);

  const score = hasLower + hasUpper + hasDigit + hasSymbol;

  if (score < 3){
    console.log("Error: Password must meet 3 of 4 criteria: lowercase, uppercase, digit, symbol");
  } else {
    console.log("Success: Password is valid!");
  }

  rl.close();
});