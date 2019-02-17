import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  text-align: center;

  &:before {
    content: '';
    display: block;
    border-top: solid 1px #e7e7e7;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
`;

export const Span = styled.span`
  color: #929699;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  width: 55px;
  background: #fff;
  padding: 0 20px;
  position: relative;
  z-index: 5;
`;

export const TextCheckbox = styled.div`
  color: #929699;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
`;

export const TextLink = styled.a`
  color: #5d8ffc;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
