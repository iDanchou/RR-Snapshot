import React from "react";
import "./Components/styles.css";
import Avatar from "./Components/avatar";
import Intro from "./Components/intro";
import SkillList from "./Components/skillList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
