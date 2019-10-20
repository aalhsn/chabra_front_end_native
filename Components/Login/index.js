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



class Login extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      header: null,
    };
  };
  componentDidMount() {
    this.props.checkForToken();
  }

  state = {
    username: "",
    password: ""
  };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  render() {
    if (this.props.user) {
      return this.props.navigation.replace("ProfileScreen");
    }
    return (
      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <Header transparent />


          <Image source={logo} style={{
            width: "70%", height: "70%", textAlign: "center",
            alignSelf: "center"
          }}
          />
          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Body>
                <Form>
                  <Body>

                    {/* <Label style={{ color: "white" }}>
                    {" "}
                    //add the errors here{" "}
                  </Label> */}

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
                      placeholder="Username"
                      onChangeText={username => this.setState({ username })}
                      value={this.state.username}
                    />
                  </Item>
                  <Body>
                    {/* <Label style={{ color: "white" }}>
                    //add the errors here{" "}
                  </Label> */}
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
                    <Input style={{ margin: 10, fontSize: 18, fontFamily: "Futura" }}
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                </Form>
              </Body>
            </ListItem>
            <GradientButton radius={40} style={{
              width: 380, marginTop: 10, textAlign: "center",
              alignSelf: "center"
            }} onPressAction={() => this.props.login(this.state, this.props.navigation)}
            >
              <Text style={{ color: "white", fontFamily: "Futura", fontSize: 22, }}>Login</Text>
            </GradientButton>

            <Button transparent
              onPress={() => this.props.navigation.navigate("SignupScreen")}
              style={{
                marginTop: 10, textAlign: "center",
                alignSelf: "center"
              }}>
              <Text style={{
                color: "#0d1a80", fontFamily: "Avenir", fontSize: 22,
              }}>New user? Sign up</Text>
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
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
