import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { answerQuestion } from "../../../store/action/forumActions";
import QuestionAnswers from "./QuestionAnswers";

export class QuestionDetails extends Component {
  render() {
    const { question, auth } = this.props;
    if (!auth.uid || !question) {
      return <Redirect to="/forum" />;
    }
    const questionid = question.id;
    var answer = "";
    const handleChange = (e) => {
      answer = e.target.value;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (answer !== "") {
        this.props.answerQuestion(questionid, answer);
        document.getElementById("form").reset();
        answer = "";
      }
    };
    return (
      <div className="routeArea forum-question">
        <div className="forumQuestionArea">
          <span className="forumTitle">Question</span>
          <div className="question-data">
            <span className="question-summary-title titleDetails">
              {question.title}
            </span>
            <span className="question-summary-author">
              asked by {question.authorFirstName}{" "}
              {moment(question.timeAsked.toDate()).calendar()}
            </span>
            <p className="contentDetails">{question.content}</p>
          </div>
          <span className="forumTitle">Answers</span>
          <div className="questionAnswerArea">
            {question.answers &&
              question.answers.map((answer) => {
                return (
                  <QuestionAnswers
                    answer={answer.answer}
                    name={answer.name}
                    time={answer.timeAnswered}
                  />
                );
              })}
          </div>
        </div>
        <div className="forumAnswerArea">
          <form onSubmit={handleSubmit} className="forum-send-area" id="form">
            <div>
              <input
                autoComplete="off"
                className="forum-txtarea"
                onChange={handleChange}
                id="message"
                placeholder="Type your answer here"
              ></input>
              <button
                type="submit"
                className="sendBtn material-icons forumSend"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  // console.log(state);
  const linkid = ownProps.match.params.id;
  const questions = state.firestore.ordered.forum;
  const users = state.firestore.ordered.users;
  const question = questions ? questions.find((x) => x.id === linkid) : null;
  return {
    question: question,
    auth: state.firebase.auth,
    users: users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    answerQuestion: (questionid, message) =>
      dispatch(answerQuestion(questionid, message)),
  };
};

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect(() => ["events", "users"])
)(QuestionDetails);
