// Ask for a password input, if new, require strong password and register, if password exists(hashed password txt file), require existing password

const readline = require('readline');
const fs = require('fs');
const crypto = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const FILE_PATH = './pass.txt';

// A simple function to turn a password into a hashed string
function simpleHash(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Ask for the username first
rl.question('Enter Username: ', (username) => {
    username = username.trim();

    // Check if our password file exists, then read it
    let fileData = '';
    if (fs.existsSync(FILE_PATH)) {
        fileData = fs.readFileSync(FILE_PATH, 'utf8');
    }

    // Search the file to see if the user already exists
    let savedHash = '';
    const lines = fileData.split('\n');
    for (let line of lines) {
        const parts = line.split(':');
        if (parts[0] === username) {
            savedHash = parts[1]; // Found the existing hashed password
            break;
        }
    }

    if (savedHash) {
        // --- LOGIN FLOW ---
        console.log('User found! Please login.');
        rl.question('Enter Password: ', (password) => {
            
            // Hash the input and compare it to what is in the file
            if (simpleHash(password) === savedHash) {
                console.log('Success: Logged in successfully!');
            } else {
                console.log('Error: Incorrect password.');
            }
            rl.close(); // Close the input tool
        });

    } else {
        // --- REGISTRATION FLOW ---
        console.log('New user detected! Please register.');
        console.log('Rule: Password must be at least 8 characters long, have a number, and a symbol.');
        
        rl.question('Create Strong Password: ', (password) => {
            // Simple validation check: 8+ chars, contains a number, contains a special character
            const hasNumber = /[0-9]/.test(password);
            const hasSymbol = /[^A-Za-z0-9]/.test(password);

            if (password.length >= 8 && hasNumber && hasSymbol) {
                const newHash = simpleHash(password);
                
                // Save the user and hash to the file
                fs.appendFileSync(FILE_PATH, username + ':' + newHash + '\n');
                console.log('Success: Account created and saved to pass.txt!');
            } else {
                console.log('Error: Password is too weak. Registration cancelled.');
            }
            rl.close();
        });
    }
});
