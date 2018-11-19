import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BorderBottom from "./BorderBottom";

const Container = styled.div``;
const Content = styled.h2`
  color: #3F6072
  font-weight: 600;
  font-size: 32px;
  text-align: left;
  max-width: 800px;
  margin-bottom: 0.5em;
`;

const Question = ({ text }) => (
  <Container>
    <Content>{text}</Content> <BorderBottom />
  </Container>
);

export default Question;

Question.propTypes = {
  text: PropTypes.string.isRequired
};
