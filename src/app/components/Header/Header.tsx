import Image from "next/image";
import Logo from "../../../../public/images/logo-bonus.svg";
import * as Style from "./Header.styles";
import { Score } from "..";

export const Header = () => {
  return (
    <Style.HeaderContent>
      <Image
        src={Logo}
        alt="Rock, paper, scissors, lizard and spock"
        title="Rock, paper, scissors, lizard and spock"
        priority
      />

      <Score />
    </Style.HeaderContent>
  );
};
