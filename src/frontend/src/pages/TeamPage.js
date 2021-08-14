import { React, useEffect, useState } from "react";

import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ latestMatches: [] });

  const fetchMatchData = async () => {
    const respone = await fetch(
      "http://localhost:8080/team/Royal Challengers Bangalore"
    );
    const data = await respone.json();
    setTeam(data);
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div className="teamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailsCard match={team.latestMatches[0]} />
      {team.latestMatches.slice(1).map((match) => (
        <MatchSmallCard match={match} />
      ))}
    </div>
  );
};
