//Libraries
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const env = require("dotenv").config();


//Initialize server
const setup = async function() {
    const app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.set("view engine", "ejs");

    // Start server
    const running = app.listen(3000);
    if (running) {console.log(`:: App listening on port 8000 ::`);}
}

//Connect to database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    setup().catch(err => {console.log(err);}); 
});