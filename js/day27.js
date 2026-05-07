function subtractToZero(y, x) {
  const result = y - x;

  if (result < 0){
    return 0;
  } else {
    return result;
  }
}

console.log(subtractToZero(150, 7));