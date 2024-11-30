import { quizData } from "../utils/quizData";

type AttemptedAction = {
  type: "ATTEMPTED";
  selectedOption: number;
};

type ResetAction = {
  type: "RESET";
};

type QuizAction = AttemptedAction | ResetAction;

type AppState = {
  quizData: {
    question: string;
    options: string[];
    correctOption: number;
  }[];
  currentQuestionIndex: number;
  score: number;
};

export const initialState: AppState = {
  quizData: quizData,
  currentQuestionIndex: 0,
  score: 0
}

function checkAnswer(selectedOption: number, correctOption: number): boolean {
  return selectedOption === correctOption;
}
function getNextQuestionIndex(
  currentIndex: number,
  totalQuestions: number
): number {
  return currentIndex + 1 <= totalQuestions ? currentIndex + 1 : currentIndex;
}

export const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case "ATTEMPTED":
      const nextQuestionIndex = getNextQuestionIndex(
        state.currentQuestionIndex,
        state.quizData.length
      );
      const updateScore = checkAnswer(
        action.selectedOption,
        state.quizData[state.currentQuestionIndex].correctOption
      )
        ? state.score + 1
        : state.score;

      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        score: updateScore,
      };
    
    case "RESET":
      return initialState
    
    default:
      return state;
  }
};

const Reducer = () => {
  return <div>Reducer</div>;
};
export default Reducer;
