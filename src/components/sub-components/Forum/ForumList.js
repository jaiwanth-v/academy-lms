import React from "react";
import QuestionSummary from "./QuestionSummary";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ForumList = (props) => {
  let questions = props.forum;
  if (questions) {
    questions = questions
      .slice()
      .sort((a, b) => b.timeAsked.seconds - a.timeAsked.seconds);
  }
  return (
    <div className="forumList">
      <span className="forumTitle">Latest Questions</span>
      <div className="question-list">
        <div className="questions">
          {questions &&
            questions.map((question) => {
              return (
                <QuestionSummary
                  title={question.title}
                  author={question.authorFirstName}
                  time={question.timeAsked}
                  eventid={question.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    forum: state.firestore.ordered.forum,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ["forum"]),
  connect(mapStateToProps)
)(ForumList);
