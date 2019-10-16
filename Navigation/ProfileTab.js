import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "native-base";

// import Profile from "../Components/Profile";

//Temp for testing
import OrderDetails from "../Components/OrderDetails";

//Consistency in screen naming
//Define Login Screen
const ProfileTab = createStackNavigator(
  {
    OrderDetails: OrderDetails
    // Profile: Profile,
    // ProductDetailScreen: ProductDetail
  },

  {
    initialRouteName: "OrderDetails",
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => <Icon type="FontAwesome" name="user" size={20} />
    }
  }
);

export default ProfileTab;
