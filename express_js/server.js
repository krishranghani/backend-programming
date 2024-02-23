const express = require("express");
const server = express();
const path = require("path");

server.post("/" ,(req,res) => {
    res.send("post Method");
});
server.get("/" ,(req,res) => {
    res.end("Welcome to Express.Js");
});
server.put("/" ,(req,res) => {
    res.status(400).json({massage : "Put Call Method"});
});
server.patch("/" ,(req,res) => {
    res.sendFile(path.join(__dirname, "abc.txt"));
});
server.delete("/" ,(req,res) => {
    res.sendStatus(201);
});


server.listen(5050,() => {
    console.log("Server start At http://localhost:5050");

});