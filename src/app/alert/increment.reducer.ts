interface StateShape {
  nr: number;
}

const INITIAL_STATE:StateShape = {
  nr: 0
}
export function incrementReducer(state: StateShape = INITIAL_STATE , action: any) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state,
        nr: state.nr + 1
      };
    case 'DECREMENT':
      return { ...state,
        nr: state.nr - 1
      }
    default:
      return state;
  }
}
