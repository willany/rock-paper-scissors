import { useAtom } from "jotai"
import { userSelectedOptionAtom } from "../context"

export const useUserSelectedOption = () => {
    const [userSelectedOption, setUserSelectedOption] = useAtom(userSelectedOptionAtom);

    const handleUserSelectedOption = (option: string) => {
        setUserSelectedOption(option);
    }

    return {userSelectedOption, handleUserSelectedOption};
}