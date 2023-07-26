import "express-async-errors";
import "reflect-metadata";
import "@shared/container";
import express from "express";

import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };
