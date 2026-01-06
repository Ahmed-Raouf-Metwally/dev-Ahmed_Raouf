import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, LightMode, DarkMode } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(LinkS)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const LinkedinButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: #000;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  margin:0px 5px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
      background: hsla(271, 100%, 50%, 1);
      box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;

`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Ahmed Raouf</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink to="About" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
          <NavLink to="Skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLink>
          <NavLink to="Experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLink>
          <NavLink to="Projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLink>
          <NavLink to="Education" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Education</NavLink>
          <NavLink to="Contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="About" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="Skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="Experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="Projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to="Education" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Education
            </NavLink>
            <div style={{ padding: '0 6px', display: 'flex', width: '100%', justifyContent: 'start' }}>
              <div onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                {darkMode ? <LightMode sx={{ color: theme.text_primary }} /> : <DarkMode sx={{ color: theme.text_primary }} />}
              </div>
            </div>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github
            </GithubButton>
            <LinkedinButton href={Bio.linkedin} target="_Blank" style={{
              background: theme.primary,
              color: theme.text_primary,
            }}>
              Linkedin
            </LinkedinButton>
            <GithubButton
              href={Bio.resume}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Resume
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <div onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer", marginRight: "20px", display: "flex", alignItems: "center" }}>
            {darkMode ? <LightMode sx={{ color: theme.text_primary }} /> : <DarkMode sx={{ color: theme.text_primary }} />}
          </div>
          <GithubButton href={Bio.github} target="_Blank">
            Github
          </GithubButton>
          <LinkedinButton href={Bio.linkedin} target="_Blank">
            Linkedin
          </LinkedinButton>
          <GithubButton href={Bio.resume} target="_Blank">
            Resume
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
