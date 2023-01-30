const fs = require('fs');
const path = require('path');
async function init(){
    debugger
    const data = await fs.readFileSync(path.resolve('files.json'), 'utf8')
    const oldFiles = JSON.parse(data) || []
    let files = (fs.readdirSync(path.resolve('./')) || []).concat(oldFiles)
    files = Array.from(new Set(files)).filter(item=>!item.startsWith('.'))
    fs.writeFile(path.join(__dirname, 'files.json'), JSON.stringify(files.filter((item)=>item[0]!=='.')), 'utf-8',()=>{})
}
init()