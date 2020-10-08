import React from "react";
import Button from "../components/Button";

const Header = () => {
  return (
    <div className="headerBloc ">
      <div className="headerName container">
        <h2 className="font">Eros MATIP</h2>
      </div>

      <div className="headerButtonBloc container">
        <div>
          <Button text={"Infos"} />
        </div>
        <div>
          <Button text={"Compétences"} />
        </div>
        <div>
          <Button text={"Formations"} />
        </div>
        <div>
          <Button text={"Expériences"} />
        </div>
        <div>
          <Button text={"Cv"} />
        </div>
      </div>
    </div>
  );
};
export default Header;
