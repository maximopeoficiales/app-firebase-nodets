import { Router } from "express";
import { indexController } from "../controllers/index.controller";
const router: Router = Router();
router.get("/", indexController.index);
router.post("/products", indexController.createProduct);
router.get("/products", indexController.getProducts);
router.get("/products/:id", indexController.getProduct);
router.delete("/products/:id", indexController.deleteProduct);
router.put("/products/:id", indexController.putProduct);

export default router;
