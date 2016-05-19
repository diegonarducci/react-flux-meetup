import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

//CONSTANTS
import * as Constants from "../constants/Constants";

class LayoutStore extends EventEmitter {
  constructor() {
    super();
  }

  handleActions(action) {
    switch(action.type) {
      case Constants.TOOGLE_LOADING: {
        this.emit("changeLoading");
        break;
      }
    }
  }
}

const layoutStore = new LayoutStore;
dispatcher.register(layoutStore.handleActions.bind(layoutStore));

export default layoutStore;
