import React, { Component } from "react";

import {
    Text, Body, CardItem, Content, Button, Thumbnail
} from "native-base";
import { ImageBackground, View } from "react-native";

class SideBar extends Component {

    render() {
        return (
            <>
                <Content style={{ backgroundColor: "white" }}>
                    <Text> First option </Text>

                </Content>

            </>
        )
    }

}

export default SideBar;