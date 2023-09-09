import styled from 'styled-components'


export const Game = styled.div`
  display: grid;
  grid-template-areas: 
    "user result machine";
  gap: 16px;
  @media (max-width: 808px) {
    width: 100%;
    grid-template-areas: 
    "user . machine" 
    "result result result";
  }
`;

export const UserChoice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  grid-area: user;
`;

export const MachineChoice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  grid-area: machine;
`;

export const MachineChoiceLoading = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #3b4363;

   @media (max-width: 634px) {
        width: 140px;
        height: 140px;
    }

    @media (max-width: 442px) {
        width: 80px;
        height: 80px;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 24px;

    @media (max-width: 600px) {
      font-size: 18px;
    }
`;

export const GameResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
    grid-area: result;
`;

export const GameResultTitle = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 36px;
`;

export const PlayAgainButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    color: #3b4363;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 808px) {
    width: 50%;
  }
`;