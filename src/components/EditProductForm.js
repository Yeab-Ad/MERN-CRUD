 import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const EditProductForm = ({ product, onProductUpdate }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/products/${product._id}`, {
        name,
        description,
        price,
      })
      .then((response) => {
        onProductUpdate(product._id, response.data);
      })
      .catch((error) => {
        console.error("Error updating product: ", error);
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
      />
      <TextField
        label="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default EditProductForm;
