import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const QuestionSummary = (props) => {
  return (
    <Link to={"/question/" + props.eventid} className="question">
      {/* <div className='question'> */}
      <div className="question-data">
        <span className="question-summary-title">{props.title}</span>
        <span className="question-summary-author">
          asked by {props.author} {moment(props.time.toDate()).calendar()}
        </span>
      </div>
      <span className="answer-btn">
        <span className="material-icons ans-btn">send</span>
        <span>Answer</span>
      </span>
      {/* </div> */}
    </Link>
  );
};

export default QuestionSummary;
