import { useRulesModal } from "@/app/hooks";
import * as Style from "./RulesButton.styles";

export const RulesButton = () => {
  const { setRulesModalContext } = useRulesModal();
  const openModal = () => {
    setRulesModalContext(true);
  };
  return <Style.Button onClick={openModal}>Rules</Style.Button>;
};
