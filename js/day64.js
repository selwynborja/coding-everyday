import readline from 'readline';

// Enable reading from the terminal
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}

let secretInput = '';
process.stdout.write('Enter your secret: ');

// Listen for every keystroke
process.stdin.on('keypress', (str, key) => {
    // Handle Enter key (submission)
    if (key.name === 'return') {
			process.stdout.write('\n');
			console.log(`You typed: ${secretInput}`);
			process.exit();
    }
    
    // Handle Ctrl+C (force exit)
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }    

    else if (str && !key.ctrl && !key.meta) {
			// Capture character and print asterisk
			secretInput += str;
			process.stdout.write('*');
    }
});
