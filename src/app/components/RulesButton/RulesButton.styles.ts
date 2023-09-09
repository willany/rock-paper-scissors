import styled from 'styled-components';

export const Button = styled.button`
    width: 100px;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
    align-self: end;
    cursor: pointer;

    @media (max-width: 808px) {
    align-self: center;
  }
`;