import * as Style from "./Game.styles";
import { Options, Option } from "..";
import {
  useUserSelectedOption,
  useGameResult,
  useMachineSelectedOption,
  useScore,
} from "@/app/hooks";
import { useEffect } from "react";

export const Game = () => {
  const { userSelectedOption, handleUserSelectedOption } =
    useUserSelectedOption();
  const { selectedMachineOption, setSelectedMachineOption } =
    useMachineSelectedOption();
  const { isUserVictory } = useGameResult(
    userSelectedOption,
    selectedMachineOption
  );
  const { updateScore } = useScore();

  const handlePlayAgain = () => {
    handleUserSelectedOption("");
    setSelectedMachineOption("");
  };

  useEffect(() => {
    if (userSelectedOption && selectedMachineOption)
      updateScore(isUserVictory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelectedOption && selectedMachineOption]);

  if (!userSelectedOption) return <Options />;

  return (
    <Style.Game>
      <Style.UserChoice>
        <Style.Title>You picked</Style.Title>
        <Option type={userSelectedOption} picked={true} />
      </Style.UserChoice>

      {userSelectedOption && selectedMachineOption && (
        <Style.GameResult>
          <Style.GameResultTitle>
            {isUserVictory() ? "You win" : "You lose"}
          </Style.GameResultTitle>
          <Style.PlayAgainButton onClick={() => handlePlayAgain()}>
            Play again
          </Style.PlayAgainButton>
        </Style.GameResult>
      )}

      <Style.MachineChoice>
        <Style.Title>The house picked</Style.Title>
        {selectedMachineOption ? (
          <Option type={selectedMachineOption} picked={true} />
        ) : (
          <Style.MachineChoiceLoading />
        )}
      </Style.MachineChoice>
    </Style.Game>
  );
};
