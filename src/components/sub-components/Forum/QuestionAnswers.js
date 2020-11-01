import React from "react";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

const QuestionAnswers = (props) => {
  return (
    <div className="answer">
      <span className="answerContent">{props.answer}</span>
      <span className="answerAuthor">
        by {props.name} {moment(props.time.toDate()).calendar()}
      </span>
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
)(QuestionAnswers);
