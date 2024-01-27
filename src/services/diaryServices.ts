import { IDiaryEntry, NonSensitiveDiaryEntry } from "../types/types";
import diaryData from "../utils/api-utils.json";

const diaries: Array<IDiaryEntry> = diaryData as Array<IDiaryEntry>;

export const getEntries = (): IDiaryEntry[] => diaries;

// ts no es capaz de filtrar el tipo de resultado de la función que se le pasa a filtrar
// solo controla la informacion estatica
export const getWithoutSensitiveDiaryInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({id, type, dates}) => {
    return {
      id,
      type,
      dates
    }
  });
}; 

export const addEntry = () => null;