const fs = require('fs')
const crypto = require('crypto')


 const start = Date.now()

 process.env.UV_THREADPOOL_SIZE=4

setTimeout(()=>{ console.log('Timer 1 Finish')},0)
setTimeout(()=>{ console.log('Timer 4 Finish')},4000)

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished');

    setTimeout(()=>{ console.log('Timer 1 Finish')},0)
    setTimeout(()=>{ console.log('Timer 4 Finish')},4000)
    setImmediate(()=>{ console.log('Immidiate 1 is Finishing')})
 
process.nextTick(()=>{
    console.log('Process.nexttick');
})
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512')
    console.log(Date.now()-start,'Password Encrypted');

crypto.pbkdf2Sync('password','salt',100000,1024,'sha512')
    console.log(Date.now()-start,'Password Encrypted');

crypto.pbkdf2Sync('password','salt',100000,1024,'sha512')
    console.log(Date.now()-start,'Password Encrypted');

crypto.pbkdf2Sync('password','salt',100000,1024,'sha512')
    console.log(Date.now()-start,'Password Encrypted');

})
console.log('Hi From Toplevel Code');