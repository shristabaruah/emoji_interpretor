import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "☕️": "coffee",
  "🍷 ": "Red Wine",
  "🍕": "Pizza",
  "🍚": "Cooked Rice",
  "🍝": "Sphagetti",
  "🍺": "Beer Mug",
  "🍣": "Shusi",
  "🍤": "Fried Shrimp",
  "🍟": "French-Fries",
  "🍞": "Bread",
  "🍩": "Doughnut",
  "🍻": "Beer mugs",
  "🍮": "Custard",
  "🍨": "Ice-cream"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this Foodoji in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Foodoji</h1>

      <input
        onChange={emojiInputHandler}
        placeholder={
          "Paste the Food emoji or Click one of the following emoji below"
        }
      />

      <h2>
        {""}
        <div style={{ fontWeight: "bolder" }}>{meaning} </div>
        {""}
      </h2>

      <h3> Emoji's we know!! </h3>
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
