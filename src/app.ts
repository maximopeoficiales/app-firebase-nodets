//imports
import express, { Express } from "express";
import indexRoutes from "./routes/index.route";
//initializations
const app: Express = express();
//settings
//middlewares
app.use(express.json()); //devolver datos como json
app.use(express.urlencoded({ extended: false })); //forms envian json
//routes
app.use("/api", indexRoutes);

export default app;
