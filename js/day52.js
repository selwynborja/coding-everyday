// Check if string contains 1 digit, 1 symbol, 1 uppercase letter and 1 lowercase and is more than 10 characters long

const regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{11,}$/;
const isValid = regex.test("Somewhereib1@");
console.log(isValid);