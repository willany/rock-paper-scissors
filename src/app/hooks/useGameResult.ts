import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../constants";

export const useGameResult = (userSelectedOption: string, selectedMachineOption: string | undefined) => {

    const isUserVictory = () => {
        if(userSelectedOption === SCISSORS.name && selectedMachineOption === PAPER.name){
            return true
        }
        if(userSelectedOption === PAPER.name && selectedMachineOption === ROCK.name){
            return true
        }
        if(userSelectedOption === ROCK.name && selectedMachineOption === LIZARD.name){
            return true
        }
        if(userSelectedOption === LIZARD.name && selectedMachineOption === SPOCK.name){
            return true
        }
        if(userSelectedOption === SPOCK.name && selectedMachineOption === SCISSORS.name){
            return true
        }
        if(userSelectedOption === SCISSORS.name && selectedMachineOption === LIZARD.name){
            return true
        }
        if(userSelectedOption === PAPER.name && selectedMachineOption === SPOCK.name){
            return true
        }
        if(userSelectedOption === ROCK.name && selectedMachineOption === SCISSORS.name){
            return true
        }
        if(userSelectedOption === LIZARD.name && selectedMachineOption === PAPER.name){
            return true
        }
        if(userSelectedOption === SPOCK.name && selectedMachineOption === ROCK.name){
            return true
        }
        return false
    }

    return {isUserVictory}
}