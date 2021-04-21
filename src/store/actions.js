import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  FETCH_MENTORS: `FETCH_MENTORS`,
  FETCH_STUDENTS: `FETCH_STUDENTS`,
  GET_TELEGRAM_CODE: `GET_TELEGRAM_CODE`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_TOKEN: `GET_TOKEN`,
  GET_ERROR_MESSAGE: `GET_ERROR_MESSAGE`
}


export const getTelegramCode = createAction(ActionType.GET_TELEGRAM_CODE, (code) => ({
  payload: code
}));

export const fetchMentors = createAction(ActionType.FETCH_MENTORS, (mentors) => ({
  payload: mentors
}));

export const fetchStudents = createAction(ActionType.FETCH_STUDENTS, (students) => ({
  payload: students
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));

export const getToken = createAction(ActionType.GET_TOKEN, (token) => ({
  payload: token
}));

export const getErrorMessage = createAction(ActionType.GET_ERROR_MESSAGE, (message) => ({
  payload: message
}));

