import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  list-style: none;
  margin: 10px 0px;
  padding-left: 10px;
  padding-right: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  .actors-item {
    margin-right: 10px;
  }
  .actors-name {
    font-size: larger;
    font-weight: 500;
  }
  .actors-character {
    margin-bottom: 10px;
  }
`;
