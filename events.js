const EventEmmiter = require('events')
const http = require('http')

class Sales extends EventEmmiter{
    constructor(){
       super() 
    }
}
const myEmmiter = new Sales()

myEmmiter.on('newsale',()=>{
    console.log('there was new sale');
})

myEmmiter.on('newsale',()=>{
    console.log('customer name:john');
})

myEmmiter.on('newsale',stock=>{
    console.log(`There are new ${stock} iten`);
})
myEmmiter.emit('newsale',9)

/////////////////////////////////////////

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log('Request recieved');
    res.end('Request recieved')
})

server.on('request',(req,res)=>{
 console.log('Another Request ')
})

server.on('close',()=>{
    console.log('Server Closed');
})

server.listen(8000,()=>{
    console.log('Waiting for Request');
})
