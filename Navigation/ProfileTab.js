import React, { Component } from "react";
import { Icon } from "native-base";

//Temp for testing
import OrderDetails from "../Components/OrderDetails";
import Drawer from '../Components/Drawer'

// Components:
import Profile from "../Components/Profile";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import OrderSum from "../Components/SummaryOrder"
import OrderList from '../Components/OrderHistory'

import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        ProfileScreen: Profile,
        SideMenuScreen: Drawer, //temp for testing
        LoginScreen: Login,
        OrderListScreen: OrderList,
        OrderDetailScreen: OrderDetails, //temp for testing
        SignupScreen: Signup,
        SummaryScreen: OrderSum,


    },

    {
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon type="FontAwesome" name="user" size={20} />,
            headerStyle: {
                backgroundColor: "#3dffcb",
                fontWeight: 'bold',
            }
        }
    }
);

export default ProfileTab;