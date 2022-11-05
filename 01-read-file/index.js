const fs = require('fs');
const path = require('path')
const file = path.join(__dirname, 'text.txt')

fs.readFile(file, 'utf8', (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(content);
  }
})

