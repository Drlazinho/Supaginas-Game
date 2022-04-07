const express = require('express');
const app =  express();

app.set("view engine", "ejs")

app.get("/", function (req, res){
  res.render("index");
})
app.get("/page2", function (req, res){
  res.render("page2");
})
app.get("/page3", function (req, res){
  res.render("page3");
})
app.get("/page4", function (req, res){
  res.render("page4");
})
app.get("/page5", function (req, res){
  res.render("page5");
})

app.listen(8080);
console.log("Rodando")