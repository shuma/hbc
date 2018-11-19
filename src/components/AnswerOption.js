import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AnswerItem = styled.li`
  border: 1px solid #6accba;
  margin: 15px;
  font-weight: bold;
  border-radius: 100px;
  padding: 10px;
  color: #6accba;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #6accba;
    background-color: #6accba;
    color: #ffffff;
  }
`;

const Input = styled.input`
  position: absolute;
  width: auto;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const Label = styled.label`
  width: 100%;
  margin: 0;
  padding: 0.2rem 3.5em 0.2rem 3.5rem;
  font-size: 16px;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const AnswerOption = ({ answerContent, onAnswerSelected, score, id }) => (
  <AnswerItem>
    <Input
      type="radio"
      name="radioGroup"
      value={score}
      id={id}
      data-qid={id}
      onChange={onAnswerSelected}
    />
    <Label htmlFor={id}>{answerContent}</Label>
  </AnswerItem>
);

AnswerOption.propTypes = {
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
