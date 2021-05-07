const express = require('express')
const app = express()
const port = 3000

const defaultRoutes = require('./routes/products')




app.use('/', defaultRoutes)

app.listen(port, ()=> {
    console.log("The app is up and running......")
})


