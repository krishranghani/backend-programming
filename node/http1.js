// http Module

const http = require('http');

const server = http.createServer((req, res)=> { res.end("Welcome to Local Server  ...."); });

server.listen(1234, ()=>{

console.log('Server Start at port 1234');
});


const instagram = http.createServer((req, res)=> { res.end('Welcome to instagarm server ....'); });

instagram.listen(4567, ()=>{

console.log('Server Start at port 4567');
});


const googal = http.createServer((req, res)=> { res.end('Welcome to googal server ....'); });

googal.listen(8910, ()=>{

console.log('Server Start at port 8910');
});


const game = http.createServer((req, res)=> { res.end('Welcome to game Server  ....'); });

game.listen(1112, ()=>{

console.log('Server Start at port 1112');
});


const pubg = http.createServer((req, res)=> { res.end('Welcome to game Server ....'); });

pubg.listen(1314, ()=>{

console.log('Server Start at port 1314');
});