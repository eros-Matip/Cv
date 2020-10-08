import React from "react";
import pictureProfil from "../img/IMG_1639.png";
import Infos from "../components/Infos";

function Main() {
  return (
    <div className="bodyBloc container">
      <div className="bodyLeft">
        <img src={pictureProfil} className="pictureProfile"></img>
        <div className="infosLeft">
          <Infos />
        </div>
      </div>
      <div className="bodyCenter"></div>
      <div className="bodyRight"></div>
    </div>
  );
}
export default Main;
