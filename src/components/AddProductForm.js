import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    axios
      .post("http://localhost:5000/products", { name, description, price })
      .then((response) => {
        console.log(response.data);
        // You can add functionality to update the product list here
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
      });
  };

  return (
    <Box>
      <TextField
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        margin="normal"
        required
        type="number"
      />
      <Button variant="contained" onClick={handleAddProduct}>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductForm;
