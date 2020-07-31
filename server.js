const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//
const PORT = process.env.PORT || 3000;

const db = require("./models");

//create an app
const app = express();

//use adds middleware
//first the logger
app.use(morgan("dev"));

//next the body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static middleware
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//create a single hello world route
app.get("*", (req, res)=>{
    res.send("<h1>Hello, World!</h1>");
});

//listen 
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));