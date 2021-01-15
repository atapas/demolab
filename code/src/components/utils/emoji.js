
import React from "react";

const emojis = {
  'camera': '📷',
  'pointing-right-hand': '👉',
  'battery': '🔋',
  "broadcast": '📡',
  "bell": '🔔',
  "handshake": '🤝',
  "vibration": '📳',
  "screen": '📺',
  "keyboard": '⌨️',
  "selfie": '🤳',
  "anchor": '⚓',
  "clipboard": '📋',
  "network": '📶',
  "stopwatch": '⏱️',
  "face-with-monocle": '🧐',
  "bluetooth": '🤙',
  "input-symbols": '🔣',
  "postbox": '📮',
  "princess": '👸',
  "cat": '🐈',
  "check": '✔️',
  'green-book': '📗',
  'laptop': '💻'
}

const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {emojis[props.symbol]} {props.text && (<span>{props.text}</span>)}
    </span>
);

export default Emoji;