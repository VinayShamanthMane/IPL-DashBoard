import { React } from "react";
import { Link } from "react-router-dom";

export const YearSelector = ({ teamName }) => {
  const startDate = process.env.REACT_APP_DATA_START_YEAR;
  const endDate = process.env.REACT_APP_DATA_END_YEAR;

  let years = [];

  for (let i = startDate; i <= endDate; i++) {
    years.push(i);
  }

  return (
    <ol className="year-list">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}> {year}</Link>
        </li>
      ))}
    </ol>
  );
};
