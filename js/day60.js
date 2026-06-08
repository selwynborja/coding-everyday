const str = "(09123456789)";

const digitsOnly = str.replace(/\D/g, '');
const isValid = digitsOnly.length === 8 || digitsOnly.length === 11;
console.log(isValid); 