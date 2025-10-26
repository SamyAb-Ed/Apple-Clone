import React from "react";
import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

const Header = () => {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} alt="Logo" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    iPhone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    iPad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/search/">
                    <img src={searchIcon} alt="Search" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart/">
                    <img src={cart} alt="Cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
