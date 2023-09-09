import Image from "next/image";
import * as Style from "./Game.styles";
import Scissors from "../../../../public/images/icon-scissors.svg";
import Paper from "../../../../public/images/icon-paper.svg";
import Rock from "../../../../public/images/icon-rock.svg";
import Lizard from "../../../../public/images/icon-lizard.svg";
import Spock from "../../../../public/images/icon-spock.svg";

export const Game = () => {
  return (
    <Style.Game>
      <Style.Icon color="#ec9e0e" area="scissors" title="Scissors">
        <Image src={Scissors} alt="Scissors" title="Scissors" />
      </Style.Icon>

      <Style.Icon color="#4865f4" area="paper" title="Paper">
        <Image src={Paper} alt="Paper" title="Paper" />
      </Style.Icon>

      <Style.Icon color="#dc2e4e" area="rock" title="Rock">
        <Image src={Rock} alt="Rock" title="Rock" />
      </Style.Icon>

      <Style.Icon color="#834fe3" area="lizard" title="Lizard">
        <Image src={Lizard} alt="Lizard" title="Lizard" />
      </Style.Icon>

      <Style.Icon color="#40b9ce" area="spock" title="Spock">
        <Image src={Spock} alt="Spock" title="Spock" />
      </Style.Icon>
    </Style.Game>
  );
};
