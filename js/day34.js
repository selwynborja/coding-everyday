function currentTime(){
  const time = new Date();
  return time.toTimeString();
}

function currentDate(){
  const date = new Date();
  return date.toDateString();
}

const time = currentTime();
const date = currentDate()
console.log(`Current date and time: ${date} ${time}`);