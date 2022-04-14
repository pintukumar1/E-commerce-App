const Product = require("../models/product")

const createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({ msg: "success", product })
}

const getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "this route will fetch the products from database."
    })
}

exports.getProducts = getProducts
exports.createProduct = createProduct