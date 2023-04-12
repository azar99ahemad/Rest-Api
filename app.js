const express = require("express");
const { stringify } = require("nodemon/lib/utils");
const dotenv = require("dotenv").config();

const app= express();

app.use(express.json());
app.use("/api/employee", require("./routes/employeedata"))

const port= process.env.PORT||5000;

app.listen(port, ()=>{
    console.log(`Connected on port ${port}`);
});

