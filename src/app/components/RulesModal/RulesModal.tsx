import Image from "next/image";
import * as Style from "./RulesModal.styles";
import { useRulesModal } from "@/app/hooks";
import CloseIcon from "../../../../public/images/icon-close.svg";
import RulesImage from "../../../../public/images/image-rules-bonus.svg";

export const RulesModal = () => {
  const { rulesModalContext, setRulesModalContext } = useRulesModal();
  const onCloseModal = () => {
    setRulesModalContext(false);
  };

  if (!rulesModalContext) return;

  return (
    <Style.Modal role="dialog">
      <Style.Header>
        <Style.Title>Rules</Style.Title>
        <Style.CloseButton onClick={onCloseModal} title="Close">
          <Image src={CloseIcon} alt="Close Icon" />
        </Style.CloseButton>
      </Style.Header>
      <Style.Content>
        <Image src={RulesImage} alt="rules" />
      </Style.Content>
    </Style.Modal>
  );
};
