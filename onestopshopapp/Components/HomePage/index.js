import React, { Component } from "react";
import { Text, View } from "native-base";

class HomePage extends Component {
  render() {
    if (!this.props.user) {
      this.props.navigation.replace("Login");
    }
    return (
      <View>
        <Text>TEST PAGE</Text>
      </View>
    );
  }
}

export default HomePage;
