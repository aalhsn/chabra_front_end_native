import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import { withNavigation } from "react-navigation";


import wallpaper from "../../assets/wall.png";
import logo from "../../assets/chabraLogo.png";

import { ImageBackground, Image } from "react-native"
import GradientButton from 'react-native-gradient-buttons';

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header,
  Icon

} from "native-base";

class Signup extends Component {
  componentDidMount = () => {
    this.props.checkForToken();
  };
  static navigationOptions = ({ navigation }) => {

    return {
      header: null,
    };
  };
  state = {
    username: "",
    password: ""
  };

  render() {
    if (this.props.user) {
      this.props.navigation.navigate("Homepage");
    }
    return (

      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <Header transparent />
          <Image source={logo} style={{
            width: "60%", height: "60%", textAlign: "center",
            alignSelf: "center"
          }}
          />

          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Body>
                <Form>
                  <Body>
                    {/* <Label style={{ color: "white" }}>Errors</Label> */}
                  </Body>
                  <Item
                    rounded
                    style={{ borderWidth: 15, borderColor: "#123dff", borderRadius: 40, backgroundColor: "white", marginTop: 10 }}
                  >
                    <Icon
                      style={{ fontSize: 30, marginLeft: 15 }}
                      name="user"
                      type="FontAwesome"
                    />

                    <Input
                      style={{ margin: 10, fontSize: 18, fontFamily: "Futura", backgroundColor: "transparent" }}
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={username => this.setState({ username })}
                      value={this.state.username}
                      placeholder="Username"

                    />
                  </Item>
                  <Body>
                    {/* <Label style={{ color: "white" }}>Errors</Label> */}
                  </Body>
                  <Item
                    rounded
                    style={{ borderWidth: 15, borderColor: "#123dff", borderRadius: 40, backgroundColor: "white", marginTop: 10 }}
                  >
                    <Icon
                      style={{ fontSize: 30, marginLeft: 15 }}
                      name="ios-lock"
                      type="Ionicons"
                    />
                    <Input
                      style={{ margin: 10, fontSize: 18, fontFamily: "Futura", backgroundColor: "transparent" }}
                      autoCorrect={false}
                      secureTextEntry
                      autoCapitalize="none"
                      placeholder="Password"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                </Form>
              </Body>
            </ListItem>

            <GradientButton radius={40} style={{
              width: 380, marginTop: 10, textAlign: "center",
              alignSelf: "center"
            }} onPressAction={() => this.props.signup(this.state, this.props.navigation)}
            >
              <Text style={{ color: "white", fontFamily: "Futura", fontSize: 22, }}>Register</Text>
            </GradientButton>

            <Button transparent
              onPress={() => this.props.navigation.navigate("LoginScreen")}
              style={{
                marginTop: 10, textAlign: "center",
                alignSelf: "center"
              }}>
              <Text style={{
                color: "#0d1a80", fontFamily: "Avenir", fontSize: 22,
              }}>Have an account? Login</Text>
            </Button>
          </List>
          <Body>
            <Label style={{ color: "red", opacity: 0.6 }} />
          </Body>
        </Content>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({
  signup: (userData, navigation) =>
    dispatch(actionCreators.signup(userData, navigation)),
  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation)),
});


export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
);
