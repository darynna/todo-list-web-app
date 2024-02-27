import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderStyled = styled.header`
  padding: 24px 0;
  background-color: #8ed1fa
`;

export const ListStyled= styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px
`;

export const NavLinkStyled = styled(NavLink)`
color: #1e90ff;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 18px; 
  font-weight: bold;

  &:hover {
    color: #4682b4; /* Lighter blue color on hover */
    text-shadow: 0 0 5px #fff, 0 0 10px #4682b4; /* Glowing effect on hover */
  }
`;