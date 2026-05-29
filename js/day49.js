const emailPattern = /.+\@.+\..+/;
const testEmail = 'example@gmail.com';

const isValid = emailPattern.test(testEmail);
console.log(isValid);