import React, { Component } from "react";
import { Icon } from "native-base";

//Temp for testing
import OrderDetails from "../Components/OrderDetails";
import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
    {
        OrderDetails: OrderDetails,
    },

    {
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon type="FontAwesome" name="user" size={20} />
        }
    }
);

export default ProfileTab;