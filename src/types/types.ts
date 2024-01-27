export type dates = "01-01-2020" | "02-01-2020" | "03-01-2020" | "04-01-2020" | "05-01-2020" | "06-01-2020" | "07-01-2020" | "08-01-2020" | "09-01-2020" | "10-01-2020"

export interface IDiaryEntry {
  "id": string
  "type": string
  "date": dates
  "commentary": string
}
// export type NonSensitiveDiaryEntry = Pick<IDiaryEntry, "id uuid" | "type" | "dates">;
// export type NonSensitiveDiaryEntry = Pick<IDiaryEntry,  Exclude<keyof IDiaryEntry, 'commentary'>>;

export type NonSensitiveDiaryEntry = Omit<IDiaryEntry, "commentary">;

export type NonIdDiaryEntry = Omit<IDiaryEntry, "id">;