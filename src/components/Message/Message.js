import React from "react";
import "./Message.css";

const Message = props => (
<div>
<h1 className="message">{props.children}</h1>
</div>
);

export default Message;
