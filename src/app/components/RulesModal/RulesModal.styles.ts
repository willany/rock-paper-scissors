import styled from 'styled-components';

export const Modal = styled.div`
    background-color: white;
    position: fixed;
    width: 400px;
    height: 480px;
    border-radius: 8px;
    padding: 22px;
`;

export const Header = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #3b4363;
    text-transform: uppercase;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`;