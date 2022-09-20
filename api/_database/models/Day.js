import mongoose from "mongoose";

const BattlesSchema = new mongoose.Schema({
  side: String,
  points: Number,
});

const DaySchema = new mongoose.Schema({
  date: {
    day: Number,
    month: Number,
    year: Number,
  },
  battles: { type: [BattlesSchema], default: undefined },
});

export default mongoose.model("User", DaySchema, "days");
