import {createReducer} from '@reduxjs/toolkit';
import {getTelegramCode, fetchMentors, fetchStudents} from './actions';

const initialState = {
  code: null,
  mentors: null,
  students: null,
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
  builder.addCase(fetchStudents, (state, action) => {
    return {
      ...state,
      students: action.payload,
    };
  });
});

export {leaders};