// Check if string is 8 digits or 11 or starting with +, plus 12 digits (+63)

const str = "+639674693578";

const digitsOnly = str.replace(/\D/g, '');
const isValid = digitsOnly.length === 8 || digitsOnly.length === 11 || digitsOnly.length === 12;
console.log(isValid);