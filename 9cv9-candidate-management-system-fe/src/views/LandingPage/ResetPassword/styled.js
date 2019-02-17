// Reset password
import styled from 'styled-components';

export const MainContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #283583;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  padding-bottom: 50px;
`;

export const ButtonReset = styled.button`
  background-color: #283583;
  border-radius: 8px;
  box-shadow: 5px 5px 4px 0 rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 52px;
  cursor: pointer;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
