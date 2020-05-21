import React, { useEffect, useState } from "react";
import "./styles.css";
import CategorySelector from "./components/CategoriesSelector";
import Scoreboard from "./components/ScoreBoard";
import Question from "./components/Question";

export default function App() {
  const [question, setQuestion] = useState(null);
  function getQuestion() {
    const url = "https://opentdb.com/api.php?amount=1";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setQuestion(data.results[0]);
      });
  }
  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="App">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>
          Go to next question{" "}
          <span role="img" aria-label="go">
            👉
          </span>
        </button>
      </div>
    </div>
  );
}
