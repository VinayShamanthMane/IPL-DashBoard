import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YearSelector } from "../components/YearSelector";

import { MatchDetailsCard } from "../components/MatchDetailsCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  const fetchMatchData = async () => {
    const respone = await fetch(
      `http://localhost:8080/team/${teamName}/matches?year=${year}`
    );
    const data = await respone.json();
    setMatches(data);
  };

  useEffect(() => {
    fetchMatchData();
  }, [teamName, year]);

  return (
    <div className="section ">
      <div className="year-selector">
        <h1>Match page</h1>
        <YearDetails teamName />
        <div>
          {matches.map((match) => (
            <MatchDetailsCard match={match} teamName={teamName} />
          ))}
        </div>
      </div>
    </div>
  );
};
