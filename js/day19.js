const readline = require('readline');

// setup interface to wait for keypress
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const waitForKeypress = () => new Promise (resolve => {
  rl.question('Press Enter to Increment...', () => resolve());
});

async function startCounter (){
  let num = 0;
  console.log('Initial numebr: ', num);

  while(true){
    await waitForKeypress();
    num++;
    console.log(num)
  }
}

startCounter();