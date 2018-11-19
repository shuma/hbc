import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e9ecf0;
  height: 2px;
`;

const Line = styled.div`
  width: ${props => props.percent || "2%"}%;
  max-width: 100%;
  height: 2px;
  border-radius: 0 1px 1px 0;
  -webkit-transition: 0.4s width, 0.4s background-color;
  transition: 0.4s width, 0.4s background-color;
  background-color: #6accba;
`;

const Progress = ({ precentValue }) => (
  <Container>
    <Line percent={precentValue} />
  </Container>
);

Progress.propTypes = {
  precentValue: PropTypes.number.isRequired
};

export default Progress;
