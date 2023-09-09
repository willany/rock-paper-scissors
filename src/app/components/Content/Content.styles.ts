import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px;
  gap: 48px;

  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
    padding: 4px;
    gap: 24px;
  }

`;