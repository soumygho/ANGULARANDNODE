import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAppState } from 'src/app/state';
import { Student } from '../../models/Student';
import { getStudents, StudentsState } from '../../state';
import { selectAllStudents } from '../../state/selectors/students.selector';

@UntilDestroy()
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  students$: Observable<Student[] | []> | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getStudents());
    this.store.select(selectAppState).subscribe((data) => console.log(data));
    this.students$ = this.store.select(selectAllStudents);
  }
}
