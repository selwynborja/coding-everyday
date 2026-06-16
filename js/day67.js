const fs = require('fs');
const readline = require('readline');

// Ensure we can use raw mode properties
const stdin = process.stdin;
const stdout = process.stdout;

// Put terminal into raw mode to capture exact keypresses
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdout.write("Enter password: ");

let password = "";

stdin.on('data', (key) => {
    // Convert key to string/hex code for reliable matching
    const hex = Buffer.from(key).toString('hex');

    if (hex === '0d' || hex === '0a') { 
        // 'Enter' key pressed
        stdin.setRawMode(false);
        stdin.pause();
        stdout.write('\n');
        saveToFile();
    } else if (hex === '03') { 
        // 'Ctrl + C' pressed (Exit process)
        stdin.setRawMode(false);
        process.exit();
    } else if (hex === '7f' || hex === '08') { 
        // 'Backspace' or 'Delete' pressed
        if (password.length > 0) {
            password = password.slice(0, -1);
            // Move cursor back, overwrite with space, move back again
            stdout.write('\b \b');
        }
    } else {
        // Standard visible characters (ignore control sequences like arrow keys)
        if (key.length === 1 && key.charCodeAt(0) >= 32) {
            password += key;
            stdout.write('*');
        }
    }
});

function saveToFile() {
    if (!password) {
        console.log("Error: Password cannot be empty.");
        process.exit(1);
    }

    fs.writeFile('password.txt', password, (err) => {
        if (err) {
            console.error("Failed to save file:", err);
        } else {
            console.log("Password successfully saved to password.txt");
        }
        process.exit();
    });
}
