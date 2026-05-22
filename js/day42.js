const today = new Date();
today.setDate(today.getDate() - 1);

const yesterday = today.toISOString().split("T")[0];
console.log(yesterday);