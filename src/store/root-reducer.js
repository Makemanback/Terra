import {combineReducers} from '@reduxjs/toolkit';

import {leaders} from './leaders';

export const NameSpace = {
  LEADERS: `LEADERS`,
};

export default combineReducers({
  [NameSpace.LEADERS]: leaders,
});
