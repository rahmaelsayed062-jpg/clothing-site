import express from "express";
import fs from "fs";
import url from "url";
import path from "path";
import { json } from "stream/consumers";
import { searchProducts } from "./utills/search.js";

const port = 3000;
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const ___dirname = path.dirname(__filename);
const productsFile = path.join(___dirname, "data", "products.json");
const products = JSON.parse(fs.readFileSync(productsFile, "utf-8"));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.get("/products/:slug", (req, res) => {
  const slug = req.params.slug;
  const product = products.find((el) => el.slug === slug);
  if (!product) {
    return res.status(404).render("not-found");
  }
  res.render("product", { product });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

console.log("reached bottom of file");

const filterd = searchProducts("medium", products);
console.log("reached bottom of file", filterd);
