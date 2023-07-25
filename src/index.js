require('dotenv').config()
require('express-async-errors')
const express = require('express')
const router = require('./routes/authRoutes')
const app = express()

app.use(express.json())
app.use(router)

app.use((error, req, res, next) => {

	console.log('============= ERROR HANDLER =============')
	console.log(error)
	res.sendStatus(500)
})

app.listen(process.env.PORT, () => {
  console.log(`Server initialized with success in http://localhost:${process.env.PORT}`)
})
