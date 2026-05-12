function currentTime(){
  const time = new Date();
  return time.toLocaleTimeString();
}

function currentDate(){
  const date = new Date();
  return date.toLocaleDateString();
}

const time = currentTime();
const date = currentDate()
console.log(`Current date and time: ${date} ${time}`);