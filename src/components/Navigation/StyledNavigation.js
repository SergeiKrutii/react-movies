import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  padding: 0px 40px;
  font-size: large;
  font-weight: 700;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
