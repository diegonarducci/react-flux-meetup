import React from "react";

// STORES
import LayoutStore from "../../stores/LayoutStore";

export default class Loading extends React.Component {
  constructor() {
    super();

    this.toogleLoading = this.toogleLoading.bind(this);

    this.state = {
      open: {true}
    };
  }

  componentWillMount() {
    LayoutStore.on("change", this.toogleLoading);
  }

  toogleLoading() {
    this.setState({open: !this.state.open});
  }

  componentWillUnmount() {
  }

  render() {
    const stateClass = this.state.open ? 'curtain open' : 'curtain';

    return (
      <div class={stateClass}>
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    );
  }
}
