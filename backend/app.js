const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")

app.use(express.json())

//Route Imports
const products = require("./routes/productRoute")

app.use("/api/v1", products)

// Middleware For Errors
app.use(errorMiddleware)

module.exports = app