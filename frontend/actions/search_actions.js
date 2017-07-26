// import * as CityAPIUtil from '../util/city_api_util';
// import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const sendSearch = (search) => (dispatch) => {
  return (
      dispatch(receiveSearch(search))
    );
};

export const clearSearch = () => (dispatch) => {
  return (
      dispatch(receiveSearch(null))
    );
};

export const receiveSearch = (search) => {
  return ({
    type: RECEIVE_SEARCH,
    search
  });
};
