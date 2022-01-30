import React, { Component } from "react";
import "./DoList.css";

export default class DoList extends Component {
  handleAddCard(myId) {
    const newCard = document.createElement("div");
    console.log(myId);
    const myList = document.getElementById(myId);
    newCard.classList.add("dolist__card");
    newCard.setAttribute("role", "textbox");
    newCard.setAttribute("contentEditable", "true");
    myList.appendChild(newCard);
  }

  render() {
    return (
      <div className="dolist">
        <p className="dolist__title">{this.props.name}</p>
        <div className="card-list" id={this.props.myId}>
          <div className="dolist__card" role="textbox" contentEditable></div>
        </div>
        <button
          onClick={() => this.handleAddCard(this.props.myId)}
          className="dolist__addcardbutton"
        >
          + Add card
        </button>
      </div>
    );
  }
}
