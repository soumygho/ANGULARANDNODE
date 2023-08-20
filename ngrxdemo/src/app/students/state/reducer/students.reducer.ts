import { createReducer, on } from '@ngrx/store';
import { initialState, initialStudentState } from 'src/app/state';
import { Student } from '../../models/Student';
import { getStudentsSuccess } from '../action';

export interface StudentsState {
  students: Student[];
}

export const studentReducer = createReducer(
  initialStudentState,
  on(getStudentsSuccess, (state, { studentsData }) => ({
    ...state,
    students: studentsData,
  }))
);
