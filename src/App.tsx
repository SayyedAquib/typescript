import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { quizData } from "./utils/quizData";

function App() {
  return (
    <>
      <Header title={"Quiz App"} />
      {quizData.map((item, i) => (
        <Quiz key={i} quiz={item} />
      ))}

      <Score currentScore={3} totalScore={5}/>
    </>
  );
}

export default App;
