interface ScoreProps {
  currentScore: number;
  totalScore: number;
  onReset?: () => void
}

const Score: React.FC<ScoreProps> = ({ currentScore, totalScore }) => {
  return <p>Score {currentScore / totalScore}</p>;
};

export default Score;
