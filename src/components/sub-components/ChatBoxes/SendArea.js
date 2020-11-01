import React from "react";
import "./css/Chat.css";
import { sendMsg } from "../../../store/action/chatActions";
import { connect } from "react-redux";
import Emojis from "./Emojis";
import Popup from "reactjs-popup";
import Filter from "bad-words";
import Swal from "sweetalert2";

const SendArea = (props) => {
  var state = {
    message: "",
  };
  var filter = new Filter();
  const handleChange = (e) => {
    state = {
      [e.target.id]: e.target.value,
    };
  };

  const setEmoji = (emoji) => {
    let txtarea = document.getElementById("message");
    txtarea.value += emoji;
    state = {
      message: txtarea.value,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.message !== "") {
      if (filter.isProfane(state.message)) {
        Swal.fire({
          icon: "warning",
          title: "Warning",
          text: "Inappropriate Language is not tolerated in this chat!",
          background: "#161819",
          iconColor: "#bb4125",
        });
      } else {
        props.sendMsg(state);
      }
      document.getElementById("form").reset();
      state = {
        message: "",
      };
    }
  };
  return (
    <form className="send-area" id="form" onSubmit={handleSubmit}>
      <input
        autoFocus
        autoComplete="off"
        id="message"
        onChange={handleChange}
        placeholder="Type a message..."
      ></input>
      <Popup
        className="popup"
        trigger={(open) => (
          <div className="sendBtn material-icons">insert_emoticon</div>
        )}
        closeOnDocumentClick
      >
        <Emojis className="emojiPanel" addEmoji={setEmoji} />
      </Popup>
      <button type="submit" className="sendBtn material-icons">
        send
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMsg: (message) => dispatch(sendMsg(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendArea);
