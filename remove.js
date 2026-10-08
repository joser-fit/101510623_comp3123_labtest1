const fs=require('fs');
const path=require('path')

const logsDirectory=path.join(process.cwd(),'Logs')

if(!fs.existsSync(logsDirectory)){  // checks if logsDir exists
    console.log('The Logs directory is not available')
}
else{
    // read files in dir
const files=fs.readdirSync(logsDirectory);

// List each file in console.
for(const fileName of files){
   console.log(fileName);
}
}
