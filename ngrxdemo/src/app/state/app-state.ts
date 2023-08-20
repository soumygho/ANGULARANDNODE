import { StudentsState } from '../students/state';

export interface AppState {
  apiStatus: String;
  errorMessage: String;
  studentData: StudentsState | undefined;
}
