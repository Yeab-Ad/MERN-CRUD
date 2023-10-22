const Product = require("./../Models/Product");

// Controller actions
const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createProduct: async (req, res) => {
    console.log("first");
    const { name, description, price } = req.body;
    const newProduct = new Product({ name, description, price });
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndRemove(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = productController;
