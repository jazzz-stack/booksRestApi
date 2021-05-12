const express = require('express')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
// connect mongodb atlase

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongodb");
    }).catch((error) => {
        console.log(error)
    })

// start server
app.listen(port, () => {
    console.log("Server is running on port no: " + port);
})