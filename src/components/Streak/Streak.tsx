import "./Streak.scss";

interface StreakProps {
  streak: number;
}

const Streak = ({ streak }: StreakProps) => (
  <div className="streak-container">
    Streak: <span className="streak-counter">{streak}</span>
  </div>
);

export default Streak;
