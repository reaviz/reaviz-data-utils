import { startOfDay, subDays } from "date-fns";

export const randomNumber = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + min);

export const generateDate = (offset: number) =>
  subDays(startOfDay(new Date()), offset);
