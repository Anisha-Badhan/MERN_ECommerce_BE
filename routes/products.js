const express = require('express')
const router = express.Router();

//midddle ware
const middleware = (req, res, next) => {
    console.log("This is middleware")
}


router.get('/', (req, res) => {
    res.send("Categories/Home page ")
})

router.get('/api/products', (req, res) => {
    res.send("Products are displayed here")
})

router.get('/api/products/search', (req, res) => {
    res.send("Products are displayed here")
})

router.post('/api/add', (req, res) => {
    res.send("Products are added here")
})

router.patch('/api/products/:id', middleware, (req, res) => {
    res.send("Products are updated here")
})

router.delete('/api/products/:id', middleware, (req, res) => {
    res.send("Products are deleted here")
})


router.get('/api/sign_in', (req, res) => {
    res.send("User will sign in here")
})

router.post('/api/sign_up', (req, res) => {
    res.send("User will sign up")
})

module.exports = router