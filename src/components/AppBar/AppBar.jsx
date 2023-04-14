// import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("../Navigation/Navigation"));

const StyledHeader = styled.header`
  padding: 20px;
  background-color: #e0e0e0;
  border-bottom: 2px solid black;
`;

export default function AppBar() {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <StyledHeader>
          <Navigation />
        </StyledHeader>
      </Suspense>
    </>
  );
}
