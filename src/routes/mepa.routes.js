import Router from "express";
import cors from 'cors';
// import mercadoPago from "../controllers/mepa.controller.js";
import { mercadoPago } from "../controllers/mepa.controller.js";
const router = Router();

export const mepaRoutes = (app) => {

    app.use(cors());
    app.use("/api", router);
    router.get("/pagar", mercadoPago);
};