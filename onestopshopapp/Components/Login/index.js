import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/authActions";
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
  Header
} from "native-base";

class Login extends Component {
  componentDidMount = () => {
    this.props.checkForToken();
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
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            onPress={() => this.props.login(this.state, this.props.navigation)}
          >
            <Text>Login</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
