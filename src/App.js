import React, { Component } from "react";
import jsonData from "./api/heartburn.json";

//components
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Header from "./components/Header";
import Progress from "./components/Progress";

const initialState = {
  counter: 1,
  questions: jsonData.questions,
  outcome: jsonData.outcomes,
  questionId: jsonData.questions[0].id,
  questionTxt: jsonData.questions[0].question_text,
  answerOptions: jsonData.questions[0].answers,
  nextQuestion: jsonData.questions[0].next,
  questionTotal: jsonData.questions.length,
  patientScore: 0,
  result: ""
};
const storedState = [];
class App extends Component {
  state = initialState;

  findQuestion = id => {
    const { questions } = this.state;
    return questions.find(question => question.id === `${id}`);
  };

  handleAnswerSelected = e => {
    const { nextQuestion } = this.state;
    const counter = this.state.counter + 1;
    this.setState({ counter: counter });
    this.setUserScore(parseInt(e.currentTarget.value));

    const questionID = e.target.dataset.qid;
    const nextId = this.setNextQuestionByAnswer(questionID);
    storedState.push(this.state);
    if (nextQuestion.some(a => a.answered || a.next_question)) {
      setTimeout(() => this.setNextQuestion(nextId), 300);
    } else {
      setTimeout(() => this.setResults(), 300);
    }
  };

  resetQuiz = () => {
    this.setState({ ...initialState });
  };

  prevQuestion = () => {
    if (storedState.length >= 1) {
      this.setState({
        ...storedState.pop()
      });
    }
  };

  setUserScore(score) {
    this.setState((prevState, props) => ({
      patientScore: prevState.patientScore + score
    }));
  }

  setNextQuestionByAnswer = answeredId => {
    const { nextQuestion } = this.state;
    if (nextQuestion.some(next => next.answered)) {
      return nextQuestion.find(answer => answer.answered === `${answeredId}`)
        .next_question;
    } else if (nextQuestion.some(next => next.next_question)) {
      return nextQuestion[0].next_question;
    }
  };

  setNextQuestion(next) {
    const nextQuestion = this.findQuestion(next);
    this.setState((prevState, props) => ({
      questionTxt: nextQuestion.question_text,
      answerOptions: nextQuestion.answers,
      nextQuestion: nextQuestion.next
    }));
  }

  setResults() {
    const { patientScore, nextQuestion } = this.state;

    // Sort the array to avoid multiple OR conditions.
    const sortArr = nextQuestion.slice().sort((a, b) => {
      if (!("max_score" in a)) return Number.MAX_SAFE_INTEGER;
      if (!("max_score" in b)) return Number.MIN_SAFE_INTEGER;
      return a.max_score - b.score;
    });

    const outcomeId = this.findDesc(sortArr, patientScore);
    const result = this.findOutome(outcomeId);

    this.setState({
      result: result
    });
  }

  // This function finds the specific 'outcome' just comparing the current index.
  findDesc = (arr, score) => {
    for (let i = 0; i < arr.length; i++) {
      if (score <= arr[i].max_score) return arr[i].outcome;
    }
    return arr.slice(-1).pop().outcome;
  };

  findOutome = id => {
    const { outcome } = this.state;
    return outcome.find(outcome => outcome.id === `${id}`);
  };

  preCalc = (total, counter) => (counter / total) * 100;
  renderQuiz = () => {
    const { questionId, questionTxt, answerOptions } = this.state;
    return (
      <Quiz
        id={questionId}
        question={questionTxt}
        answerOptions={answerOptions}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  };

  renderResult = () => {
    const { result } = this.state;
    return (
      <Result
        text={result.text}
        bookingBtn={result.show_booking_button}
        startOver={this.resetQuiz}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <Header backButton={this.prevQuestion} />
        <Progress
          precentValue={this.preCalc(
            this.state.questionTotal,
            this.state.counter
          )}
        />
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
