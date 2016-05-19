import React from "react";

// ACTIONS
import * as LayoutActions from "../actions/LayoutActions";

// COMPONENTS
import Header from "../components/layout/Header";
import Loading from "../components/layout/Loading";

export default class Layout extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      LayoutActions.toogleLoading();
    }, 3000);
  }

  render() {
    return (
      <div>
        <Loading/>
        <Header title="REACT + FLUX"/>
        {this.props.children}
      </div>
    );
  }
}
