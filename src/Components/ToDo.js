import React, { Component } from "react";
import "./ToDo.css";
import DoList from "./DoList";

export default class ToDo extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        <div className="todo">
          <DoList name="Notes" myId="cardNotes"></DoList>
          <DoList name="Today" myId="cardToday"></DoList>
          <DoList name="Goals" myId="cardGoals"></DoList>
        </div>
      </div>
    );
  }
}
