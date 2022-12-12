import express from "express";
import { mepaRoutes } from "./routes/mepa.routes.js";
// import { DBConnection } from "./config/dbConnect.js";
export class Server {
    app;
    port;

    constructor() {
            this.app = express();
            this.port = process.env.PORT || 9000;
            // this.dbConntection();
            this.middlewares();
            this.routes();
        }
        // async dbConntection() {
        //     await DBConnection();
        // }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        mepaRoutes(this.app);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server ");
        });
    }
}