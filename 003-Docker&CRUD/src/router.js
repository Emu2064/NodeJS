import { Router } from "express";

const router = Router();

//endpoints
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/test", (req, res) => {
  res.status(200).send("This is the test section");
});

router.get("/me", (req, res) => {
  res.status(200).json({
    name: "Emu",
    age: 22,
    address: {
      district: "Rajshahi",
      Division: "Rajshahi",
    },
  });
});

router.get("/department", (req, res) => {
  res.status(200).send("This is the department section");
});

export { router };
