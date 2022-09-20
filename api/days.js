import connectToMongodb from "./_database/connect-to-mongodb";
import Day from "./_database/models/Day.js";

const handler = async (request, response) => {
  try {
    await connectToMongodb();

    if (request.method === "GET") {
      const days = await Day.find({});
      return response.json(days);
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
