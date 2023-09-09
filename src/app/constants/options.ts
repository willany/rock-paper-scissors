import ScissorsImage from "../../../public/images/icon-scissors.svg";
import PaperImage from "../../../public/images/icon-paper.svg";
import RockImage from "../../../public/images/icon-rock.svg";
import LizardImage from "../../../public/images/icon-lizard.svg";
import SpockImage from "../../../public/images/icon-spock.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const SCISSORS = {
    name: "Scissors",
    color: "#ec9e0e",
    image: ScissorsImage as StaticImport
};
export const PAPER = {
    name: "Paper",
    color: "#4865f4",
    image: PaperImage as StaticImport
};
export const ROCK = {
    name: "Rock",
    color: "#dc2e4e",
    image: RockImage as StaticImport
};
export const LIZARD = {
    name: "Lizard",
    color: "#834fe3",
    image: LizardImage as StaticImport
};
export const SPOCK = {
    name: "Spock",
    color: "#40b9ce",
    image: SpockImage as StaticImport
};

export const OPTIONS = {
    [SCISSORS.name]: SCISSORS,
    [PAPER.name]: PAPER,
    [ROCK.name]: ROCK,
    [LIZARD.name]: LIZARD,
    [SPOCK.name]: SPOCK
}