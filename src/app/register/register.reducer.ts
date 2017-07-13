import { ActionReducer, Action } from '@ngrx/store';

export const REGISTER_SAVE = 'REGISTER_SAVE';

const INITIAL_STATE: ReducerStateShape = {
  registerFormData: {}
}

interface ReducerStateShape {
  registerFormData: any;
}

export function registerReducer(state: ReducerStateShape = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case REGISTER_SAVE:
			return { ...state,
        registerFormData: action.payload
      };
		default:
			return state;
	}
}
