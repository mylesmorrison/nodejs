// Built in modules 

// OS 
// PATH
// FS 
// HTTP

const os = require('os')

// info about current user 
const user = os.userInfo()

// method returns the system uptime in seconds
//console.log(`The Sytem Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMEm:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)