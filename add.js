const fs=require('fs');
const path=require('path')

const logsDirectory=path.join(process.cwd(),'Logs')

if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory)
}

//Change current working dir. to Logs

process.chdir(logsDirectory);

for(let i=1; i<=10; i++){
    const fileName=`log${i}.txt`;
    fs.writeFileSync(fileName,`This is log-${i}.`,'utf-8' );
    console.log(fileName);
}