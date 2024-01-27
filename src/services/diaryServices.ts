import { IDiaryEntry, NonIdDiaryEntry, NonSensitiveDiaryEntry } from "../types/types";
import diaryData from "../utils/api-utils.json";

const diaries: Array<IDiaryEntry> = diaryData as Array<IDiaryEntry>;

export const getEntries = (): IDiaryEntry[] => diaries;

// ts no es capaz de filtrar el tipo de resultado de la función que se le pasa a filtrar
// solo controla la informacion estatica
export const getWithoutSensitiveDiaryInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({id, type, date}) => {
    return {
      id,
      type,
      date
    }
  });
};

export const findById = (id: string): IDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  return entry;
}

export const addDiary = (newEntry: NonIdDiaryEntry) => {
  const newDairy = {
    id: 1 + diaries.length.toString(),
    ...newEntry
  }
  diaries.push(newDairy)
  return newDairy;
}