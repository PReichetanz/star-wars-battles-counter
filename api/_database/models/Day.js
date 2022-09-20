import mongoose from "mongoose";

const DaySchema = new mongoose.Schema({
  date: {
    day: Number,
    month: Number,
    year: Number,
  },
  battles: [
    {
      side: String,
      points: Number,
    },
  ],
});

export default mongoose.model("User", DaySchema, "days");
