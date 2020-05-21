import React from "react";
import "./styles.css";
import CategorySelector from "./components/CategoriesSelector";

export default function App() {
  return (
    <div className="App">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector />
        {/* <Scoreboard /> */}
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">{/* <Question /> */}</div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        {/* <button>Go to next question 👉</button> */}
      </div>
    </div>
  );
}
