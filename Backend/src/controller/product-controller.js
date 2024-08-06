const Product = require("../models/product");
const upload = require("../config/multer");
const singleUploader = upload.single("photo");

const addProduct = async (req, res) => {
  try {
    singleUploader(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      console.log(req);
      console.log('Image url is', req.file);

      const photo = req.file;
      if (!photo) {
        return res.status(400).json({ message: "Please upload a photo" });
      }

      const data = {
        name: req.body.name,
        photo: photo.location,
        price: req.body.price,
      };

      if (!data.name) {
        return res.status(400).json({ message: "Please enter product name" });
      }
      if (!data.price) {
        return res.status(400).json({ message: "Please enter product price" });
      }

      const response = await Product.create(data);
      console.log("response", response);

      return res.status(200).json({
        message: `Product added successfully`,
        success: true,
        data: [response],
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to add a product",
      success: false,
      error: error,
    });
  }
};


const getAllProducts = async(req , res) => {
    try {
       const products = await Product.find({});
       console.log(products);
       return res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        response: products,
      });
    } catch (error) {
     return res.status(500).json({
      message: "Unable to get all Products",
      success: false,
      error: error,
    });
    }
}


module.exports = {
  addProduct,
  getAllProducts
};
