const readline = require('readline');

// Create an interface to read from the terminal console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Validates a card number using RegEx.
 * @param {string} cardNumber 
 * @returns {boolean}
 */
function validateCardPattern(cardNumber) {
    // Remove all white spaces and hyphens
    const sanitized = cardNumber.replace(/[\s-]/g, '');

    // Master Regex for major networks:
    // Visa: 4... (13 or 16 digits)
    // MasterCard: 51-55... (16 digits)
    // Amex: 34 or 37... (15 digits)
    // Discover: 6011 or 65... (16 digits)
    const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

    return cardRegex.test(sanitized);
}

// Prompt the user in the terminal
rl.question('Please enter your Credit or Debit Card number: ', (input) => {
    const isValid = validateCardPattern(input);

    if (isValid) {
        console.log('\x1b[32m%s\x1b[0m', 'Success: The card number format is valid.');
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'Error: Invalid card number format.');
    }

    // Close the input stream
    rl.close();
});
