import styled from "styled-components";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Stars from "./components/Stars";
import Stats from "./components/Stats";

import { useState, useCallback, useEffect } from "react";
import { getDays, saveBattle } from "./services/days.js";

export default function App() {
  const [days, setDays] = useState([]);
  // eslint-disable-next-line
  const [lastBattle, setLastBattle] = useState(null);

  const loadingDays = useCallback(async () => {
    try {
      const data = await getDays();
      setDays(data);
      setLastBattle(
        data
          .find(
            (day) =>
              day.date.day === new Date().getDate() &&
              day.date.month === new Date().getMonth() &&
              day.date.year === new Date().getFullYear()
          )
          ?.battles.slice(-1)[0]
      );
    } catch (error) {
      console.error(error);
    }
  }, [setLastBattle]);

  useEffect(() => {
    loadingDays();
  }, [loadingDays]);

  const handlePoints = async (newBattle) => {
    await saveBattle(newBattle);
    loadingDays();
  };

  return (
    <Wrapper>
      <Stars />
      <Stats days={days} />
      <Banner />
      <Form handlePoints={handlePoints} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
`;
