const { createWriteStream, createReadStream } = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');

async function createBundle() {
  try {
    const bundleWriteCss = createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'))
    const files = await readdir(path.join(__dirname, 'styles'), {withFileTypes: true})
    console.log(files);
    for (let file of files) {
      const sourceFiles = path.join(path.join(__dirname, 'styles'), file.name)
      if (file.isFile() && path.extname(sourceFiles) === '.css'){
        const styleRead = createReadStream(sourceFiles, 'utf8')
        styleRead.pipe(bundleWriteCss)
      }
    }
  } catch (error) {
    console.log(error.message);
  }
} 

createBundle()