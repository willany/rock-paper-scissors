import * as Style from "./Option.styles";

import { SCISSORS, PAPER, ROCK, LIZARD, SPOCK, OPTIONS } from "@/app/constants";
import { useUserSelectedOption } from "@/app/hooks";

type OptionProps = {
  type:
    | typeof SCISSORS.name
    | typeof PAPER.name
    | typeof LIZARD.name
    | typeof SPOCK.name
    | typeof ROCK.name;
  picked: boolean;
};

export const Option = ({ type, picked }: OptionProps) => {
  const { handleUserSelectedOption } = useUserSelectedOption();
  const area = picked ? "none" : OPTIONS[type].name.toLowerCase();
  const onSelectOption = () => {
    if (!picked) handleUserSelectedOption(type);
  };
  return (
    <Style.Option
      color={OPTIONS[type].color}
      $area={area}
      $picked={picked}
      role="button"
      onClick={onSelectOption}
    >
      <Style.Icon src={OPTIONS[type].image} alt={type} title={type} />
    </Style.Option>
  );
};
