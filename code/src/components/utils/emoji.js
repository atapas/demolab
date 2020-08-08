
import React from "react";

const emojis = {
  'camera': '📷',
  'ponting-right-hand': '👉',
  'battery': '🔋',
  "broadcast": '📡',
  "bell": '🔔'
}

const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {emojis[props.symbol]}
    </span>
);

export default Emoji;