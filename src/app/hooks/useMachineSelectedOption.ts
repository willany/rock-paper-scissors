import { useEffect, useState } from "react";
import { OPTIONS } from "../constants";
import { useUserSelectedOption } from ".";

export const useMachineSelectedOption = () => {
    const [selectedMachineOption, setSelectedMachineOption] = useState("");
    const { userSelectedOption } = useUserSelectedOption();

    useEffect(() => {
    const timer = setTimeout(() => {
      if (userSelectedOption) {
        const keys = Object.keys(OPTIONS).filter(
          (option) => option !== userSelectedOption
        );
        const randomOption = keys[(keys.length * Math.random()) << 0];
        setSelectedMachineOption(randomOption);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [userSelectedOption]);

  return {selectedMachineOption, setSelectedMachineOption}
}