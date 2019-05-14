import React, { Component } from "react";
import Header from "./Header/Header";

class App extends Component {
  constructor() {
		super();
    this.state = {
      logoTitle: "ReactApp"
    };
  }
  render() {
		const { logoTitle } = this.state;
    return (
      <>
        <Header logoTitle={logoTitle} logged/>
      </>
    );
  }
}

export default App;
