import connectToMongodb from "../_database/connect-to-mongodb.js";
import { Day } from "../_database/models/index.js";

const handler = async (request, response) => {
  console.log(request);
  console.log("handler was called");
  const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  try {
    await connectToMongodb();
    console.log("connected?");

    if (request.method === "GET") {
      const days = await Day.find({});
      console.log("days", response.json(days));
      // looks like Day.find is not working
      return response.json(days);
    }

    if (request.method === "POST") {
      const days = await Day.create(request.body);
      console.log(request.body);
      return response.json(days);
    }

    if (request.method === "PATCH") {
      const days = await Day.findOneAndUpdate(
        { date: request.body.date },
        { battles: [request.body.battles] },
        { new: true }
      );
      return response.json(days);
    } else {
      throw new Error("Route not supported");
    }
  } catch (error) {
    console.log(request);
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
