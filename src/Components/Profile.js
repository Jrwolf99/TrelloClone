import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__border-gradient"></div>
        <img className="profile__pic" alt="profile pic" src={this.props.pic} />
      </div>
    );
  }
}
