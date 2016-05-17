import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

export function toogleLoading() {
  debugger;
  dispatcher.dispatch({
    type: Constants.TOOGLE_LOADING,
  });
}


