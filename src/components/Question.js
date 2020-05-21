import React from "react";

const sampleAnswers = ["Answ one", "Answ two", "Answ three", "Answ four"];

export default function Question() {
  return (
    <div className="question">
      <h2>Question Here</h2>
      {sampleAnswers.map((ans, index) => (
        <button key={index}>{ans}</button>
      ))}
    </div>
  );
}
