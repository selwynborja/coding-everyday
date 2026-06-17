const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter password: ', (password) => {
    // 1. Generate MD5 hash of the password
    const hash = crypto.createHash('md5').update(password).digest('hex');

    // 2. Save the hash to a txt file
    fs.writeFile('password_hash.txt', hash, (err) => {
        if (err) throw err;
        console.log('MD5 hash successfully saved to password_hash.txt');
    });

    rl.close();
});
