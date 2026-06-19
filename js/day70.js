const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your password: ', (password) => {
    // 1. Generate the SHA-256 hash of the password
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    
    // 2. Save the hash to a text file
    fs.writeFile('password_hash.txt', hash, (err) => {
        if (err) throw err;
        console.log('Success! Password hash saved to password_hash.txt');
        console.log('Hash:', hash);
        rl.close();
    });
});
