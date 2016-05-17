import React from 'react';

// ACTIONS
// import * as HomeActions from "../actions/HomeActions";

// STORES
// import LocationStore from "../stores/LocationStore";

// COMPONENTS


export default class Home extends React.Component {
  constructor() {
    super();
    // this.getCurrentLocation = this.getCurrentLocation.bind(this);
    // this.state = {
    //   zoom: 14
    // };
  }

  componentWillMount() {
      // LocationStore.on("change", this.getCurrentLocation);
      // this.getCurrentLocation();
  }

  componentWillUnmount() {
  }

  getCurrentLocation() {
    // const center = {center: LocationStore.getCurrentLocation()};
    // this.setState(center);
  }

  render() {
    // const styles = {
    //   map: {
    //     position: 'absolute',
    //     width: '100%',
    //     top: '0',
    //     left: '0',
    //     height: '100%'
    //   }
    // };

    // const { center, zoom, filterOpened } = this.state;

    return (
      <div>
        <h2>HOME</h2>
      </div>
    );
  }
}
