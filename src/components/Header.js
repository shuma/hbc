import React from "react";
import styled from "styled-components";
import LeftArrow from "../svg/LeftArrow.svg";

const Container = styled.div`
  display: flex;
`;

const Titel = styled.h1`
  display: flex;
  flex: 1;
  justify-content: center;
  color: #3f6072;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

const Arrow = styled.img`
  max-height: 30px;
  width: 50px;
  padding: 10px;
  padding-top: 25px;
  cursor: pointer;
`;

const Header = ({ backButton }) => (
  <Container>
    <Arrow src={LeftArrow} onClick={backButton} />
    <Titel>Heartburn Checker</Titel>
  </Container>
);

export default Header;
