const text = "What the fuck is this? Is he dead?"

// Replace words using an inline arrow function
const cleanText = text.replace(/\b(fuck|dead)\b/gi, match => '*'.repeat(match.length));
console.log(cleanText);

