const crypto = require('crypto');

// Generate a secure salt
const salt = crypto.randomBytes(16).toString('hex');
console.log(salt);
