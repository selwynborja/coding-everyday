const date = new Date();
const currentDate = new Date();
date.setHours(date.getHours() + 1);

console.log(`Current Date and Time: ${currentDate.toLocaleString()}`);
console.log(`Time After 1 Hour: ${date.toLocaleString()}`);