const express = require('express');
const app = express();
const port = 8000;
const path = require("path")

const static  = path.join(__dirname, "../public")
app.use(express.static(static))
app.set("view engine", "hbs")


app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("page404")
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})