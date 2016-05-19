import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

export function toogleLoading() {
  dispatcher.dispatch({
    type: Constants.TOOGLE_LOADING,
  });
}


