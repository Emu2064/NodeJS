// const express = require("express");
import express from "express";
import { router } from "./router.js";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api", router);
