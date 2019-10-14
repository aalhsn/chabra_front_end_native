
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";

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


    return <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <Header style={styles.transparent} />
      {/* {this.props.user ? logout() : login()} */}
      <AppContainer />

    </Container>
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
