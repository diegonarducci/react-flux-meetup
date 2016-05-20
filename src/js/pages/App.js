import React from 'react';

// ACTIONS
import * as AppActions from "../actions/AppActions";

// STORES
import AppStore from "../stores/AppStore";

// COMPONENTS
// import Header from "../components/layout/Header";

export default class App extends React.Component {
  constructor() {
    super();

    //BINDIINGS
    this.foundSteamUser = this.foundSteamUser.bind(this);

    // STATE
    this.state = {
                   steamUser: null,
                   searchText: ""
                 };
  }

  componentWillMount() {
    AppStore.on("foundSteamUser", this.foundSteamUser);
  }

  componentWillUnmount() {
    AppStore.removeListener("foundSteamUser", this.foundSteamUser);
  }

  foundSteamUser() {
    this.setState({steamUser: AppStore.getSteamUser()});
  }

  searchTextChange(event){
    this.setState({searchText: event.target.value});
  }

  search(){
    AppActions.searchSteamUser(this.state.searchText);
  }

  render() {
    const { steamUser } = this.state;

    // const list = list.map((item) => {
    //     return <item key={item.id} {...item}/>;
    // });

    const name = steamUser != null ? steamUser.name : "";
    const avatar = steamUser != null ? steamUser.avatar : "";
    const points = steamUser != null ? steamUser.csgo_points : "";

    return (
      <div>
        <input type="text"
               name="search"
               value={this.state.searchText}
               onChange={this.searchTextChange.bind(this)} />

        <button onClick={this.search.bind(this)}>Buscar</button>
        {name}
        <img src={avatar} />
        <br/>
        <span>Points: {points}</span>
      </div>
    );
  }
}
