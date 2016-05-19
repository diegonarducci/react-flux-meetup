import React from "react";

// COMPONENTS
import Menu from "./Menu";

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = { visible: {true} };
  }

  render() {
    const headerClasses = this.state.visible ? 'visible' : 'invisible';
    return (
      <header class={headerClasses}>
        <h1>{this.props.title}</h1>
        <Menu />
      </header>
    );
  }
}



