import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YearSelector } from "../components/YearSelector";
import { Link } from "react-router-dom";

import { MatchDetailsCard } from "../components/MatchDetailsCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatchData = async () => {
      const respone = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      const data = await respone.json();
      setMatches(data);
    };
    fetchMatchData();
  }, [teamName, year]);

  return (
    <div className="section ">
      <div className="matchpage-heading">
        <h1>
          {teamName} matches in {year}
        </h1>
        <Link to="/">
          <h4>back home</h4>
        </Link>
      </div>

      <div className="year-selector">
        <div className="year">
          <h4>select year</h4>
          <YearSelector teamName={teamName} />
        </div>

        <div>
          {matches.length > 0 ? (
            matches.map((match) => (
              <MatchDetailsCard
                key={match.id}
                match={match}
                teamName={teamName}
              />
            ))
          ) : (
            <h2 className="no-match-played">
              No matches played by
              <span>{teamName}</span>
              in the year
              <span>{year}</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
