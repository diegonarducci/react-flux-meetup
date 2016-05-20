import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

//AXIOS
import * as axios from 'axios';

export function searchSteamUser(search_text) {
  dispatcher.dispatch({type: Constants.TOOGLE_LOADING});

  axios.get('http://localhost:3000/' + search_text)
  .then(function (response) {
    dispatcher.dispatch({
      type: Constants.SEARCH_STEAM_USER,
      steam_user: response.data
    });
    dispatcher.dispatch({type: Constants.TOOGLE_LOADING});
  })
  .catch(function (response) {
    console.log(response);
  });


}


