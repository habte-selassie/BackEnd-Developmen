const fs = require('fs')
const server = require('http').createServer()

server.on('request',(req,res)=>{
    /////////solution 1
    // fs.readFile('test-file.txt',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     res.end(data)
    // })

    /////////// Solution 2 : Streams
    // const readable = fs.createReadStream('test-files.txt')
    // readable.on('data',chunk=>{
    //     res.write(chunk)
    // })
    // readable.on('end',()=>{
    //     res.end()
    // })
    // readable.on('error',err=>{
    //     console.log(err);
    //     res.statusCode(500)
    //     res.end('File Is No Foundinga')
    // })
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res)
})
server.listen(9009,()=>{
    console.log(`Listening`);
})