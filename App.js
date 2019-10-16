import React, { Component } from "react";
import { Spinner } from "native-base";
import { Provider } from "react-redux";
import * as Font from "expo-font";

// Store
import store from "./redux";
import HomePage from "./Components/HomePage";
import { fetchProducts, checkForExpiredToken } from "./redux/actions";
store.dispatch(fetchProducts());
store.dispatch(checkForExpiredToken());
class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
