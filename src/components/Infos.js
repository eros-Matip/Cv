import React, { useState } from "react";
import Text from "./Text";

const Infos = () => {
  const [hidden, setHidden] = useState(true);

  const handleClic = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      {hidden ? (
        <div className="center">
          <button className="btnInfos" onClick={handleClic}>
            Plus d'infos !
          </button>
        </div>
      ) : (
        <div className="infos">
          <div className="flex ">
            <i className="far fa-calendar-alt container"></i>
            <Text info={"36 ans"} />
          </div>
          <div className="flex">
            <i className="fas fa-home container"></i>
            <Text info={"Clichy-la-garenne, 92"} />
          </div>
          <div className="flex">
            <i className="far fa-envelope container"></i>
            <a className="textInfo " href="mailto:eros.matip@gmail.com">
              eros.matip@gmail.com
            </a>
          </div>
          <div className="flex">
            <i className="fas fa-car container"></i>
            <Text info={"Permis A, B"} />
          </div>
          <div className="flex">
            <i className="fas fa-mobile-alt container"></i>
            <Text info={"06.19.98.64.27"} />
          </div>
          <div className="flex">
            <i className="fab fa-github container"></i>
            <a
              className="textInfo "
              href="https://github.com/eros-Matip"
              target="_blank"
            >
              eros-Matip
            </a>
          </div>

          <button className="btnInfos" onClick={handleClic}>
            Fermer les infos !
          </button>
        </div>
      )}
    </div>
  );
};

export default Infos;
