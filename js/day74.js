import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function checkPassword() {
    // 1. Create the interface to read from terminal
    const rl = readline.createInterface({ input, output });

    // 2. Await the user input
    const password = await rl.question('Enter your password: ');

    // 3. Check for a digit using a loop (no regex)
    let hasDigit = false;
    for (const char of password) {
        if (char >= '0' && char <= '9') {
            hasDigit = true;
            break; 
        }
    }

    // 4. Output the result
    if (hasDigit) {
        console.log('✅ Password accepted! It contains a digit.');
    } else {
        console.log('❌ Password rejected. It must contain at least one digit.');
    }

    // 5. Close the interface
    rl.close();
}

checkPassword();
