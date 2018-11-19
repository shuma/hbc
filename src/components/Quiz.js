import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Components
import Question from "./Question";
import AnswerOption from "./AnswerOption";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AnswerContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  animation: ${fadeIn} 500ms ease-in;
`;

const Quiz = ({ id, question, answerOptions, onAnswerSelected }) => {
  const renderAnswerOptions = key => (
    <AnswerOption
      key={key.id}
      answerContent={key.label}
      answerType={key.label}
      id={key.id}
      score={key.score}
      onAnswerSelected={onAnswerSelected}
    />
  );
  return (
    <div key={id}>
      <QuestionContainer>
        <Question text={question} />
        <AnswerContainer>
          {answerOptions.map(renderAnswerOptions)}
        </AnswerContainer>
      </QuestionContainer>
    </div>
  );
};

Quiz.propTypes = {
  currentQuestion: PropTypes.object,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
