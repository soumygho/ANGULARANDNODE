import { createReducer, on } from '@ngrx/store';
import { StudentsState } from '../students/state';
import { AppState } from './app-state';
import { apiCallCompleted } from './app.action';

export const initialStudentState: StudentsState = {
  students: [],
};

export const initialState: AppState = {
  apiStatus: '',
  errorMessage: '',
  studentData: initialStudentState,
};

export const appStateReducer = createReducer(
  initialState,
  on(apiCallCompleted, (state, { apiStatus, errorMessage }) => ({
    ...state,
    apiStatus: apiStatus,
    errorMessage: errorMessage,
  }))
);
