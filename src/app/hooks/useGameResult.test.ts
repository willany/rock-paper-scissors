import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../constants";
import { useGameResult } from "./useGameResult";
import {renderHook} from '@testing-library/react'

describe('useGameResult', () => { 
    it('should Scissors beats Paper', () => {
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(SCISSORS.name, PAPER.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Paper beats Rock', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(PAPER.name, ROCK.name))
        expect(isUserVictory()).toBe(true) 
    });

    it('should Rock beats Lizard', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(ROCK.name, LIZARD.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Lizard beats Spock', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(LIZARD.name, SPOCK.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Spock beats Scissors', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(SPOCK.name, SCISSORS.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Scissors beats Lizard', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(SCISSORS.name, LIZARD.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Paper beats Spock', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(PAPER.name, SPOCK.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Rock beats Scissors', () => { 
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(ROCK.name, SCISSORS.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Lizard beats Paper', () => {
        const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(LIZARD.name, PAPER.name))
        expect(isUserVictory()).toBe(true)
    });

    it('should Spock beats Rock', () => { const { result: {current: {isUserVictory}} } = renderHook(() => 
        useGameResult(SPOCK.name, ROCK.name))
        expect(isUserVictory()).toBe(true)
    });
 });