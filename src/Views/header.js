import * as React from "react";
import imgLink from "../Image/Picture1.png";
import { GiHamburgerMenu } from "react-icons/gi";
export const Header = () => {
  return (
    <div>
      <img style={{ width: "400px", height: "280px" }} src={imgLink} />
      <nav className="navbar navbar-expand-sm color-gray">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <GiHamburgerMenu />
        </button>
        <div className="container-fluid">
          <div className="row collapse navbar-collapse" id="collapsibleNavbar">
            <div className="col nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </div>
            <div className="col nav-item">
              <a className="nav-link" href="#">
                BUSSINES
              </a>
            </div>
            <div className="col nav-item">
              <a className="nav-link" href="#">
                NETWORK
              </a>
            </div>
            <div className="col nav-item">
              <a className="nav-link" href="#">
                NEWS
              </a>
            </div>
            <div className="col nav-item">
              <a className="nav-link" href="#">
                CARRER
              </a>
            </div>
            <div className="col nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
