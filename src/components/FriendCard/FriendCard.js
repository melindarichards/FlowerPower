import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
	<div onClick={props.handleClick
	
	// (pass in item that was just clicked)
	
	
	} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
