// Check if password hash file exists, ask for a new password if not, if it exists, ask for the password, then validate using the stored hash txt file

const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const HASH_FILE = 'stored_pass.txt';


// Helper function to handle secure console inputs
function askQuestion(query, hideInput = false) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });

        // Mask user typing if hideInput is true (prevents shoulder surfing)
        if (hideInput) {
            rl._writeToOutput = function _writeToOutput(stringToWrite) {
                // Only print the query text, replace typed characters with nothing or asterisks
                if (rl.line.length === 0 && stringToWrite === query) {
                    rl.output.write(stringToWrite);
                } else if (stringToWrite !== '\r\n' && stringToWrite !== '\n') {
                    // Do not echo typed characters back to the screen
                    return;
                } else {
                    rl.output.write(stringToWrite);
                }
            };
        }
    });
}

// Hashes a password using PBKDF2 with a randomly generated 16-byte salt
function hashPassword(password) {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(16).toString('hex');
        
        // 100,000 iterations, 64-byte key length, SHA-512 digest
        crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
            if (err) reject(err);
            // Format: salt:hash
            resolve(`${salt}:${derivedKey.toString('hex')}`);
        });
    });
}

// Verifies a provided password against a stored salt:hash string
function verifyPassword(storedHashString, providedPassword) {
    return new Promise((resolve, reject) => {
        try {
            const [salt, storedKeyHex] = storedHashString.split(':');
            if (!salt || !storedKeyHex) return resolve(false);

            const storedKey = Buffer.from(storedKeyHex, 'hex');

            crypto.pbkdf2(providedPassword, salt, 100000, 64, 'sha512', (err, derivedKey) => {
                if (err) reject(err);
                // Use timingSafeEqual to defeat timing attacks
                const isValid = crypto.timingSafeEqual(storedKey, derivedKey);
                resolve(isValid);
            });
        } catch (error) {
            resolve(false);
        }
    });
}

// Main logic coordinator
async function main() {
    // 1. Check if the password hash file exists
    if (!fs.existsSync(HASH_FILE)) {
        console.log('--- No stored password found. Initializing Setup ---');
        
        const newPassword = await askQuestion('Create a new password: ', true);
        const confirmPassword = await askQuestion('\nConfirm your new password: ', true);
        console.log(''); // New line after hidden input

        if (newPassword !== confirmPassword) {
            console.log('❌ Passwords do not match. Setup aborted.');
            return;
        }

        // Store securely hashed password
        const hashedString = await hashPassword(newPassword);
        fs.writeFileSync(HASH_FILE, hashedString, 'utf8');
        console.log('✅ Password successfully configured and saved.');

    } else {
        console.log('--- Security Verification Required ---');
        
        const inputPassword = await askQuestion('Enter your password: ', true);
        console.log(''); // New line after hidden input

        // Read the stored salt:hash string
        const storedHashString = fs.readFileSync(HASH_FILE, 'utf8').trim();

        // Validate entry
        const isMatch = await verifyPassword(storedHashString, inputPassword);
        if (isMatch) {
            console.log('✅ Access Granted: Password verified successfully.');
        } else {
            console.log('❌ Access Denied: Incorrect password.');
        }
    }
}

main().catch(console.error);
