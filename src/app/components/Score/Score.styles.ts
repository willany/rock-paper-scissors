import styled from 'styled-components'

export const ScoreContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 160px;
    background-color: #fff;
    border-radius: 8px;
    justify-content: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: #2a46c0;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`;

export const Score = styled.span`
    color: #3b4363;
    font-size: 4em;
    font-weight: 600;
`;