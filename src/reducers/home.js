import {
  LOAD_DATA,
  LOAD_PHOTO,
  SEND_TIP,
  GET_TOKEN,
  ERROR,
  defaultState
} from '../actions/home';

const home = (state = defaultState, { type, payload }) => {
  switch (type) {  
    case LOAD_DATA:
      return {
        ...state,
        student_id: payload.student_id,
        instructor_id: payload.instructor_id,
        class_id: payload.class_id,
        initStudentData: payload
      };
    case SEND_TIP:
      return { ...state, isSend: payload};
    case LOAD_PHOTO:
      return { ...state, photos: payload};
    case GET_TOKEN:
      return { ...state, clientToken: payload};
    case ERROR:
      alert(payload);
      return { ...state};
    default:
      return state
  }
};

export default home;