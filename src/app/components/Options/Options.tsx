import * as Style from "./Options.style";
import { Option } from "..";
import { SCISSORS, PAPER, ROCK, LIZARD, SPOCK } from "@/app/constants";

export const Options = () => {
  return (
    <Style.Options>
      <Option type={SCISSORS.name} picked={false} />
      <Option type={PAPER.name} picked={false} />
      <Option type={ROCK.name} picked={false} />
      <Option type={LIZARD.name} picked={false} />
      <Option type={SPOCK.name} picked={false} />
    </Style.Options>
  );
};
