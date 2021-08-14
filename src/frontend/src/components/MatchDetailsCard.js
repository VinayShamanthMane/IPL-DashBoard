import { React } from "react";

export const MatchDetailsCard = ({ match }) => {
  if (!match) return null;
  return (
    <div className="matchDetailsCard">
      <h2>Latest match</h2>
      <h2>Match Details</h2>
      <h4>
        {match.team1} vs {match.team2}
      </h4>
    </div>
  );
};
