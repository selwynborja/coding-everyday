const readline = require('readline');

// setup input interface
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY ){
  process.stdin.setRawMode(true)
}

let n1 = 2;
let n2 = 3;

console.log(`Press any key to generate a fibonacci number ctrl c to exit: `);

process.stdin.on('keypress', (str, key) => {
  // exit the process if the ctrl c is pressed
  if (key.ctrl && key.name === 'c'){
    process.exit();
  }

  // output currrent number
  process.stdout.write(`${n1}`);

  // calculate next state
  const next = n1 + n2;
  n1 = n2;
  n1 = next;
});

