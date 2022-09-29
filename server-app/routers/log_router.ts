import express from "express";
const router = express.Router();
import LogService = require("../services/log_service");

export default router.post("/log", (req, res) => {
  const log: LogService.LogService = new LogService.LogService();
  const result: string = log.logIt(req.body);
  return res.json(result);
});
