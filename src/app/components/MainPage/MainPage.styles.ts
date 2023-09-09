import styled from 'styled-components';

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px;
  gap: 48px;
  

  @media (max-width: 400px) {
    padding: 2px;
  }
`;