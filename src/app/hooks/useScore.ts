import { useAtom } from "jotai"
import { scoreAtom } from "../context"

export const useScore = () => {
    const [score, setScore] = useAtom(scoreAtom);

    const updateScore = (isUserVictory: boolean) => {
        const scoreComputed = isUserVictory ? score + 1 : score - 1;
        if(scoreComputed >= 0){
            setScore(scoreComputed);
        }
    }

    return {score, updateScore}
}