const fs = require('fs');
const usersJson = fs.readFileSync('users.json', 'utf8');

// console.log(usersJson);
// console.log(typeof usersJson);

const users = JSON.parse(usersJson);

// console.log(users);
// console.log(typeof users);

// console.log(users[1]);

// console.log(usersJson[1]);

const restring = JSON.stringify(users);

console.log(typeof restring);
console.log('usersJson.length', usersJson.length, 'restring.length', restring.length);

console.log(usersJson.localeCompare(restring));
