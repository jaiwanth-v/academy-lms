import React, { Component } from "react";
import ForumList from "./sub-components/Forum/ForumList";
import ForumNotifications from "./sub-components/Forum/ForumNotifications";
import "./sub-components/Forum/css/Forum.css";

export default class Forum extends Component {
  render() {
    return (
      <div className="routeArea forum">
        <ForumList />
        <ForumNotifications />
      </div>
    );
  }
}
