export const getDays = async () => {
  try {
    const response = await fetch("api/days");

    if (response.ok) {
      const days = await response.json();
      return days;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const saveBattle = async ({ side, points }) => {
  try {
    const response = await fetch("api/days", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ side, points }),
    });
    if (response.ok) {
      const newDays = await response.json();
      return newDays;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
