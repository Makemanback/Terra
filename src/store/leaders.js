import {createReducer} from '@reduxjs/toolkit';
import {startLeadersList, breakthroughLeadersList} from '../mocks/leaders';
import {getTelegramCode, fetchMentors} from './actions';

const initialState = {
  code: null,
  mentors: null,
};

const leaders = createReducer(initialState, (builder) => {
  builder.addCase(getTelegramCode, (state, action) => {
    return {
      ...state,
      code: action.payload,
    };
  });
  builder.addCase(fetchMentors, (state, action) => {
    return {
      ...state,
      mentors: action.payload,
    };
  });
});

export {leaders};