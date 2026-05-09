function greatest(x, y, z){
  if (x > y && x > z){
    return x;
  } else if (y > x && y > z){
    return y;
  } else {
    return z;
  }
}

console.log(greatest(5, 19, 2));