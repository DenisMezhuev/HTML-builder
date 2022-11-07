const {readdir, stat} = require('fs/promises');
const path = require('path');

async function filesFolder () {
  try {
    const folder = path.join(__dirname, 'secret-folder')
    const files = await readdir(folder, {withFileTypes: true})
    for (let file of files){
      if (file.isFile()){
        const fileStat = await stat(path.join(folder, file.name))
        const fileName = file.name.split('.')[0];
        const extFile = file.name.split('.')[1];
        const sizeFile = fileStat.size / 1000;
        console.log(`${fileName} - ${extFile} - ${sizeFile}kb`);
      }
    }
  } catch (error) {
    console.error(error.message);
  } 
}

filesFolder()