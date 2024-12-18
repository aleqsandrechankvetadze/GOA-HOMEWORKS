const fs = require('fs');
const path = require('path');

function createFolders() {
  for (let i = 1; i <= 10; i++) {
    const folderName = `folder${i}`
    const classworkFolder = path.join(folderName, 'classwork')
    const homeworkFolder = path.join(folderName, 'homework')

    fs.mkdirSync(classworkFolder, { recursive: true })
    fs.mkdirSync(homeworkFolder, { recursive: true })

    fs.writeFileSync(path.join(classworkFolder, 'classwork.js'), 'console.log("goa best");')
    fs.writeFileSync(path.join(homeworkFolder, 'homework.js'), 'console.log("goa best");')
  }
  console.log('Folders and files created successfully')
}

createFolders()



function deleteFolders(start, end) {
  for (let i = start; i <= end; i++) {
    const folderName = `folder${i}`
    const classworkFolder = path.join(folderName, 'classwork')
    const homeworkFolder = path.join(folderName, 'homework')

    fs.rmSync(classworkFolder, { recursive: true, force: true })
    fs.rmSync(homeworkFolder, { recursive: true, force: true })

    fs.rmdirSync(folderName, { recursive: true })
  }
  console.log(`Folders from ${start} to ${end} deleted successfully`)
}

deleteFolders(3, 7)



function logOperation(action, status) {
  const timestamp = new Date().toLocaleString();
  const logMessage = `${action} at ${timestamp} - Status: ${status}\n`;
  
  fs.appendFileSync('log.txt', logMessage);
}

function createFolders() {
  for (let i = 1; i <= 10; i++) {
    const folderName = `folder${i}`;
    const classworkFolder = path.join(folderName, 'classwork');
    const homeworkFolder = path.join(folderName, 'homework');

    fs.mkdirSync(classworkFolder, { recursive: true });
    fs.mkdirSync(homeworkFolder, { recursive: true });
    fs.writeFileSync(path.join(classworkFolder, 'classwork.js'), 'console.log("goa best");');
    fs.writeFileSync(path.join(homeworkFolder, 'homework.js'), 'console.log("goa best");');
    
    logOperation(`Created folder ${folderName}`, 'Success');
  }
}

createFolders();
