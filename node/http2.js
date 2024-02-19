const http = require('http');

const instagram = http.createServer((req, res)=> { res.end('Welcome to instagarm server ....'); });

instagram.listen(4567, ()=>{

console.log('Server Start at port 4567');
});
