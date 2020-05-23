import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import CategorySelector from "./components/CategoriesSelector";
import Scoreboard from "./components/ScoreBoard";
import Question from "./components/Question";
import ResultModal from "./components/ResultModal";

export default function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = "https://opentdb.com/api.php?amount=1";
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setQuestion(data.results[0]);
      });
  }, [selectedCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory]);

  function handleAnswerQuestion(answer) {
    const newAns = answer === question.correct_answer;
    setIsCorrect(newAns);
  }

  return (
    <div className="App">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          getQuestion={getQuestion}
          question={question}
          isCorrect={isCorrect}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          categoryChoose={selectedCategory}
          setCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question question={question} answerQuestion={handleAnswerQuestion} />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={() => getQuestion()}>
          Go to next question{" "}
          <span role="img" aria-label="go">
            👉
          </span>
        </button>
      </div>
    </div>
  );
}
