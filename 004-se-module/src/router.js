import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/test", (req, res) => {
  res.status(200).send("Hello World from ES module!");
});

// passing a function to catch the app
function configRouter(app) {
  app.use("/api", router);
}
export default configRouter;
