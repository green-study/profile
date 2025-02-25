import { ReactElement } from "react";
import "./Header.css";

const Header = (): ReactElement => {
  return (
    <div className="header">
      <div className="Title-container">
        <div className="Title-margin-1" />
        <div className="Title">
          <p># Front-end Developer</p>
        </div>
        <hr />
        <div className="Title-margin-2" />
        <div className="Name">
          <p>Subin's Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Header;