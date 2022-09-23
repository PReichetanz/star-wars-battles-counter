import connectToMongodb from "./_database/connect-to-mongodb";
import Day from "./_database/models/Day.js";

const handler = async (request, response) => {
  try {
    await connectToMongodb();

    if (request.method === "GET") {
      const days = await Day.find({});
      return response.json(days);
    } else if (request.method === "POST") {
      const updatedDay = await Day.findOneAndUpdate(
        {
          date: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
        },
        {
          $push: {
            battles: { side: request.body.side, points: request.body.points },
          },
        },
        { new: true, upsert: true }
      );
      return response.json(updatedDay);
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
