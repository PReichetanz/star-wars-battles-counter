import mongoose from "mongoose";

import { DaySchema } from "./Day.js";

export const Day = mongoose.model("Day", DaySchema, "days");
