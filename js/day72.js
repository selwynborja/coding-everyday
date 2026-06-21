const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

// 1. Function to hash a string using SHA1
function hashPassword(password) {
    return crypto.createHash('sha1').update(password).digest('hex');
}

// 2. Set up terminal prompt
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter password: ', (inputPassword) => {
    // Hide the input as it's being typed (optional but recommended)
    process.stdout.write('\x1B[2K\rPassword received.'); 

    // 3. Read the stored hash from the txt file
    fs.readFile('hash.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('\nError reading password file.');
            rl.close();
            return;
        }

        // Clean the stored hash (remove trailing newlines/spaces)
        const storedHash = data.trim();
        
        // 4. Hash the user's input and compare
        const hashedInput = hashPassword(inputPassword);

        if (hashedInput === storedHash) {
            console.log('\nAccess Granted: Passwords match!');
        } else {
            console.log('\nAccess Denied: Incorrect password.');
        }

        rl.close();
    });
});
