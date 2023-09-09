import styled from 'styled-components'


export const Game = styled.div`
    height: 500px;
    background-image: url(/images/bg-pentagon.svg);
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-areas: 
    ". . scissors . ." 
    "spock . . . paper"
    ". lizard . rock .";
    justify-content: center;
    align-items: center;
    grid-template-rows: 134px;
    grid-template-columns: 72px 97px 100px 87px 149px;
`;

type IconProps = {
    color: string;
    area: string;
}
export const Icon = styled.div<IconProps>`
    width: 134px;
    height: 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    background: #fff;
    border-radius: 50%;
    border: 10px solid ${({color}) => color};
    cursor: pointer;
    grid-area: ${({area}) => area}
`;