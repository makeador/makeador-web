import styled from 'styled-components';

export default styled.button`
  background-color: mintcream;
  border-radius: 3px;
  border: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.22);
  color: black;
  cursor: pointer;
  font-size: 4vw;
  letter-spacing: 0.8vw;
  margin: 0;
  outline:none;
  padding: 20px;
  text-transform: uppercase;
  transition: all 200ms cubic-bezier(.25,.8,.25,1);

  @media (min-width:666px) {
    font-size: 2vw;
  }

  &:hover {
    box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.24);
    transform-origin: center;
    transform: scale(1.01);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transform: scale(0.99);
  }
`;
