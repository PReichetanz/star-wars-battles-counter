import mongoose from "mongoose";

export const DaySchema = new mongoose.Schema({
  date: {
    type: {
      day: Number,
      month: Number,
      year: Number,
    },
    required: true,
  },
  battles: [
    {
      side: String,
      points: { type: Number, required: true },
    },
  ],
});
