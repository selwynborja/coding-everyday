const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

// Math floor to get a whole number of seconds
const remainingSeconds = Math.floor((tomorrow - now) / 1000);

console.log(`Remaining Seconds: ${remainingSeconds}`);
