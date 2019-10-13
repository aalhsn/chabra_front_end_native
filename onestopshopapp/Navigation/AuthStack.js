import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import Homepage from "../Components/Homepage";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Homepage: Homepage,
    Register: Register
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
