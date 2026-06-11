import readline from 'readline';

function maskInput(promptText) {
  return new Promise((resolve) => {
    // Write the initial prompt to the terminal
    process.stdout.write(promptText);
    
    // Enable raw mode to read character-by-character instantly
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    let inputData = '';

    const handleKeypress = (key) => {
      // Handle Enter key (Carriage Return or Line Feed)
      if (key === '\u000d' || key === '\u000a') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdin.removeListener('data', handleKeypress);
        process.stdout.write('\n'); // Move to next line
        resolve(inputData);
        return;
      }

      // Handle Ctrl+C (Exit signal)
      if (key === '\u0003') {
        process.exit();
      }

      // Handle Backspace
      if (key === '\u0008' || key === '\u007f') {
        if (inputData.length > 0) {
          inputData = inputData.slice(0, -1);
          // Move cursor back, print space to erase, move cursor back again
          process.stdout.write('\b \b'); 
        }
        return;
      }

      // Filter out non-printable control characters (like arrow keys)
      if (key.length === 1 && key >= ' ') {
        inputData += key;
        process.stdout.write('*'); // Print asterisk instead of the key
      }
    };

    process.stdin.on('data', handleKeypress);
  });
}

// Execute the function
async function run() {
  const secret = await maskInput('Enter password: ');
  console.log(`You typed: ${secret}`);
}

run();