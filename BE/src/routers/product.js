import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", getAllProducts);
router.get("/products/:slug", getProduct);
router.delete("/products/:slug", deleteProduct);
router.put("/products/:slug", editProduct);

export default router;
