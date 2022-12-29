const express = require('express');
const route = require("./routes/router")
const mongoose  = require('mongoose');
const app = express();


app.use(express.json())


mongoose.connect("mongodb+srv://kunal0709:Singhkunal7@cluster0.u5yk4f2.mongodb.net/Project1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.use( (req ,res) => {
    res.status(404).send({status : false , message :`Page Not Found , Given URL ${req.url} is incorrect for this application.`})
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
