import * as CityAPIUtil from '../util/city_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_CITIES = "RECEIVE_CITIES";

export const fetchCities = () => (dispatch) => {
  return (
    CityAPIUtil.fetchCities().then(
      cities => {
      dispatch(receiveCities(cities));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveCities = (cities) => {
  return ({
    type: RECEIVE_CITIES,
    cities
  });
};
