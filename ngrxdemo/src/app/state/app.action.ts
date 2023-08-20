import { createAction, props } from '@ngrx/store';

export const apiCallCompleted = createAction(
  '[API INVOKE]',
  props<{ apiStatus: string; errorMessage: string }>()
);
