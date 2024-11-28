interface QuizProps {
  quiz: { question: string; options: string[]; correctOption?: number };
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const { question, options } = quiz;

  return (
    <div>
      <p>{question}</p>
      <ol>
        {options.map((option, index) => (
          <li key={index} onClick={}>{option}</li>
        ))}
      </ol>
    </div>
  );
};
export default Quiz;
