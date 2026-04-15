const str = 'hello world from javascript';
const capitalized = str
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  console.log(capitalized);