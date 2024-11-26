import "./styles.css";
import victoryArmyImg from "../../../../../images/icon-victory-army.png";
import victoryCultureImg from "../../../../../images/icon-victory-culture.png";
import victoryScienceImg from "../../../../../images/icon-victory-science.png";
import victoryScoreImg from "../../../../../images/icon-victory-score.png";
import resourceHorsesImg from "../../../../../images/japan-leader.png";
import houseImg from "../../../../../images/icon-house.png";
import strengthImg from "../../../../../images/icon-strength.png";
import centerImg from "../../../../../images/icon-city-center.png";
import tourismImg from "../../../../../images/icon-tourism.png";
import {useState} from "react";
import randomImg from "../../../../../images/unknown.png";
import colombiaImg from "../../../../../images/colombia-leader.png";
import egyptImg from "../../../../../images/egypt-leader.png";
import germanyImg from "../../../../../images/germany-leader.png";
import japanImg from "../../../../../images/japan-leader.png";
import koreaImg from "../../../../../images/korea-leader.png";
import romeImg from "../../../../../images/rome-leader.png";
import swedenImg from "../../../../../images/sweden-leader.png";

export default function Wins({ players, properties, cultureThreshold }) {
  const [selectedVictory, setSelectedVictory] = useState("Military");

  const leaderImages = {
    Random: randomImg,
    Colombia: colombiaImg,
    Egypt: egyptImg,
    Germany: germanyImg,
    Japan: japanImg,
    Korea: koreaImg,
    Rome: romeImg,
    Sweden: swedenImg,
  };

  const renderVictoryTypeContent = () => {
    switch (selectedVictory) {
      case "Military":
        return (
            <div className="win__victory-army">
              <h2 className="win__victory-h2 ">Military Victory</h2>
              <div className="victory-explain">
                <div className="win__victory-background">
                  <div className="win__victory-background-color">
                    <img
                        src={victoryArmyImg}
                        className="win__img"
                        alt="victoryArmy"
                    />
                  </div>
                </div>

                <p className="win__victory-p">
                  A victory is achieved either by military expansion
                  and a strong economy. You must controlling 70% of
                  the map (30 cells) or by being the last remaining
                  player.Become a true empire and strike fear into
                  your enemies!
                </p>
              </div>
              <h3 className="win__victory-h2 win__victory-h3">
                Top players:
              </h3>
              <div className="win__players-list">
                {players.sort((a, b) => {
                  const aPropertiesCount = Object.keys(properties).filter((key) => properties[key].member &&
                      properties[key].member.user.username === a.user.username).length;
                  const bPropertiesCount = Object.keys(properties).filter((key) => properties[key].member &&
                      properties[key].member.user.username === b.user.username).length;
                  return bPropertiesCount - aPropertiesCount;
                }).map((player, index) => (
                    <div key={index} className={"not-civ-color color-" + player.color + "-g"}>
                      <div className="win__player">
                        <div className="win__player-img-div">
                          <img
                              src={leaderImages[player.civilization]}
                              className="win__img"
                              alt="avatar"
                          />
                        </div>
                        <div className="win__name-and-stats">
                          <h2 className="win__stats-nickname">
                            {player.user.nickname}
                          </h2>
                          <div className="win-stats">
                            <div className="player-stat-house width-full half-height no-select">
                              <img
                                  src={houseImg}
                                  className="recourse-img"
                                  alt="house"
                              />
                              {Object.keys(properties).filter((key) => properties[key].member &&
                                  properties[key].member.user.username === player.user.username).length
                              }/30
                            </div>
                            <div className="player-stat-strength half-height no-select">
                              <img
                                  src={strengthImg}
                                  className="recourse-img strength-recourse-img"
                                  alt="strength"
                              />
                              {player.strength}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        );
      case "Culture":
        return (
            <div className="win__victory-culture">
              <h2 className="win__victory-h2 ">Culture Victory</h2>
              <div className="victory-explain">
                <div className="win__victory-background">
                  <div className="win__victory-background-color">
                    <img
                        src={victoryCultureImg}
                        className="win__img"
                        alt="victoryArmy"
                    />
                  </div>
                </div>
                <p className="win__victory-p">
                  A victory is achieved through tourism and cultural
                  activities is significant. You need to have more tourism
                  and be twice the size of the most influential tourism empire,
                  plus 800 units. Success comes from
                  culture, experiences, and unique offerings, not from
                  competition.
                </p>
              </div>
              <h3 className="win__victory-h2 win__victory-h3">
                Top players:
              </h3>
              <div className="win__players-list">
                {players.sort((a, b) => b.tourism - a.tourism).map((player, index) => (
                    <div key={index} className={"not-civ-color color-" + player.color + "-g"}>
                      <div className="win__player">
                        <div className="win__player-img-div">
                          <img
                              src={leaderImages[player.civilization]}
                              className="win__img"
                              alt="avatar"
                          />
                        </div>
                        <div className="win__name-and-stats">
                          <h2 className="win__stats-nickname">
                            {player.user.nickname}
                          </h2>
                          <div className="win-stats">
                            <div className="player-stat-tourism width-full half-height no-select">
                              <img
                                  src={tourismImg}
                                  className="recourse-img"
                                  alt="tourism"
                              />
                              {player.tourism}/{players.reduce((max, p) =>
                                p.tourism > max && player.user.username !== p.user.username ?
                                    p.tourism : max, 0) + cultureThreshold}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        );
      case "Science":
        return (
            <div className="win__victory-science">
              <h2 className="win__victory-h2 ">Science Victory</h2>
              <div className="victory-explain">
                <div className="win__victory-background">
                  <div className="win__victory-background-color">
                    <img
                        src={victoryScienceImg}
                        className="win__img"
                        alt="victoryArmy"
                    />
                  </div>
                </div>
                <p className="win__victory-p">
                  To win, you need to have a spaceport or a laboratory to complete scientific projects.
                  These facilities accelerate your scientific victory, and you are also given the option
                  to complete a project for money every few turns. The waiting time can be shortened using a laboratory,
                  spaceport, or Science Department. After completing four scientific projects (Exoplanet Expedition),
                  a countdown to victory begins, which can also be sped up with the Terrestrial Laser Station project.
                  The final goal will be to build a base on the Mars.
                </p>
              </div>
              <h3 className="win__victory-h2 win__victory-h3">
                Top players:
              </h3>
              <div className="win__players-list">
                {players.sort((a, b) => {
                  const aProjects = a.finishedScienceProjects.filter((p) =>
                      p === "SATELLITE" || p === "MOON" || p === "MARS" || p === "EXOPLANET").length;
                  const bProjects = b.finishedScienceProjects.filter((p) =>
                      p === "SATELLITE" || p === "MOON" || p === "MARS" || p === "EXOPLANET").length;
                  if (aProjects === bProjects) {
                    return a.expeditionTurns - b.expeditionTurns;
                  }
                  return bProjects - aProjects;
                }).map((player, index) => (
                    <div key={index} className={"not-civ-color color-" + player.color + "-g"}>
                      <div className="win__player">
                        <div className="win__player-img-div">
                          <img
                              src={leaderImages[player.civilization]}
                              className="win__img"
                              alt="avatar"
                          />
                        </div>
                        <div className="win__name-and-stats">
                          <h2 className="win__stats-nickname">
                            {player.user.nickname}
                          </h2>
                          <div className="win-stats">
                            <div className="win__value">
                              <p>Projects completed:</p>
                              <div
                                  className="player-stat-science width-full half-height no-select">
                                {player.finishedScienceProjects
                                .filter((p) => p === "SATELLITE" ||
                                    p === "MOON" ||
                                    p === "MARS" ||
                                    p === "EXOPLANET").length
                                }/4
                              </div>
                            </div>

                            <div className="win__value">
                              <p>Turns to expedition:</p>
                              <div
                                  className="player-stat-science width-full half-height no-select">
                                {player.expeditionTurns < 0 ? 0 : 50 - player.expeditionTurns}/50
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        );
      case "Score":
        return (
            <div className="win__victory-score">
              <h2 className="win__victory-h2 ">Score Victory</h2>
              <div className="victory-explain">
                <div className="win__victory-background">
                  <div className="win__victory-background-color">
                    <img
                        src={victoryScoreImg}
                        className="win__img"
                        alt="victoryArmy"
                    />
                  </div>
                </div>
                <p className="win__victory-p">
                  It's not really about victory; it's about
                  determining the position of the leaders. Players
                  earn points from everything they do. Accumulate
                  points to show who has the best empire and achieve
                  top rankings by the end of the game!
                </p>
              </div>
              <h3 className="win__victory-h2 win__victory-h3">
                Top players:
              </h3>
              <div className="win__players-list">
                {players.sort((a, b) => b.score - a.score).map((player, index) => (
                    <div key={index} className={"not-civ-color color-" + player.color + "-g"}>
                      <div className="win__player">
                        <div className="win__player-img-div">
                          <img
                              src={leaderImages[player.civilization]}
                              className="win__img"
                              alt="avatar"
                          />
                        </div>
                        <div className="win__name-and-stats">
                          <h2 className="win__stats-nickname">
                            {player.user.nickname}
                          </h2>
                          <div className="win-stats">
                            <div className="player-stat-score width-full half-height no-select">
                              <img
                                  src={centerImg}
                                  className="recourse-img"
                                  alt="tourism"
                              />
                              {player.score}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        );
      default:
        return null;
    }
  }

  return (
      <div className="win">
        <div className="win__div">
          <div className={"win__choose" + (selectedVictory === "Military" ? " win__chosen" : "")}
               onClick={() => setSelectedVictory("Military")}>
            <img
                src={victoryArmyImg}
                className="win__img"
                alt="victoryArmy"
            />
          </div>
          <div className={"win__choose" + (selectedVictory === "Culture" ? " win__chosen" : "")}
               onClick={() => setSelectedVictory("Culture")}>
            <img
                src={victoryCultureImg}
                className="win__img"
                alt="victoryCulture"
            />
          </div>
          <div className={"win__choose" + (selectedVictory === "Science" ? " win__chosen" : "")}
               onClick={() => setSelectedVictory("Science")}>
            <img
                src={victoryScienceImg}
                className="win__img"
                alt="victoryScience"
            />
          </div>
          <div className={"win__choose" + (selectedVictory === "Score" ? " win__chosen" : "")}
               onClick={() => setSelectedVictory("Score")}>
            <img
                src={victoryScoreImg}
                className="win__img"
                alt="victoryScore"
            />
          </div>
        </div>
        <div className="win__victory">
          {renderVictoryTypeContent()}
        </div>
      </div>
  );
}
