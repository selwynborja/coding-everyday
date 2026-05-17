const now = new Date();

// Set 'tonight' to tomorrow at 00:00:00:000
const tonight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

// Difference in milliseconds
const remainingMs = tonight - now;

// Convert milliseconds to microseconds
const microSeconds = remainingMs * 1000;
console.log(`Remaining Microseconds Today: ${microSeconds}`);W