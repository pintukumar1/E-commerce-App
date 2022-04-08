const getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "this route will fetch the products from database."
    })
}

exports.getProducts = getProducts