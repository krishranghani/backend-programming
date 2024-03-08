const fs = require("fs");
const { add,product}=require("./basic.js");
const { log } = require("console");

/* ======= File Open Method ======= */
// ------- Asynchronously Method -------
// fs.open('abc.txt',(err, data)=>{
//     if(err){
//         console.log('failed !!! file is not open ');
//     }
//     else{
//         console.log('file is open sucessfully');
//     }
// })

// ------- Synchronously Method -------
// fs.openSync('abc.txt');
// console.log('file open sucessfully');





/* ======= File Read Method ======= */

// ------- Asynchronously Method -------
// fs.readFile('abc.txt','utf8',(err,data)=>{
//     if(err)
//     console.log("Failde to read file");
// else
// console.log(data);
// });

// ------- Synchronously Method -------
// let data = fs.readFileSync('abc.txt','utf8');
// console.log(data);



/* ======= File Write Mode ======= */
// ------- Asynchronously Method -------
// let txt =`#include<stdio.h>
// int main(){
//     printf("Welcome In The World");
// }`;

// fs.writeFile("basic.c",txt,(err,data)=>{
//     if(err) console.log("Failed To Write File");
//     else console.log("File Written sucessfuly");
// }
// );

// ------- Synchronously Method -------
// fs.writeFileSync("hello.c",txt);
// console.log("File Written Sucessfuly");


/* ======= File Append Method ======= */

// ------- Asynchronously Method -------
// let txt = // Good Morning;
// fs.appendFile("hello.c",txt,(err,data)=>{
//     if (err) console.log("Failed To Append File");
//     else console.log("Successfully Appended File");
// });


// ------- Synchronously Method -------
// fs.appendFileSync("basic.c",txt);
// console.log("File Append Sucessfully");


/* ======= File Rename Method ======= */

// ------- Asynchronously Method -------
// fs.rename('basic.c','hello2.c',(err)=>{
//     if (err) console.log("Failed To Rename File");
//     else console.log("Successfully Renamed File");
// });

// ------- Synchronously Method -------
// fs.renameSync('hello2.c', 'b.c');
// console.log('File Renamed!');


/* ======= Close Method ======= */

// ------- Asynchronously Method -------
// fs.close(2,(err)=>{
//     if (err) console.log("Failed To Close File");
//     else console.log("Successfully Closed File");
// });

// ------- Synchronously Method -------
// fs.closeSync(2);
// console.log("file Closed Sucessfully");



/* ======= Delete Files ======= */

// ------- Asynchronously Method -------
// fs.unlink('hello.c',(err) => {
//     if (err)
//     console.log('File deleted successfully!');
//   });

// ------- Synchronously Method -------
fs.unlinkSync("b.c");
console.log("deleting an existing file");
