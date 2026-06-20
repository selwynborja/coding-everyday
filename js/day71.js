const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

// Set up the command line prompt interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their password
rl.question('Enter your password: ', (inputPassword) => {
    
    // Hash the user's input using SHA-256
    const hashedInput = crypto.createHash('sha256').update(inputPassword).digest('hex');

    try {
        // Read the stored hash from the text file and clean up whitespace
        const storedHash = fs.readFileSync('storedhash.txt', 'utf8').trim();

        // Compare the hashes
        if (hashedInput === storedHash) {
            console.log('Access Granted! Password is correct.');
        } else {
            console.log('Access Denied! Incorrect password.');
        }
    } catch (error) {
        console.error('Error reading the password file:', error.message);
    }

    // Close the command line interface
    rl.close();
});
// 