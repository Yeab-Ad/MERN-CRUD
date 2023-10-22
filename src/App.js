import React from "react";
import { Container } from "@mui/material";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <Container maxWidth="md">
      <AddProductForm />
      <ProductList />
    </Container>
  );
}

export default App;
