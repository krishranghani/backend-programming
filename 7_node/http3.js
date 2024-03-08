const http = require('http');

const googal = http.createServer((req, res)=> { res.end('Welcome to googal server ....'); });

googal.listen(8910, ()=>{

console.log('Server Start at port 8910');
});
