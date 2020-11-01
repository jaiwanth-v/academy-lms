import React, { Component } from "react";
import { createQuestion } from "../../../store/action/forumActions";
import { connect } from "react-redux";

export class CreateQuestion extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createQuestion(this.state);
    this.props.history.push("/forum");
  };
  render() {
    return (
      <form className="newQuestion routeArea">
        <span className="forumTitle">Ask a Question</span>
        <div className="input-field ask-input">
          <label htmlFor="title">Question Title</label>
          <input
            autoFocus
            autoComplete="off"
            type="text"
            id="title"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field ask-txtarea">
          <label htmlFor="contemt">Question Content</label>
          <textarea
            className="ask-txtarea-textarea"
            id="content"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field createbtn">
          <button
            className="btn lighten-1 z-depth-0 quest-btn"
            onClick={this.handleSubmit}
          >
            Create Question
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (project) => dispatch(createQuestion(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
