import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import { View } from "react-native";

//NativeBase Components
import { Container, Header, Button, Text } from "native-base";

// Style
import styles from "./styles";

//ACTIONS
import AppContainer from "../../Navigation";

class HomePage extends Component {
  render() {
    console.disableYellowBox = true; //disables ugly warnings

    return (
      <Container>
        <View />
        <AppContainer />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
