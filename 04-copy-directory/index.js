
const {mkdir, readdir, copyFile, rm} = require('fs/promises')
const path = require('path')

async function copyDir() {
  try {
    await rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true })
    await mkdir(path.join(__dirname, 'files-copy'))
    const files = await readdir(path.join(__dirname, 'files'), { recursive: true })
  
    for (let file of files) {
      const source = path.join(path.join(__dirname, 'files'), file)
      const destination = path.join(path.join(__dirname, 'files-copy'), file)
      await copyFile(source, destination)
    }
  } catch (err) {
    console.log(err.message);
  }
}

copyDir()