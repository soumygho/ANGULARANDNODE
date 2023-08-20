import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import {
  EMPTY,
  switchMap,
  withLatestFrom,
  tap,
  map,
  of,
  catchError,
} from 'rxjs';
import { apiCallCompleted, AppState } from 'src/app/state';
import { Student } from '../../models/Student';
import { StudentsService } from '../../services';
import { BooksActionsTypes, getStudents, getStudentsSuccess } from '../action';
import { StudentsState } from '../reducer';
import {
  selectAllStudents,
  selectStudentById,
} from '../selectors/students.selector';

@Injectable()
export class StudentsEffect {
  constructor(
    private actions$: Actions,
    private studentsService: StudentsService,
    private store: Store<AppState>
  ) {}

  loadAllStudents$: any = createEffect((): any =>
    this.actions$.pipe(
      ofType(BooksActionsTypes.LOADSTUDENTSDATA),
      withLatestFrom(this.store.select(selectAllStudents)),
      switchMap(
        (
          dat: [TypedAction<BooksActionsTypes.LOADSTUDENTSDATA>, [] | Student[]]
        ) => {
          if (dat[1] == undefined || dat[1]!!.length == 0) {
            return this.studentsService.getStudents().pipe(
              tap((data) => console.log(data)),
              map((data) => {
                this.store.dispatch(
                  apiCallCompleted({ apiStatus: '200', errorMessage: '' })
                );
                return getStudentsSuccess({ studentsData: data });
              }),
              catchError(() => EMPTY)
            );
          }
          return of(dat[1]);
        }
      )
    )
  );
}
