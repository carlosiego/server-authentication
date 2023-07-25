require('dotenv').config()
const express = require('express')
const router = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(router)


app.listen(process.env.PORT, () => {
    console.log(`Server initialized with success in http://localhost:${process.env.PORT}`)
})
