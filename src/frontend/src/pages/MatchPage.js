import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

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
    <div className="matchPage">
      <h1>Match page</h1>
      {matches.map((match) => (
        <MatchDetailsCard match={match} teamName={teamName} />
      ))}
    </div>
  );
};
