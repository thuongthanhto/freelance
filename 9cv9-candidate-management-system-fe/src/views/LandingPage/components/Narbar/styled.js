import styled from 'styled-components';

export const NarBarSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 34px;
  padding: 21px 12px;
`;

export const LogoSection = styled.div`
  cursor: pointer;
`;

export const MenuSection = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-around;
`;

export const ItemSection = styled.div`
  color: #3c4858;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  text-rendering: optimizeLegibility;
  padding: 5px 25px;
  cursor: pointer;
`;

export const ButtonMenu = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: 17px;
  width: 143px;
  height: 34px;
  color: white;
  border-width: 0;
  cursor: pointer;
  margin: 0 10px;
`;

export const ButtonMenuGroup = styled.div`
  padding-left: 20px;
`;
