const express = require("express");

const port = 3000;
const db = require("./config/mongodb");
const productRouter=require("./routes/index");


const app = express();

app.use(express.json());

app.use('/api',productRouter);

app.listen(port, function(err){
    if(err){console.log("Error in running Server", err); return;}
    console.log("Server is up and running at port", port);
});