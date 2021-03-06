import React, { Component } from "react";
import { Icon } from "native-base";

// Components:
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile";

import Login from "../Components/Login";
import Signup from "../Components/Signup";
import OrderList from '../Components/OrderHistory'


import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        ProfileScreen: Profile,
        LoginScreen: Login,
        SignupScreen: Signup,
        EditProfileScreen: EditProfile,
        OrderListScreen: OrderList,



    },

    {
        initialRouteName: "ProfileScreen",
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