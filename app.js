const express = require('express')
const app = express()

app.set("view engine","ejs")

app.use(express.static("public"))
app.get("/web-forge",(req,res)=>{
    res.render("web")
})

app.listen(3000)