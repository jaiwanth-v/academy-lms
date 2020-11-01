import React, { useState } from "react";

import { Jutsu } from "react-jutsu";

const App = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  //width: 100%; height: 92.5%; margin-top:15%

  return call ? (
    <Jutsu
      containerStyles={
        window.innerWidth > 600
          ? { width: "82.5%", height: "100%" }
          : { width: "100%", height: "92.5%", marginTop: "15%" }
      }
      roomName={room}
      displayName={name}
      password={password}
      onMeetingEnd={() => console.log("Meeting has ended")}
      loadingComponent={<p>loading ...</p>}
    />
  ) : (
    <form className="routeArea meetingform">
      <input
        id="room"
        type="text"
        placeholder="Room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="password"
        type="text"
        placeholder="Password (optional)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn lighten-1 z-depth-0"
        onClick={handleClick}
        type="submit"
      >
        Start / Join
      </button>
    </form>
  );
};

export default App;
