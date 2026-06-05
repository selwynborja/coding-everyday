const regex = /^(?=(?:\D*\d){8}\D*$)/;
console.log(regex.test('12345 - 6 + 7  8'));