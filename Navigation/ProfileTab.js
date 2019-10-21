import React, { Component } from "react";
import { Icon } from "native-base";

//Temp for testing

import Drawer from '../Components/Drawer'

// Components:
import Profile from "../Components/Profile";
import Login from "../Components/Login";
import Signup from "../Components/Signup";


import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        ProfileScreen: Profile,
        SideMenuScreen: Drawer, //temp for testing
        LoginScreen: Login,
        SignupScreen: Signup,
        


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