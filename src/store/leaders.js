import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {getTelegramCode, fetchMentors, fetchStudents, requireAuthorization} from './actions';

const initialState = {
  code: null,
  mentors: null,
  students: null,
  // authorizationStatus: AuthorizationStatus.NO_AUTH
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
  // builder.addCase(requireAuthorization, (state, action) => {
  //   return {
  //     ...state,
  //     authorizationStatus: action.payload,
  //   };
  // });
});

export {leaders};