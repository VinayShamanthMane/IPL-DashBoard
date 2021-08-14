import { React } from "react";
import { Link } from "react-router-dom";

export const MatchDetailsCard = ({ match, teamName }) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="matchDetailsCard">
      <h2>Latest match</h2>
      <h1>
        vs <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <h2>{match.date}</h2>
      <h3>{match.venue}</h3>
      <h3>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
};
