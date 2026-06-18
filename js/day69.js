const crypto = require('crypto');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter password: ', (password) => {
  rl.close();

  // Generate SHA-1 Hash
  const hash = crypto.createHash('sha1').update(password).digest('hex');

  // Save to txt file
  fs.writeFile('password_hash.txt', hash, (err) => {
    if (err) throw err;
    console.log('SHA1 Hash successfully saved to password_hash.txt');
  });
});