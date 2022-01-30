import "./App.css";
import React, { Component } from "react";
import Profile from "./Components/Profile";
import profilepicture from "./Assets/me.png";
import ToDo from "./Components/ToDo";

export default class App extends Component {
  render() {
    return (
      <div className="gradient-background">
        <div className="white-background">
          <div className="nav">
            <div className="title">Jonathan's ToDo App</div>
            <Profile pic={profilepicture} />
          </div>
          <ToDo />
        </div>
      </div>
    );
  }
}
