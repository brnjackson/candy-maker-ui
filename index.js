const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')
const path = require('path')

const app = express()

app.use(express.static('client/build'))

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:name', getManufacturerById)

app.get('/api/products', getAllProducts)

app.get('/api/products/:name', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
