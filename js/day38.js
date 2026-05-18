import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a date (YYYY-MM-DD): ', (input) => {
  const date = new Date(input);

  // Convert to seconds
  const unixTimestamp = Math.floor(date.getTime() / 1000);

  // Validate and output the result
  if (!isNaN(unixTimestamp)){
    console.log(`Unix Timestamp: ${unixTimestamp}`);
  } else {
    console.log('Invalid date entered.');
  }

  rl.close();
});