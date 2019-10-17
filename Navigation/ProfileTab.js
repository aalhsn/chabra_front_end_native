import React, { Component } from "react";
import { Icon } from "native-base";

//Temp for testing
import OrderDetails from "../Components/OrderDetails";

// Components:
import Profile from "../Components/Profile";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import OrderSum from "../Components/SummaryOrder"
import OrderList from '../Components/OrderHistory'

import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        LoginScreen: Login,
        OrderListScreen:OrderList,
        OrderDetailScreen: OrderDetails, //temp for testing
        ProfileScreen: Profile,
        SignupScreen: Signup,
        SummaryScreen: OrderSum

    },

    {
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon type="FontAwesome" name="user" size={20} />
        }
    }
);

export default ProfileTab;