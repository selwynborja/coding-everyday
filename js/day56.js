const regex = /^(?=(?:\D*\d){8}\D*$)[0-9-]+$/;
console.log(regex.test("12345679"));
console.log(regex.test("123-456-78"));