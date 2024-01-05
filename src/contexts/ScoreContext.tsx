import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface ScorePropTypes {
  children: ReactNode;
}

interface ScoreContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext<ScoreContextType | null>(null);

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) return { score: 0, setScore: () => { } };
  return context;
};

export const ScoreProvider = ({ children }: ScorePropTypes) => {
  const [score, setScore] = useState(0);

  const contextValue = useMemo(() => {
    return { score, setScore };
  }, [score, setScore]);

  return (
    <ScoreContext.Provider value={contextValue}>
      {children}
    </ScoreContext.Provider>
  );
};
