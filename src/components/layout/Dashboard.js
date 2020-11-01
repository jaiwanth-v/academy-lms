import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import { connect } from "react-redux";
// import { NavLink } from 'react-router-dom';
import Lessons from "./Dashboard-SubComponents/Lessons";
import Overview from "./Dashboard-SubComponents/Overview";
import Notes from "./Dashboard-SubComponents/Notes";

export class Dashboard extends Component {
  state = {
    tabTitle: "overview",
  };
  handleChangeTab = (e) => {
    this.setState({
      tabTitle: e.target.id,
    });
  };
  render() {
    let tab;
    let tabHeaderA;
    let tabHeaderB;
    let tabHeaderC;
    if (this.state.tabTitle === "overview") {
      tab = <Overview />;
      tabHeaderA = "db-tab--active";
      tabHeaderB = "";
      tabHeaderC = "";
    } else if (this.state.tabTitle === "notes") {
      tab = <Notes />;
      tabHeaderA = "";
      tabHeaderB = "db-tab--active";
      tabHeaderC = "";
    } else if (this.state.tabTitle === "lessons") {
      tab = <Lessons />;
      tabHeaderA = "";
      tabHeaderB = "";
      tabHeaderC = "db-tab--active";
    }
    return (
      <div className="routeArea">
        <div className="dashboard">
          <div className="dashboard-sec-1">
            <div className="db-sec-1-navbar">
              <span
                className={"db-tab-title " + tabHeaderA}
                id="overview"
                onClick={this.handleChangeTab}
              >
                Overview
              </span>
              <span
                className={"db-tab-title " + tabHeaderC}
                id="lessons"
                onClick={this.handleChangeTab}
              >
                Lessons
              </span>
              <span
                className={"db-tab-title " + tabHeaderB}
                id="notes"
                onClick={this.handleChangeTab}
              >
                Notes
              </span>
            </div>
            <div className="db-tab">{tab}</div>
          </div>
          <div className="dashboard-sec-2">
            <div className="clock">
              <Clock />
            </div>
            <div className="apps">
              <div className="app-row">
                <Flippy
                  className="app"
                  flipOnHover={true}
                  flipDirection="horizontal"
                >
                  <FrontSide className="app-front">
                    <img
                      className="image-size"
                      alt="this img was taken from undraw.co"
                      src="/assets/images/meetings.svg"
                    ></img>
                  </FrontSide>
                  <BackSide className="app-back">
                    <Link to="/events" className="forumTitle card-link">
                      Meetings
                    </Link>
                  </BackSide>
                </Flippy>
                <Flippy
                  className="app"
                  flipOnHover={true}
                  flipDirection="horizontal"
                >
                  <FrontSide className="app-front">
                    <img
                      className="image-size"
                      alt="this img was taken from undraw.co"
                      src="/assets/images/chat.svg"
                    ></img>
                  </FrontSide>
                  <BackSide className="app-back">
                    <Link to="/chat" className="forumTitle card-link">
                      Chat
                    </Link>
                  </BackSide>
                </Flippy>
              </div>
              <div className="app-row">
                <Flippy
                  className="app"
                  flipOnHover={true}
                  flipDirection="horizontal"
                >
                  <FrontSide className="app-front">
                    <img
                      className="image-size"
                      alt="this img was taken from undraw.co"
                      src="/assets/images/forum.svg"
                    ></img>
                  </FrontSide>
                  <BackSide className="app-back">
                    <Link to="/forum" className="forumTitle card-link">
                      Forum
                    </Link>
                  </BackSide>
                </Flippy>
                <Flippy
                  className="app"
                  flipOnHover={true}
                  flipDirection="horizontal"
                >
                  <FrontSide className="app-front">
                    <img
                      className="image-size"
                      alt="this img was taken from undraw.co"
                      src="/assets/images/resources.svg"
                    ></img>
                  </FrontSide>
                  <BackSide className="app-back">
                    <Link to="/resources" className="forumTitle card-link">
                      Resources
                    </Link>
                  </BackSide>
                </Flippy>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, null)(Dashboard);
