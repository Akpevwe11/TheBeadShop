const express = require('express')
const products = require('./data/products')
const categories = require('./data/categories')
const { application } = require('express')
const path = require('path')

const app = express()

// app.get('/', (req, res) => {
//     res.send('API is running....')
// })

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/api/categories', (req,res) => {
    res.json(categories) 
})

app.get('/api/cardholders_category', (req,res) => {
    res.json(products)
})

app.get('/api/products', (req, res) => {
    res.json(products) 
})

app.get('/api/products/:id', (req, res) => {

    const product = products.find( p => p._id === req.params.id) 
       res.json(product)

})
app.use(express.static(path.join(__dirname, "../frontend/build"))); 
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build/index.html'))); 
app.listen(5000, console.log('Server running on port 5000'))