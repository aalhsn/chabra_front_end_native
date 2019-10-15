import React, { Component } from "react";
import { Icon } from "native-base";

import ProductsList from "../Components/ProductsList";
// import Profile from "../Components/Profile";

import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        ProductsListScreen: ProductsList,
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