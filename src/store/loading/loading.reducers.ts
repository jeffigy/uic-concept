/* eslint-disable arrow-body-style */
import { createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingState } from './LoadingState';

const initialState: LoadingState = {
    show: false
};

const reducer = createReducer({},
on(show, () => {
    return {show: true};
}),
on(hide, () => {
    return {show: false};
})
    );
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function loadingReducer(state: LoadingState, action){
    return reducer(state, action);
};
