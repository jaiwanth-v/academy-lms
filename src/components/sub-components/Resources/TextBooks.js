import React from "react";
import { connect } from "react-redux";
// import { listGrade9 } from './TextBookList/Grade9Index'
import { Link } from "react-router-dom";
import Data from "./TextBookList/Grade9Index.json";

const TextBooks = (props) => {
  // let textBookData = JSON.parse(listGrade9)
  // let EM = textBookData.EnglishMedium
  // let SM = textBookData.SinhalaMedium
  let EM = Data.EnglishMedium;
  let SM = Data.SinhalaMedium;
  return (
    <div className="textBookArea">
      <span className="forumTitle TextBooks">
        Text Books - Grade 0{props.profile.grade}
      </span>
      <div id="mediumAreas" className="mediumAreas">
        <div className="EM">
          <span className="forumTitle">English Medium</span>
          {EM &&
            EM.map((book) => {
              return (
                <Link
                  to={"/textbook/EnglishMedium/" + book.Subject}
                  className="subject"
                >
                  ○ {book.Subject}
                </Link>
              );
              // console.log(book.Subject)
            })}
        </div>
        <div className="SM">
          <span className="forumTitle">Sinhala Medium</span>
          {SM &&
            SM.map((book) => {
              return (
                <Link
                  to={"/textbook/SinhalaMedium/" + book.Subject}
                  className="subject"
                >
                  ○ {book.Subject}
                </Link>
              );
            })}
        </div>
        <div className="TM">
          <span className="forumTitle">Tamil Medium</span>
          Coming Soon....
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, null)(TextBooks);
