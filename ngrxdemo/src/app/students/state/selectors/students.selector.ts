import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, selectAppState } from 'src/app/state';
import { StudentsState } from '../reducer';

export const selectStudent = createFeatureSelector<AppState, StudentsState>(
  'studentData'
);

export const selectAllStudents = createSelector(
  selectStudent,
  (state: StudentsState) => {
    if (state.students == undefined) return [];
    console.log('Selector :: ');
    console.log(state.students);
    return state.students;
  }
);

export const selectStudentById = (id: number) =>
  createSelector(selectStudent, (state: StudentsState) => {
    let students = state.students.filter((student) => student.id == id);
    if (students.length === 0) return undefined;
    return students[0];
  });
