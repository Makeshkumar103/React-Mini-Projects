import { teams } from "../data/teamsData";
import Team from "./Team";

const Teams = () => {
  return (
    <div className="teams-container">
      {teams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </div>
  );
};

export default Teams;
