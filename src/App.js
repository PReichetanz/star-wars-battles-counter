import styled from "styled-components";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Stars from "./components/Stars";
import Stats from "./components/Stats";

import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { saveDays, getDays } from "./services/days";

export default function App() {
  const [days, setDays] = useLocalStorage("days", []);
  const [isDarkSideChosen, setIsDarkSideChosen] = useState(false);

  useEffect(() => {
    const loadDays = async () => {
      try {
        const days = await getDays();
        const newDays = days ?? [];
        setDays(newDays);
      } catch (error) {
        console.log(error);
      }
    };
    loadDays();
  }, [setDays]);

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
      // saveDays([...days, newDay]);
      // test with MongoDB:
      saveDays(newDay);
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
      // saveDays(newDays);
      // test with MongoDB:
      const updatedExistingDayDB = {
        date: currentDate,
        battles: [...days[existingDayIndex].battles, newData],
      };
      saveDays(updatedExistingDayDB);
    }
  };

  const handleSideSwitch = () => {
    setIsDarkSideChosen(!isDarkSideChosen);
  };

  return (
    <Wrapper>
      <Stars />
      <Stats days={days} />
      <Banner />
      <Form
        handlePoints={handlePoints}
        onSideSwitch={handleSideSwitch}
        isDarkSideChosen={isDarkSideChosen}
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
`;
