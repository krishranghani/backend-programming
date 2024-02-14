const fs = require("fs");

// fs.open('abc.txt',(err, data)=>{
//     if(err){
//         console.log('failed to open file');
//     }
//     else{
//         console.log('file open sucessfully');
//     }
// })

fs.openSync('abc.txt');
console.log('file open sucessfully');