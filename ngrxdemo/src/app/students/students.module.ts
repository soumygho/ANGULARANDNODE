import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/Add/Add.component';
import { EditComponent } from './components/Edit/Edit.component';
import { StudentsRoutingModule } from './StudentsRoutingModule';
import { StudentsService } from './services/Students.service';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './state';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffect } from './state/effect';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('studentData', studentReducer),
    EffectsModule.forFeature([StudentsEffect]),
  ],
  declarations: [HomeComponent, AddComponent, EditComponent],
  providers: [StudentsService],
})
export class StudentsModule {}
