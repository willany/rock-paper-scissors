import { useScore } from "@/app/hooks";
import * as Style from "./Score.styles";

export const Score = () => {
  const { score } = useScore();
  return (
    <Style.ScoreContent>
      <Style.Title>Score</Style.Title>
      <Style.Score>{score}</Style.Score>
    </Style.ScoreContent>
  );
};
