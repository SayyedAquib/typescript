interface QuizProps {
  quiz: { question: string; options: string[]; correctOption: number };
  onOptoinClick: (selectedOption: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onOptoinClick }) => {
  const { question, options } = quiz;

  return (
    <div>
      <p>{question}</p>
      <ol>
        {options.map((option, index) => (
          <li key={index} onClick={() => onOptoinClick(index)}>
            {option}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Quiz;
