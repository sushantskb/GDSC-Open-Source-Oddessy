const { log } = require("console");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error"));

db.once("open", ()=>{
    console.log("Connected to DB");
});


//Models 
require("./Category");