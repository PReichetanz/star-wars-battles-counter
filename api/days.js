import connectToMongodb from "./_database/connect-to-mongodb";
import Day from "./_database/models/Day.js";

const currentDate = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const handler = async (request, response) => {
  try {
    await connectToMongodb();

    if (request.method === "GET") {
      const days = await Day.find({});
      return response.json(days);
    } else if (request.method === "POST") {
      const isExistingDay = await Day.exists({ date: currentDate });
      console.log("isExistingDay", isExistingDay);

      if (isExistingDay) {
        const updatedDay = await Day.findOneAndUpdate(
          { date: currentDate },
          {
            $push: {
              battles: { side: request.body.side, points: request.body.points },
            },
          },
          { new: true }
        );
        return response.json(updatedDay);
      } else {
        const day = new Day({
          date: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
          battles: [
            {
              side: request.body.side,
              points: request.body.points,
            },
          ],
        });
        const newDay = await day.save();
        return response.json(newDay);
      }
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
