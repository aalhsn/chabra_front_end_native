import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import Homepage from "../Components/HomePage";
import Register from "../Components/Signup"
import ProductsList from "../Components/ProductsList";

const StackNav = createStackNavigator(
  {
    Login: Login,
    Homepage: Homepage,
    Register: Register,
    ListScreen: ProductsList,
  },
  {
    initialRouteName: "HomePage",
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
      headerTintColor: "rgb(20,90,100)"
    }
  }
);

export default StackNav;
