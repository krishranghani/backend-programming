const http = require('http');

const game = http.createServer((req, res)=> { res.end('Welcome to game Server  ....'); });

game.listen(1112, ()=>{

console.log('Server Start at port 1112');
});
