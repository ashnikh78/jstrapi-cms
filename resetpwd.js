const bcrypt = require('bcryptjs');

// Define the hashed password and the plaintext password to check
const hashedPassword = '$2a$10$eZSBZJ/2kWPKZPHeK3D9keuA/4ZeOOXn9EnBAr44sgNDtmO8mwAUm';
const plaintextPassword = 'Admin@80ld'; // Replace with the plaintext password to check

bcrypt.compare(plaintextPassword, hashedPassword, (err, result) => {
  if (err) {
    console.error('Error verifying password:', err);
  } else if (result) {
    console.log('Password matches!');
  } else {
    console.log('Password does not match.');
  }
});
