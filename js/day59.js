// Check if string contains 8 or 10 digits (even if there's dash, space or + parenthesis) (02) 8-555-6677

const str = "(02) 8-555-6677";

const digitsOnly = str.replace(/\D/g, '');
const isValid = digitsOnly.length === 8 || digitsOnly.length === 10;
console.log(isValid);