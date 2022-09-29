import express from "express";
import * as bodyParser from "body-parser";

const app = express();
const port = 8088;

app.use(bodyParser.json());

import log from "./routers/log_router";

app.use("/log", log);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
