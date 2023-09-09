import { rulesModalAtom } from './../context';
import { useAtom } from "jotai"

export const useRulesModal = () => {
    const [rulesModalContext, setRulesModalContext] = useAtom(rulesModalAtom);

    return { rulesModalContext, setRulesModalContext };
}