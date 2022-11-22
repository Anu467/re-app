import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink,NavItem,NavLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
  return (
    <>
    <IconContext.Provider value={{ color : '#fff'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>INSURANCE ANALYTICS</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
              <NavItem>
                    <NavLink to= '/contact'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true' 
                     offset={-80}
                    >Contact</NavLink>
                  </NavItem>
              <NavItem>
                    <NavLink to= '/signup'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true' 
                     offset={-80}
                    >Sign Up</NavLink>
                  </NavItem>
                        
              </NavMenu>
              
              <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;