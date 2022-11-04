const express = require("express");
const PORT  = process.env.PORT || 5000;
const indexController = require('./controllers/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET , PUT , PATCH , POST , OPTIONS , DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type , Authorization");
    if(req.method === "OPTIONS"){
        return res.sendStatus(200);
    }
    next();
})


app.post("/",indexController.postIndex);
app.get("/",indexController.getIndex);


app.listen(PORT,() => {
    console.log(`🛡️🛡️:::App running on port:${PORT}:::⚡⚡⚡`);
})