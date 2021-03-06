import React from "react";
import shuffle from "lodash.shuffle";

//const sampleAnswers = ["Answ one", "Answ two", "Answ three", "Answ four"];

export default function Question({ question, answerQuestion }) {
  const answer = shuffle([
    ...question.incorrect_answers,
    question.correct_answer
  ]);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {answer.map((ans, index) => (
        <button
          key={index}
          onClick={() => answerQuestion(ans)}
          dangerouslySetInnerHTML={{ __html: ans }}
        />
      ))}
    </div>
  );
}
