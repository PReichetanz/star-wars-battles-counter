import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Stats({ days }) {
  const [currentDay, setCurrentDay] = useState({
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
    battles: [],
  });
  const [statisticsOfCurrentDay, setStatisticsOfCurrentDay] = useState({
    totalNumberOfBattles: 0,
    totalPoints: 0,
    pointsPerBattle: 0,
  });

  useEffect(() => {
    const updateStatistics = (day) => {
      const sumOfPoints = calculatePoints(day);

      if (day.battles.length > 0) {
        setStatisticsOfCurrentDay({
          totalNumberOfBattles: day.battles.length,
          totalPoints: sumOfPoints,
          pointsPerBattle: (sumOfPoints / day.battles.length).toFixed(2),
        });
      } else {
        setStatisticsOfCurrentDay({
          totalNumberOfBattles: day.battles.length,
          totalPoints: sumOfPoints,
          pointsPerBattle: sumOfPoints,
        });
      }
    };

    const calculatePoints = (day) => {
      if (day.battles.length === 0) {
        return 0;
      } else {
        return day.battles
          .map((battle) => Number.parseInt(battle.points, 10))
          .reduce((a = 0, b) => a + b);
      }
    };

    if (
      days.length > 0 &&
      JSON.stringify(days[days.length - 1].date) ===
        JSON.stringify(currentDay.date)
    ) {
      console.log("day aleady exists");
      setCurrentDay(days[days.length - 1]);
      updateStatistics(days[days.length - 1]);
    }
    // eslint-disable-next-line
  }, [days, setCurrentDay, setStatisticsOfCurrentDay]);

  return (
    <StatisticsSection>
      <Heading>Today's Stats</Heading>
      <InformationWrapper>
        <InformationNumber>
          {statisticsOfCurrentDay?.totalNumberOfBattles}
        </InformationNumber>
        <span>Battles</span>
        <InformationNumber>
          {statisticsOfCurrentDay?.totalPoints}
        </InformationNumber>
        <span>Points</span>
        <InformationNumber>
          {statisticsOfCurrentDay?.pointsPerBattle}
        </InformationNumber>
        <span>Average</span>
      </InformationWrapper>
    </StatisticsSection>
  );
}

const Heading = styled.h2`
  font-family: "Starjedi";
`;

const InformationNumber = styled.span`
  font-size: 1.5rem;
`;

const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  justify-items: center;
  grid-auto-flow: column;
`;

const StatisticsSection = styled.section`
  width: 80%;
  margin: 0 auto;
  color: var(--yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
