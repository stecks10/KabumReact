import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  input {
    border-radius: 10px;
  padding: 16px;
  width: 50%;
  }

  img {
    width: 50%;
    transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Nav = styled.section`
  display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #cecece;
  `;
