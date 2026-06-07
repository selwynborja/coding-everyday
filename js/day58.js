const regex = /^(\d{8}|\d{10})$/;

console.log(regex.test("1234567890"));
console.log(regex.test("12345678"));
console.log(regex.test("1234567"));