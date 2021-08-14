import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ latestMatches: [] });
  const { teamName } = useParams();
  const fetchMatchData = async () => {
    const respone = await fetch(`http://localhost:8080/team/${teamName}`);
    const data = await respone.json();
    setTeam(data);
  };

  useEffect(() => {
    fetchMatchData();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="teamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailsCard
        teamName={team.teamName}
        match={team.latestMatches[0]}
      />
      {team.latestMatches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}
    </div>
  );
};
