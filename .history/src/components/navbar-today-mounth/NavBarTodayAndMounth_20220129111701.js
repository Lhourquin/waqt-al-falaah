import React from "react";
import { Link } from "react-router-dom";
import "./navbar-today-and-mounth.css";
const NavBarTodayAndMounth = () => {
  return (
    <nav className="NavBarTodayAndMounth__nav">
      <ul className="NavBarTodayAndMounth__nav__ul">
        <li className="NavBarTodayAndMounth__nav__ul__li--today raise">
          <Link to="/" className="NavBarTodayAndMounth__nav__ul__li__Link">
            HORAIRES DU JOUR
          </Link>
          <i className="fa-thin fa-calendar-clock"></i>
        </li>
        <li className="NavBarTodayAndMounth__nav__ul__li--month raise">
          <Link
            to="/calendar"
            className="NavBarTodayAndMounth__nav__ul__li__Link"
          >
            HORAIRES DU MOIS
          </Link>
          <i className="fa-solid fa-calendar-days"></i>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarTodayAndMounth;
