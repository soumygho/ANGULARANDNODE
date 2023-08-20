import { createAction, props } from '@ngrx/store';
import { Student } from '../../models/Student';
import { BooksActionsTypes } from './books-actions-types.enum';

export const getStudents = createAction(BooksActionsTypes.LOADSTUDENTSDATA);
export const getStudentsSuccess = createAction(
  BooksActionsTypes.LOADSTUDENTSDATASUCCESS,
  props<{ studentsData: Student[] }>()
);
