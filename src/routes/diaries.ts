import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send("get successful")
})

router.post("/", (_req, res)=> {
  res.status(200).send("post successful")
})

export default router;