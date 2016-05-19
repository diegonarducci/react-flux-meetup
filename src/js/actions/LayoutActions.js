import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

//AXIOS
import * as axios from 'axios';

export function toogleLoading() {
  axios.get('http://localhost:3000/narducci')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });


  dispatcher.dispatch({
    type: Constants.TOOGLE_LOADING,
  });
}


