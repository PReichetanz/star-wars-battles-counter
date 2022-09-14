import styled from "styled-components";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Stars from "./components/Stars";
import Stats from "./components/Stats";

import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [days, setDays] = useLocalStorage("days", []);

  const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const handlePoints = (newData) => {
    const existingDayIndex = days.findIndex(
      (day) =>
        day.date.day === currentDate.day &&
        day.date.month === currentDate.month &&
        day.date.year === currentDate.year
    );

    if (existingDayIndex < 0) {
      const newDay = {
        date: currentDate,
        battles: [newData],
      };
      setDays([...days, newDay]);
    } else {
      const updatedExistingDay = {
        ...days[existingDayIndex],
        battles: [...days[existingDayIndex].battles, newData],
      };
      const newDays = days.map((day, index) => {
        if (index !== existingDayIndex) {
          return day;
        } else {
          return updatedExistingDay;
        }
      });
      setDays(newDays);
    }
  };

  return (
    <Wrapper>
      <Stars />
      <Stats days={days} />
      <Banner />
      <Form days={days} handlePoints={handlePoints} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
`;
