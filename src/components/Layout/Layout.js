import styled from 'styled-components';
import {MAKEA, NO_MAKEA, NOT_SURE_IF_MAKEA} from 'makeador-core';

import fry from './fry.svg';

const makeaBackgroundsMap = {
  [MAKEA]: 'color: mediumseagreen',
  [NO_MAKEA]: 'color: tomato',
  [NOT_SURE_IF_MAKEA]: `image: url(${fry})`
};

export default styled.div`
  align-items: center;
  background-${({makea}) => makeaBackgroundsMap[makea]};
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  font-size: 10vw;
  height: 100vh;
  justify-content: space-around;
  overflow: hidden;
  text-shadow: 2px 2px 6px rgba(22, 22, 22, 1);
  width: 100vw;
`;
