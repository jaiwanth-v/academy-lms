import React, { Component } from "react";
import TextBooks from "./sub-components/Resources/TextBooks";
import "./sub-components/Resources/css/Resources.css";

export default class Resources extends Component {
  render() {
    return (
      <div className="routeArea routeAreaPadding">
        <TextBooks />
      </div>
    );
  }
}
