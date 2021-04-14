import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  FETCH_MENTORS: `FETCH_MENTORS`,
  GET_TELEGRAM_CODE: `GET_TELEGRAM_CODE`
}


export const getTelegramCode = createAction(ActionType.GET_TELEGRAM_CODE, (code) => ({
  payload: code
}));

export const fetchMentors = createAction(ActionType.FETCH_MENTORS, (mentors) => ({
  payload: mentors
}));