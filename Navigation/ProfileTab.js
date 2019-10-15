import React, { Component } from "react";
import { Icon } from "native-base";

import ProductsList from "../Components/ProductsList";
// import Profile from "../Components/Profile";

//Temp for testing
import OrderDetails from "../Components/OrderDetails";
import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        OrderDetails: OrderDetails,
        // Profile: Profile,
        // ProductDetailScreen: ProductDetail
    },


    {
        // initialRouteName: "Profile",
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon type="FontAwesome" name="user" size={20} />
        }
    }
);

export default ProfileTab;