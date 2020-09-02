import { Request, Response } from "express";
import db from "../database";
class IndexController {
  public index(req: Request, res: Response) {
    return res.status(200).json({ message: "hola mundo" });
  }
  public async createProduct(req: Request, res: Response): Promise<any> {
    try {
      const { name } = req.body;
      await db.collection("products").doc().create({ name });
      return res
        .status(200)
        .json({ message: "Se creo correctamente el producto" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  public async getProducts(req: Request, res: Response): Promise<any> {
    try {
      const querySnapshot = await db.collection("products").get();
      const { docs } = querySnapshot;
      const response = docs.map((doc) => ({
        id: doc.id, //get id
        name: doc.data().name, //get property name
      }));
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  public async getProduct(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const doc = db.collection("products").doc(id);
      const item = await doc.get();
      const response = item.data();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  public async deleteProduct(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const doc = db.collection("products").doc(id);
      await doc.delete();
      return res.status(200).json({ message: `Se elimino el producto ${id}` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  public async putProduct(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const doc = db.collection("products").doc(id);
      await doc.update({ name });
      return res
        .status(200)
        .json({ message: `Se actualizo el producto ${id}` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export const indexController = new IndexController();
