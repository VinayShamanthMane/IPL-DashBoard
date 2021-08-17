import { React } from "react";
import { Link } from "react-router-dom";

export const TeamTile = ({ teamName }) => {
  if (!teamName) return null;
  return (
    <Link to={`/teams/${teamName}`}>
      <div className="team-tile">
        <h2>{teamName}</h2>
      </div>
    </Link>
  );
};
