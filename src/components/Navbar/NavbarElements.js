import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'black')};
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;  
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  color: blue;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  margin-left: -34px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen  and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } 
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;
  white-space: nowrap;
  width: 750px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 650px;
  align-items: center;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.9rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid blue;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: blue;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: blue;
    border-bottom: 3px solid blue;
  }
`;
