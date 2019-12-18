import {
  LOAD_DATA,
  ERROR,
  defaultState
} from '../actions/home';

const home = (state = defaultState, { type, payload }) => {
  switch (type) {  
    case LOAD_DATA:
      return {
        ...state,
        gits: payload
      };
    case ERROR:
      alert(payload);
      return { ...state};
    default:
      return state
  }
};

export default home;