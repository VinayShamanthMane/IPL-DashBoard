import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import items from "../data";

export const TeamPage = () => {
  const [team, setTeam] = useState({ latestMatches: [] });
  const [logos, setLogos] = useState(items);

  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeamData = async () => {
      const respone = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await respone.json();
      setTeam(data);
    };
    fetchTeamData();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="section">
      <div className="heading">
        <div className="team-name">
          <h1>{team.teamName}</h1>
        </div>
        <div className="win-loss">
          <h4>Wins / Losses</h4>

          <PieChart
            className="piechart"
            data={[
              {
                title: "Losses",
                value: team.totalMatches - team.totalWins,
                color: "#a72121",
              },
              { title: "Wins", value: team.totalWins, color: "#206526" },
            ]}
          />
        </div>
      </div>
      <MatchDetailsCard
        teamName={team.teamName}
        match={team.latestMatches[0]}
      />
      <div className="smallcards">
        {team.latestMatches.slice(1).map((match) => (
          <MatchSmallCard
            key={match.id}
            teamName={team.teamName}
            match={match}
          />
        ))}
        <Link to="#">More...</Link>
      </div>
      <img src={logos[0].img} alt="food" />
      <h3>{logos[0].title}</h3>
    </div>
  );
};
