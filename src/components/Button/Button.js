import styled from 'styled-components';

const HIGH_SHADOW = '0 3px 9px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.24)';
const MEDIUM_SHADOW = '0 2px 6px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.22)';
const LOW_SHADOW = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';

export default styled.button`
  background-color: mintcream;
  border-radius: 3px;
  border: none;
  box-shadow: ${({loading}) => loading ? `${LOW_SHADOW} !important` : MEDIUM_SHADOW};
  color: black;
  cursor: ${({loading}) => loading ? 'cursor !important' : 'pointer'};
  filter: ${({loading}) => loading ? 'brightness(.888)' : 'brightness(1)'};
  font-size: 4vw;
  letter-spacing: 0.8vw;
  margin: 0;
  opacity: ${({hide}) => hide ? 0 : 1}
  outline:none;
  padding: 20px;
  text-transform: uppercase;
  transform: ${({loading}) => loading ? 'scale(0.99) !important' : 'scale(1)'};
  transition: all 200ms cubic-bezier(.25,.8,.25,1);

  @media (min-width:666px) {
    font-size: 2vw;
  }

  &:hover {
    box-shadow: ${HIGH_SHADOW};
    transform-origin: center;
    transform: scale(1.01);
  }

  &:active {
    box-shadow: ${LOW_SHADOW};
    transform: scale(0.99);
  }
`;
