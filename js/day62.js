// Check if string has 8 digits, or 11 digits starting with zero, or string begins with +, and contains 12 digits; valid: 8812-5566; (0922)3334455; +63922-3334455

const str1 = "8812-5566";
const str2 = "(0922)3334455";
const str3 = "+63922-3334455";

const digitsOnly = str3.replace(/\D/g, '');
const isValid = digitsOnly.length === 8 || digitsOnly.length === 11 || digitsOnly.length === 12;
console.log(isValid);