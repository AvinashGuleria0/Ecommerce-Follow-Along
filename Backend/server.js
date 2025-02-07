<<<<<<< HEAD
const express = require('express')

require('dotenv').config()

const connectToDb = require('./src/config/db')

const port = process.env.PORT || 9090;
const db_url = process.env.MONGO_URI;

const app = express();

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("This is home route")
})

app.listen(port, async()=>{
    try{

        await connectToDb(db_url)

        console.log("connected to the database")
        console.log(`The server is running at the port: ${port}`)
    }
    catch(err){
        console.log(err)
    }
})
=======
const app = require("./app");

const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`); // Log the error message
    console.log("Shutting down the server for handling uncaught exception");
    process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });
}

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(
        `Server is running on http://localhost:${process.env.PORT}` // Log the server's URL
    );
});

process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`); // Log the error message
    console.log("Shutting down the server due to unhandled promise rejection.");
    server.close(() => {
        process.exit(1); 
    });
});
>>>>>>> 727bca7b12eeb2bdc5b914247f2976cff0269d7a
