const readline = require('readline');

// Ask for passsword input and require all (digit, symbol, uppercase, lowercase)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to securely hide password typing in the terminal
function askPassword(query) {
  return new Promise((resolve) => {
    rl.question(query, (password) => {
      rl.output.write('\n'); // Add a newline after hitting Enter
      resolve(password);
    });

    // Override stdout to mask characters
    rl._writeToOutput = function _writeToOutput(stringToWrite) {
      // Allow the query prompt to print normally
      if (stringToWrite === query) {
        rl.output.write(stringToWrite);
      } else if (stringToWrite === '\r\n' || stringToWrite === '\n' || stringToWrite === '\r') {
        // Allow newlines
        rl.output.write(stringToWrite);
      } else {
        // Mask actual typing with asterisks (or leave blank by removing '*')
        rl.output.write('*'); 
      }
    };
  });
}

function validatePassword(password) {
  // Requires: 1 digit, 1 symbol, 1 uppercase, 1 lowercase, min 8 characters
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

async function main() {
  console.log("--- Password Setup ---");
  const password = await askPassword("Enter your new password: ");

  if (validatePassword(password)) {
    console.log("Success: Your password meets all security requirements!");
  } else {
    console.log("Error: Password fails requirements.");
    console.log("Must contain at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 symbol.");
  }

  rl.close();
}

main();
