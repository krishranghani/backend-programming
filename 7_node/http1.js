// http Module

const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./HELLO.json","utf-8");


// const server = http.createServer ((req, res)=> {
// res.setHeader('Dummy', 'Dummy Value');
// res.setHeader('Content-type', 'text/html');
// res.setHeader('Content-type', 'application/json');
// res.end('Welcome to Local Server....');
// });


// const server = http.createServer();

// const server = http.createServer ((req, res)=> {
//     res.setHeader('Content-type', 'text/html');
//     res.write('<h1 style="color:red" >Hello</h1>');
//     res.write('{"hello" :123}');
//     res.end(data);
// })

server.on('request', (req, res)=> {
    console.log(req.url);
    res.setHeader('Content-type', 'text/html');
    res.end(data);
})

server.listen(1234, ()=>{

console.log('Server Start at port 1234');
});
