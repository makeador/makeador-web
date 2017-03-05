import styled from 'styled-components';

export default styled.h1`
  color: ${({black}) => black ? 'darkslategray' : 'white'};
  font-size: 6vw;
  font-weight: normal;
  letter-spacing: 1.1vw;
  margin: 0;
  padding: 0;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(66, 66, 66, 1);
  text-transform: uppercase;
`;
