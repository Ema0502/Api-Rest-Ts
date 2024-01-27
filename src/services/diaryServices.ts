import { IDiaryEntry } from "../types/types";
import diaryData from "../utils/api-utils.json";

const diaries: Array<IDiaryEntry> = diaryData as Array<IDiaryEntry>;

export const getEntries = () => diaries;

export const addEntry = () => null;