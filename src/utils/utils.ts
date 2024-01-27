import { NonIdDiaryEntry } from "../types/types";

// se debe controlar la informacion que entra haciendo un post
// entonces se debe controlar como en el ejemplo de abajo

// const parseComment = (commentFromRequest: any) : string => {
//   if (!isString(commentFromRequest)) {
//     throw new Error("Incorrect or missing comment");
//   }
//   return commentFromRequest;
// }

// const isString = (string: any): boolean => {
//   return typeof string === 'string' || string instanceof String;
// }

// se recomiendan los enum para validar mejor la informacion, pero debe crearse en un archivo ts no un d.ts

const toNewDairyEntry = (object: any): NonIdDiaryEntry => {
  const newEntry: NonIdDiaryEntry = {
    type: object.type,
    date: object.date,
    commentary: object.commentary
  }
  return newEntry;
}

export default toNewDairyEntry;