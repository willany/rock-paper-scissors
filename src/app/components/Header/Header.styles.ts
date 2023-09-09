import styled from 'styled-components';

export const HeaderContent = styled.div`
    display: flex;
    width: 80%;
    border: 4px solid #606e85;
    border-radius: 8px;
    padding: 22px 38px;
    justify-content: space-between;

     @media (max-width: 900px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;