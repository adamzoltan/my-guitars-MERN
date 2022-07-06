require('dotenv').config()
const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const guitarsRoutes = require('./routes/guitars')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//routes
app.use('/api/guitars', guitarsRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('connected to DB, listening on port 4000');
        })
    })
    .catch((error)=>{
        console.log(error);
    })