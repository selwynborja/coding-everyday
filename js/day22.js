const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question(`Enter a number between 0 and 100: `, (answer) => {
  try {
    const num = Number(answer);

    // Validate if it is a number and not an empty string
    if (answer.trim() === '' || isNaN(answer)){
      throw new Error('That is not a valid number.');
    }

    // Check range boundaries
    if (num < 0 || num > 100){
      throw new Error('Out of range! The number must be between 0 and 100.');
    }

    console.log(`Success! You entered: ${num}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  } finally {
    r1.close();
  }
});
