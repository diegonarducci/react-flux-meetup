import React from "react";

// COMPONENTS
import Menu from "./Menu";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>REACT + FLUX</h1>
        <Menu />
      </header>
    );
  }
}
