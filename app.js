const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const productRoutes = require("./routes/productRoutes")

app.get("/", (req, res) => {
    res.send("<h1>Welcome to nodejs</h1>")
})

app.use("/api/product", productRoutes)

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