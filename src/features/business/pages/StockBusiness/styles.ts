import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 94px auto 50px;
  padding: 0 16px;
`;

export const BackPage = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  color: #f9f7f0;
  transition: color 0.2s;
  font-weight: bold;
  border: 0;
  background: transparent;
  svg {
    margin-right: 10px;
  }

  &:hover {
    color: ${shade(0.2, '#f9f7f0')};
  }
`;

export const Main = styled.main`
  align-self: center;
  width: 100%;
  max-width: 820px;
  margin: 50px 0 30px;

  display: flex;
`;

export const ContentRegister = styled.div`
  flex: 1;
  padding: 0 20px 35px 20px;
  position: relative;
  background: #2f2f31;
  border-radius: 6px;
  border: 1px solid #2a2a2c;

  form {
    width: 100%;
  }

  h1 {
    font-size: 20px;
    margin: 30px 0 60px 0;
  }
`;

export const ContentInput = styled.div`
  display: flex;

  div {
    flex: 1;
  }
`;

export const SeparateInput = styled.span`
  width: 8px;
`;

export const ImageProduct = styled.label`
  position: absolute;
  right: 58px;
  top: -46px;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: 1px solid #2a2a2c;
  transition: border-color 0.2s;
  background: #bab7ad;
  overflow: hidden;

  &:hover {
    border-color: #e6a43a;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 16px;

  > div {
    width: 100%;
    font-size: 14px;
    text-align: right;
    margin: 0 auto;
  }
`;
