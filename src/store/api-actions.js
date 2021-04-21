import {
  requireAuthorization,
  redirectToRoute,
  getToken,
} from "./actions";

import {AuthorizationStatus, Path, BASE_URL} from "../const";

export default class ApiService {
  login(data) {

    return (dispatch, _getState, api) => (
      api.post(`${BASE_URL}/mentor/auth`, data)
        .then(({data}) => dispatch(getToken(data.token)))
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(redirectToRoute(Path.MENTOR)))
    );
  }
};
