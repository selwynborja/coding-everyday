const readline = require('readline');

function askPassword(query) {
    return new Promise((resolve) => {
        // Print the initial prompt question
        process.stdout.write(query);

        // Enable raw mode to read keystrokes character-by-character
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        let password = '';

        const handleKeypress = (char, key) => {
            // Stop execution and exit if Ctrl+C is pressed
            if (key && key.ctrl && key.name === 'c') {
                process.exit();
            }

            // If Enter (Return) is pressed, finish input collection
            if (key && (key.name === 'enter' || key.name === 'return')) {
                // Move cursor to a new line
                process.stdout.write('\n');
                
                // Clean up: turn off raw mode and remove listeners
                process.stdin.setRawMode(false);
                process.stdin.pause();
                process.stdin.removeListener('keypress', handleKeypress);
                
                resolve(password);
                return;
            }

            // Handle Backspace
            if (key && key.name === 'backspace') {
                if (password.length > 0) {
                    password = password.slice(0, -1);
                    // Move cursor back, erase the character, and move back again
                    process.stdout.write('\b \b');
                }
                return;
            }

            // For any other printable character, save it and print an asterisk
            if (char && char.length === 1 && char.charCodeAt(0) >= 32) {
                password += char;
                process.stdout.write('*');
            }
        };

        // Emit keypress events through readline
        readline.emitKeypressEvents(process.stdin);
        process.stdin.on('keypress', handleKeypress);
    });
}

// --- Execution ---
async function run() {
    const inputSecret = await askPassword('Enter secret token: ');
    console.log(`Success! Capturing completed.`);
    console.log(`Your secret token is: ${inputSecret}`);
}

run();