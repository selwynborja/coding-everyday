const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Ask for password input
rl.question('Enter your password: ', (password) => {
    
    let hasSymbol = false;

    // 2. Loop through character codes
    for (let i = 0; i < password.length; i++) {
        const code = password.charCodeAt(i);
        
        // Exclude numbers (48-57), uppercase (65-90), lowercase (97-122)
        const isNumber = code >= 48 && code <= 57;
        const isUpper = code >= 65 && code <= 90;
        const isLower = code >= 97 && code <= 122;
        
        if (!isNumber && !isUpper && !isLower) {
            hasSymbol = true;
            break; // Stop looping early once a symbol is found
        }
    }

    // 3. Output the result
    if (hasSymbol) {
        console.log('Success: Password contains a symbol.');
    } else {
        console.log('Error: Password must contain at least one symbol.');
    }

    rl.close();
});
