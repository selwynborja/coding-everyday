const nycTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(new Date());

console.log(`New York Date and Time: ${nycTime}`);
console.log("lsssushshsh");