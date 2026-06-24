const readline = require('readline');

// 1. Create the interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Ask the user for the password
rl.question('Enter your password: ', (password) => {
  let hasUppercase = false;

  // 3. Loop through characters to check for uppercase letters
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    
    // Check if the character is between A and Z
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
      break; 
    }
  }

  // 4. Output result and close the interface
  if (hasUppercase) {
    console.log('Password valid: Contains an uppercase letter.');
  } else {
    console.log('Password invalid: Must contain at least one uppercase letter.');
  }

  rl.close();
});
