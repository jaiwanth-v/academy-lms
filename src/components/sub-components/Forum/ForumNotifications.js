import React from "react";
import { Link } from "react-router-dom";

const ForumNotifications = () => {
  return (
    <div className="forumNotifications center-align">
      <div className="forumNotificationArea">
        <span className="forumTitle">Notifications</span>
        <span className="question-summary-author">
          No notifications yet....
        </span>
      </div>
      <Link to="/ask" className="forumNewQuestion">
        Ask A Question
      </Link>
    </div>
  );
};

export default ForumNotifications;
