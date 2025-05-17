const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
port =8000;

//express stuff
app.use('/static',express.static("static"));
app.use(express.urlencoded());

//pug stuff
app.set('view engine', 'Pug');
app.set("views",path.join(__dirname,'views'));
//Endpoints
app.get("/",(req,res)=>{
    const params={'title':'www.Tanzeelcosmetics.com'};
    res.status(200).render("Tanzeel.pug",params);
})
app.post("/",(req,res)=>{
    name = req.body.name
    email = req.body.email
    contact = req.body.contact
    message = req.body.message
    let outputtowrite = `The name of the client is ${name}, his/her email is:${email}, ph# is ${contact},and he/she said :${message}`;
    fs.writeFileSync('output.txt',outputtowrite);
    const params={'message':'Your for, has submitted successfully','title':'mycosmetics.com'};
    res.status(200).render("Tanzeel.pug",params);
})
//start the server
app.listen(port,(req,res)=>{
    console.log(`This application is started successfully on port ${port}`);
})