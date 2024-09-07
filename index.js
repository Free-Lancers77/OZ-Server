import express from "express";

const app = express();

import { startServer} from "./controllers/serverfunction.js";

app.use(express.json());


startServer();
