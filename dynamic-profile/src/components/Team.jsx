import { FaPlane } from "react-icons/fa";
// import { FaAlignCenter, FaPlane } from "react-icons/fa";

const Team = ({ team}) => {
  const isRightTeam = team.side === "right";

  // const flagUrl = new URL(
  //   `../assets/flags/${team.flag}`,
  //   import.meta.url
  // ).href;

  return (
    <div className="team">
      {/* {header} */}
      <div className={`team-header ${isRightTeam ? "right" : ""}`}>
        {/* <img src={flagUrl} alt={team.shortName} /> */}
        <img src={new URL(team.flag,import.meta.url).href} 
        width={60}
        height={30}
        alt="team.Name" />
        <h2>{team.shortName}</h2>
      </div>
      <p style={{textAlign:"center"}}>Plalying XI</p>

      {/* players */}
      {team.players.map((player) => (
        <div 
        key={player.id}
        className={`card ${isRightTeam ? "reverse": ""}`}
        >
          <div>
            <img src={new URL(player.image,import.meta.url).href} 
              height={70}
              width={70}
              alt={player.name} 
            />
          </div>

          <div className={`info ${isRightTeam ? "align": ""}`}>
            <ul>
              <li className="playerName">{player.name}</li>
              <li>{player.role}</li>
            </ul> 
          </div>

          <div className="icon">
            {player.foreign === true ? (<FaPlane/>): null}
          </div>
        </div>
          ))}
        </div>
      // </div>
    );
  };
  
  export default Team;
  