const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const productRoutes = require("./routes/productRoutes")
const bodyParser = require('body-parser')

app.use("/api/product", productRoutes)

// app.use(express.json())
app.use(bodyParser.json())

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, () => {
            app.listen(port, () => {
                console.log(`app is listening on port ${port}`);
            })
        })
    } catch (error) {
        console.log(error)
    }
}

start()