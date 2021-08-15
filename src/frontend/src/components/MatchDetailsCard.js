import { React } from "react";
import { Link } from "react-router-dom";

export const MatchDetailsCard = ({ match, teamName }) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isTeamWin = match.matchWinner === teamName;
  return (
    <div
      className={
        isTeamWin ? "matchDetailsCard winner" : "matchDetailsCard loser"
      }
    >
      <div>
        <h4>Latest match</h4>
        <span className="vs">vs</span>
        <h2>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h2>
        <h4>{match.date}</h4>
        <h3>{match.venue}</h3>
        <h3>
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </h3>
      </div>

      <div className="additional-details">
        <h4>First Innings</h4>
        <p>{match.team1}</p>
        <h4>Second Innings</h4>
        <p>{match.team2}</p>
        <h4>Man of the match</h4>
        <p>{match.playerOfMatch}</p>
        <h4>Umpires</h4>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
};
