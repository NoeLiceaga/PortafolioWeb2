import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Navigation,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navigation scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              PrograWeb 2
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Parcial1"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                >
                  Primer Parcial
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Parcial2"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Segundo Parcial
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={60}
                >
                  Tercer Parcial
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="examenes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Examenes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="info"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={60}
                >
                  Info
                </NavLinks>
              </NavItem>
            </NavMenu>
            {/* <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Sign In
              </NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Navigation>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
