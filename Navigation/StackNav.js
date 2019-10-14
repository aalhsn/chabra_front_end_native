import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import Homepage from "../Components/HomePage";
import Register from "../Components/Signup";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";

const StackNav = createStackNavigator(
  {
    Login: Login,
    Homepage: Homepage,
    Register: Register,
    ListScreen: ProductsList,
    DetailScreen: ProductDetail
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
      headerTintColor: "white"
    }
  }
);

export default StackNav;
