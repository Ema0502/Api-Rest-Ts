import express from "express";
const router = express.Router();
import * as diaryServices from "../services/diaryServices"
import toNewDairyEntry from "../utils/utils";

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
  try {
    // const { type, date, commentary } = req.body;
    const newDairyEntry = toNewDairyEntry(req.body);

    const AddedNewEntry = diaryServices.addDiary(newDairyEntry);
    return res.status(201).json(AddedNewEntry);
  } catch (error) {
    return res.status(404).json({ error })
  }
})

export default router;