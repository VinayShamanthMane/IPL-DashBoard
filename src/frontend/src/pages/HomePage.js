import { React, useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";
import logo from "./ipl-logo.png";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const respone = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/teams`
      );
      const data = await respone.json();
      setTeams(data);
    };
    fetchTeams();
  }, []);

  if (!teams) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="section">
      <div className="home-title">
        <h1>IPL Dashboard</h1>
        <img src={logo} alt="logo" />
      </div>

      <div className="tiles-container">
        {teams.map((team) => {
          return <TeamTile key={team.id} teamName={team.teamName}></TeamTile>;
        })}
      </div>
    </div>
  );
};
