const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://manish:manish@cluster0.tzuto4s.mongodb.net/productData?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports=db;