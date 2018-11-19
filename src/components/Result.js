import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import BorderBottom from "./BorderBottom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h1`
  color: #3F6072
  font-weight: 600;
  font-size: 38px;
  margin-bottom: 0.5em;
`;
const OutomcomeText = styled.p`
  max-width: 750px;
`;
const BookingButton = styled.a`
  font-weight: 700;
  font-size: 15px;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  padding: 12px 25px;
  white-space: normal;
  background: #6accba;
  border: 2px solid #6accba;
  color: #fff;
  line-height: 1.42857143;
  text-align: center;
  display: inline-block;
  width: 200px;
  cursor: pointer;
  &:hover {
    background: #3cae99;
    border-color: #3cae99;
    color: #fff;
  }
`;

const BackButton = styled.a`
  text-align: center;
  margin-top: 7em;
  color: #6accba;
  text-decoration: underline;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #3cae99;
  }
`;

const Result = ({ text, bookingBtn, startOver }) => (
  <Container>
    <SubContainer>
      <HeaderText>Thanks for answering the questions!</HeaderText>
      <BorderBottom />
      <OutomcomeText>{text}</OutomcomeText>
      {bookingBtn ? <BookingButton>Book a meeting</BookingButton> : null}
      <BackButton onClick={startOver}>Back to the start screen</BackButton>
    </SubContainer>
  </Container>
);

Result.propTypes = {
  text: PropTypes.string.isRequired,
  bookingBtn: PropTypes.bool.isRequired,
  startOver: PropTypes.func.isRequired
};

export default Result;
