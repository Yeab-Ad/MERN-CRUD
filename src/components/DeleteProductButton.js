import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

const DeleteProductButton = ({ productId, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/products/${productId}`)
      .then(() => {
        onDelete(productId);
      })
      .catch((error) => {
        console.error("Error deleting product: ", error);
      });
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteProductButton;
