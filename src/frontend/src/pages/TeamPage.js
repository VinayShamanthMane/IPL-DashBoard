import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ latestMatches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeamData = async () => {
      const respone = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`
      );
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
          <img
            src={`${process.env.PUBLIC_URL}/images/${teamName}.jpg`}
            alt="logo"
          />
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
        <div className="smallcards-container">
          {team.latestMatches.slice(1).map((match) => (
            <div>
              <MatchSmallCard
                key={match.id}
                teamName={team.teamName}
                match={match}
              />
            </div>
          ))}
        </div>

        <div className="links">
          <div className="nav-links">
            <Link
              to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
            >
              <h3>More...</h3>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">
              <h4> Back home </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
