import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { quizData } from "./utils/quizData";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  function checkAnswer(selectedOption: number, correctOption: number): boolean {
    return selectedOption === correctOption;
  }

  const handleOptionClick = (selectedOption: number): void => {
    const currentQuiz = quizData[currentQuestionIndex];
    if (checkAnswer(selectedOption, currentQuiz.correctOption)) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <Header title={"Quiz App"} />
      {currentQuestionIndex < quizData.length ? (
        <Quiz
          quiz={quizData[currentQuestionIndex]}
          onOptoinClick={handleOptionClick}
        />
      ) : (
        <Score currentScore={score} totalScore={quizData.length} />
      )}
    </>
  );
}

export default App;
