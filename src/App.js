import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏜️": "desert",
  "🏠 ": "house",
  "🏥": "hospital",
  "⛲": "fountain",
  "⛰️": "mountain"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Travel & Places emoji interpreter</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emoji's we know right now </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
