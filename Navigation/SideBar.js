import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/authActions";
import { withNavigation } from "react-navigation";

import {
    Text, Body, CardItem, Content, Button, Thumbnail
} from "native-base";
import { ImageBackground, View } from "react-native";

class SideBar extends Component {

    render() {
        return (
            <>
                <Content style={{ backgroundColor: "#4d5254", opacity: 0.95 }}>

                    <View style={{ margin: 5 }}>


                        <Button onPress={() => this.props.navigation.navigate("OrderListScreen")} style={{ margin: 5 }} >
                            <Text>Order History</Text>
                        </Button>
                        <Button style={{ margin: 5 }}>
                            <Text>Edit Profile I don't work yet</Text>
                        </Button>

                        <Button danger onPress={this.props.logout} style={{ margin: 5 }}>
                            <Text>Logout</Text>
                        </Button>
                    </View>



                </Content>

            </>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreators.logout()),

    };
};


export default withNavigation((connect(null, mapDispatchToProps)(SideBar)));
