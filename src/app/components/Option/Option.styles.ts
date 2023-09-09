import Image from 'next/image';
import styled from 'styled-components';

type OptionProps = {
    color: string;
    $area: string;
    $picked: boolean;
}
export const Option = styled.div<OptionProps>`
    width: ${({$picked}) => $picked ? '234px' : '134px'};
    height: ${({$picked}) => $picked ? '234px' : '134px'};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    background: #fff;
    border-radius: 50%;
    border: ${({$picked}) => $picked ? '20px' : '10px'} solid ${({color}) => color};
    cursor: ${({$picked}) => $picked ? 'auto' : 'pointer'};
    grid-area: ${({$area}) => $area};

    @media (max-width: 634px) {
        width: ${({$picked}) => $picked ? '140px' : '140px'};
        height: ${({$picked}) => $picked ? '140px' : '140px'};
    }

    @media (max-width: 550px) {
        width: ${({$picked}) => $picked ? '100px' : '100px'};
        height: ${({$picked}) => $picked ? '100px' : '100px'};
    }

    @media (max-width: 400px) {
        width: ${({$picked}) => $picked ? '80px' : '80px'};
        height: ${({$picked}) => $picked ? '80px' : '80px'};
    }
`;

export const Icon = styled(Image)`
    width: 50%;
    height: 50%;
`;