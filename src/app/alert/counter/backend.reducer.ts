
interface BackendSlice {
  serverData: any;
  error: boolean;
  loading: boolean;
}

const INITIAL_STATE = {
  serverData: undefined,
  error: false,
  loading: false,
}

export function backendReducer(state: BackendSlice = INITIAL_STATE, action:any) {
  switch(action.type) {
    case 'REQUEST':
      return { ...state,
        error: false,
        loading: true,
        serverData: undefined,
      };
    case 'RESPONSE':
      return { ...state,
        loading: false,
        serverData: action.payload
      };
    case 'ERROR':
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
