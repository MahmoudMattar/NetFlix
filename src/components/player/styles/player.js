import styled, { css } from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const baseInputStyles = css`
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid #a3a3a1;
  display: inline-block;
  cursor: pointer;
  color: #ecf0f1;
  font-size: 30px;
  padding: 2px 12px;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.9s transform;
  margin: 10px;
  transform-origin: 50% 50%;
`;

export const Button = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 24px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  :hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const Add = styled.button`
  ${baseInputStyles}
  :hover {
    background-color: green;
    color: white;
  }
`;

export const Remove = styled.button`
  ${baseInputStyles}
  :hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const Like = styled.button`
  ${baseInputStyles}
  :hover {
    background-color: green;
    color: white;
  }
`;

export const Dislike = styled.button`
  ${baseInputStyles}
  :hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
