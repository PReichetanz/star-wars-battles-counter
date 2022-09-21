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
