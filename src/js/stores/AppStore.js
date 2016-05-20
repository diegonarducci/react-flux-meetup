import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.steam_user = {};
  }

  getSteamUser() {
    return this.steam_user;
  }

  handleActions(action) {
    switch(action.type) {
      case Constants.SEARCH_STEAM_USER: {
        this.steam_user = action.steam_user;
        this.emit("foundSteamUser");
        break;
      }
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
