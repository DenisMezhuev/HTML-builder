const fs = require('fs')
const path = require('path');
const process = require('process');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdin.on('data', (chunk) => {
  const chunkToString= chunk.toString();

  if (chunkToString.match('exit')) return process.exit();

  writeStream.write(chunkToString);
});
process.stdout.write('Hello developer!\nType text here:\n');

writeStream.on('error', (err) => console.log(err));
process.on('SIGINT', () => process.exit());

process.on('exit', () => process.stdout.write('Bye, see you again.'));



