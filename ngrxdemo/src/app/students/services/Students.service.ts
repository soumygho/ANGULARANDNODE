import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BACKENDURL} from '../constants/app-settings';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

constructor(private http: HttpClient) { }

getStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(BACKENDURL);
}

create(payload: Student) {
  return this.http.post<Student>(BACKENDURL,payload);
}

edit(payload: Student) {
  return this.http.put<Student>(`${BACKENDURL}/${payload.id}`,payload);
}

delete(id: number) {
  return this.http.delete(`${BACKENDURL}/${id}`);
}
}
