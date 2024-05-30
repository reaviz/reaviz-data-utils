import { startOfDay, subDays } from "date-fns";

export const randomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

export const generateDate = (offset) => subDays(startOfDay(new Date()), offset);
