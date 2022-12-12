import { Server } from "./Server.js";

const server = new Server();

server.listen();

// import express  from "express";
// // const express = require("express");
// const app = express(); ///framware de express

// const morgan = require("morgan");

// app.set("port", process.env.PORT || 3000); //validando un puerto si existe o no
// app.set("json space", 2);
// //midl funcion que procesa datos antes que el servidor lo revice

// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false })); //
// app.use(express.json());
// //3empezando el servidor

// //routes
// app.use(require("./routes/index"));
// app.use("/api/movis", require("./routes/movis"));
// app.listen(app.get("port"), () => {
//   console.log("Server on port");
// });
