module.exports = (command)=>{

    const child_process = require('child_process');
  
    child_process.execFile(__dirname + '/VAL.bat', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });
  }