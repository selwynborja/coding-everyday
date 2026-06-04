const regex = /(?=.*[A-Z])/;
const isValid = regex.test("upperCase");
console.log(isValid);