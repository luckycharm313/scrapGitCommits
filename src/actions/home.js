
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_PHOTO = 'LOAD_PHOTO';
export const SEND_TIP = 'SEND_TIP';
export const GET_TOKEN = 'GET_TOKEN';
export const ERROR = 'ERROR';

import { ApiProvider } from '../ApiProvider';
import { BACKEND_BASE_URL } from '../../config/constants';

export const defaultState = {
  student_id: 0,
  instructor_id: 0,
  class_id: 0,
  initStudentData: {},
  isSend: false,
  photos: [],
  clientToken: null
};

export function loadData(params) {
  return async (dispatch, getState) => {
    try {
      var student = await ApiProvider(BACKEND_BASE_URL + 'api/student/get', 'POST', params);
      console.log({student})
      dispatch({
        type: LOAD_DATA,
        payload: student.payload
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}

export function updateRate(params) {
  return async (dispatch, getState) => {
    try {
      var student = await ApiProvider(BACKEND_BASE_URL + 'api/student/updateRate', 'POST', params);
      console.log({student})
      dispatch({
        type: LOAD_DATA,
        payload: student.payload
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}

export function sendTip(params) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SEND_TIP, payload: false });

      var rows = await ApiProvider(BACKEND_BASE_URL + 'api/student/sendTip', 'POST', params);
      console.log({rows})
      dispatch({
        type: SEND_TIP,
        payload: true
      });      
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}

export function updateSendTip() {
  return (dispatch, getState) => {
    dispatch({ type: SEND_TIP, payload: false });
  }
}

export function loadPhotos(params) {
  return async (dispatch, getState) => {
    try {
      var photos = await ApiProvider(BACKEND_BASE_URL + 'api/student/getPhotos', 'POST', params);
      console.log({photos})
      dispatch({
        type: LOAD_PHOTO,
        payload: photos.payload
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}

export function getClientToken() {
  return async (dispatch, getState) => {
    try {
      var clientToken = await ApiProvider(BACKEND_BASE_URL + 'api/payment/client_token', 'GET');
      console.log({clientToken})
      dispatch({
        type: GET_TOKEN,
        payload: clientToken.payload
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}


export function purchaseTip(params) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SEND_TIP, payload: false });

      var rows = await ApiProvider(BACKEND_BASE_URL + 'api/payment/purchaseTip', 'POST', params);
      console.log({rows})
      dispatch({
        type: SEND_TIP,
        payload: true
      });      
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}