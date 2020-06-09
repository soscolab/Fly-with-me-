const express = require('express')
const mongoose = require("mongoose");
const Users = require('./models/Users');


const app = express()
app.use(express.json({ limit: '1mb' }))

app.use(require('./routes'));



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
})



const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));





















/*const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Bodyparser middleware
app.use(express.json)
//app.use(require('./routes'));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));



*/
