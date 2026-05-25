const text = "tangina mo ka"

// Replace words using an inline arrow function
const cleanText = text.replace(/\b(tangina)\b/gi, match => '*'.repeat(match.length));
console.log(cleanText);