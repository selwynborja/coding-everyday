import readline from 'readline';

// 1. Create an interface to read from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Prompt the user for input
rl.question('Please enter your password: ', (password) => {
  
  // 3. Convert string to array and check for lowercase letters
  const hasLowercase = password.split('').some(char => 
    char === char.toLowerCase() && char !== char.toUpperCase()
  );

  // 4. Output the result and close the terminal interface
  if (hasLowercase) {
    console.log('Valid: Password contains at least one lowercase letter.');
  } else {
    console.log('Invalid: Password must contain at least one lowercase letter.');
  }

  rl.close();
});
