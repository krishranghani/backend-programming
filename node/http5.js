const http = require('http');

const pubg = http.createServer((req, res)=> {
     res.end('Welcome to pubg Server ....');
     res.write(''); 

});

pubg.listen(1314, ()=>{

console.log('Server Start at port 1314');
});