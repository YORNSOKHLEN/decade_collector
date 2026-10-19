const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Kamen Rider Decade",
    price: 25,
    image: "",
    description: "Kamen Rider collectible item",
  },
  {
    id: 2,
    name: "Kamen Rider Figure",
    price: 35,
    image: "",
    description: "Collectible action figure",
  },
];

// Test the server
app.get("/api", (req, res) => {
  res.json({ message: "Backend API is running!" });
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get one product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
