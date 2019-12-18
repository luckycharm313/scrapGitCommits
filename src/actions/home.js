
export const LOAD_DATA = 'LOAD_DATA';
export const ERROR = 'ERROR';

import { ApiProvider } from '../ApiProvider';
import { BACKEND_BASE_URL } from '../../config/constants';

export const defaultState = {
  gits: {},
};

export function loadData(params) {
  return async (dispatch, getState) => {
    try {
      var gits = await ApiProvider(BACKEND_BASE_URL + 'api/git/getCommits', 'GET');
      console.log({gits})
      dispatch({
        type: LOAD_DATA,
        payload: gits.payload
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    };
  };
}