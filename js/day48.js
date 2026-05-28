const regex = /^(?=.*@)(?=.*\.)/;
const str1 = "userexample@gmail.com";
const str2 = "ggpar";

console.log(regex.test(str1));
console.log(regex.test(str2));