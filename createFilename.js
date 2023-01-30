const fs = require('fs');
const path = require('path');
const pathsToCheck = ['./']
fs.readdir('./',(err,files)=>{
    console.log(files)
    fs.writeFile(path.join(__dirname, 'files.json'), JSON.stringify(files.filter((item)=>item[0]!=='.')), 'utf-8',()=>{})
})