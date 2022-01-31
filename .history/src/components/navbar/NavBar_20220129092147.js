import React, {useState} from "react";
import "./NavBar.css";

export const NavBar = () => {

    const [buttonBurgerIsClicked, setButtonBurgerIsClicked] = useState(true);

    
    const handleNavButtonBurgerClick = () => {
        console.log(buttonBurgerIsClicked)
        //setButtonBurgerIsClicked(true);
    }

  return (
    <nav className="NavBar__nav">
      <span className="NavBar__nav__span--site-name">Waqt Al Falah</span>
      <i className="fas fa-bars web-font NavBar__nav__i--button-burger"
            onClick={handleNavButtonBurgerClick}></i>
      <ul className="NavBar__nav__ul" >
        <li className="NavBar__nav__ul__li--home">Acceuil</li>
        <li className="NavBar__nav__ul__li--masjid">Mosquées</li>
      </ul>
    </nav>
  );
};
