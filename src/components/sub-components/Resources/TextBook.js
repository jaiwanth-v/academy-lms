import React, { Component } from "react";
import { connect } from "react-redux";
import Data from "./TextBookList/Grade9Index.json";

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].Subject === nameKey) {
      return myArray[i];
    }
  }
}

export class TextBook extends Component {
  render() {
    const { profile, subject, medium } = this.props;
    var resultObject = search(subject, Data[medium]);
    return (
      <div className="routeArea book">
        <span className="forumTitle TextBooks">
          {subject} - {medium} - Grade 0{profile.grade}
        </span>
        <div className="chapterList">
          {Object.keys(resultObject.Chapters).map(function (key) {
            // console.log(key, resultObject.Chapters[key]);
            return (
              <a
                className="chapter"
                target="blank"
                href={resultObject.Chapters[key]}
              >
                {key}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const linkid = ownProps.match.params.id;
  const pathname = ownProps.location.pathname.split("/");
  // console.log(pathname[2])
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    subject: linkid,
    medium: pathname[2],
  };
};
export default connect(mapStateToProps, null)(TextBook);
