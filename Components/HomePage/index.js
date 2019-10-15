
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import {
  View,
  ImageBackground
} from "react-native";

import wallpaper from "../../assets/wall.png"


//NativeBase Components
import { Container, Header, Button, Text } from "native-base";

// Style
import styles from "./styles";

//ACTIONS
import { fetchProducts } from "../../redux/actions";
import AppContainer from "../../Navigation";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    // const logout = () => {
    //   return (
    //     <Button danger onPress={this.props.logout}>
    //       <Text>Logout</Text>
    //     </Button>
    //   );
    // };

    // const login = () => {
    //   return (


    //     <Button onPress={() => this.props.navigation.navigate("Login")}>
    //       <Text>Login</Text>
    //     </Button>
    //   );

    console.disableYellowBox = true; //disables ugly warnings

    return (
      <ImageBackground source={wallpaper} style={{ width: '100%', height: '100%' }}>
        <Container >
          <View />
          {/* {this.props.user ? logout() : login()} */}
          <AppContainer />

        </Container>
      </ImageBackground>

    )

  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  logout: () => dispatch(actionCreators.logout()),


  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))


});

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
