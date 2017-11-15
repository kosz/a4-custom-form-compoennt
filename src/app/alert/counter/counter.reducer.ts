interface PayloadShape {
  nr: number
}

const INITIAL_STATE: PayloadShape = {
  nr: 0
}

export function counterReducer(state: PayloadShape = INITIAL_STATE, action:any) {
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
