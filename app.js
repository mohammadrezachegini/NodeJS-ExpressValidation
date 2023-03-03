const express = require("express");
const {ErrorHandler, NotFoundError} = require("./util/errorHandler");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.post("/login")

app.use(NotFoundError)
app.use(ErrorHandler);


app.listen(3000,()=>{
    console.log("Server is runing on port 3000");
})