import express from "express";
const router = express.Router();
import * as diaryServices from "../services/diaryServices"

router.get("/", (_req, res) => {
  res.status(200).json({message:"get successful", diaryServices: diaryServices.getEntries()})
})

router.get("/:id", (req, res) => {
  // const id = +req.params.id <<<<<< en caso de que sea un number
  const id = req.params.id;
  const diary = diaryServices.findById(id);
  if (!diary) return res.status(404).json({ message: 'Diary not found' });
  return res.status(200).json(diary);
})

router.post("/", (req, res) => {
  const { type, date, commentary } = req.body;
  const newEntry = diaryServices.addDiary({type, date, commentary});
  return res.status(201).json(newEntry);
})

export default router;