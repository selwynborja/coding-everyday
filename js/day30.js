function roll (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const rolls = [roll(1, 6), roll(1, 6)];
console.log(rolls);

