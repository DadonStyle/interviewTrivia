import "./Streak.scss";

interface StreakProps {
  streak: number;
}

const Streak = ({ streak }: StreakProps) => {
  return (
    <div className="streak-container">
      Streak: <span className="streak-counter">{streak}</span>
    </div>
  );
};

export default Streak;
