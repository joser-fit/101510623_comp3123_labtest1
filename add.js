const fs=require('fs');
const path=require('path')

const logsDirectory=path.join(process.cwd(),'Logs')

if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory)
}

//Change current working dir. to Logs