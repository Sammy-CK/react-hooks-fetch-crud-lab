import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions}) {


  const questionActual = questions.map((question, index) => <QuestionItem key={index} question={question}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionActual}</ul>
    </section>
  );
}

export default QuestionList;
