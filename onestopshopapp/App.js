import React, { Component } from "react";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";

// Store
import store from "./redux";

class App extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
