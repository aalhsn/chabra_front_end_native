import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/authActions";
import { withNavigation } from "react-navigation";

import {
    Text, Body, CardItem, Content, Button, Thumbnail, Icon
} from "native-base";
import { View } from "react-native";
import styles from "./styles";


class SideBar extends Component {

    render() {
        return (
            <>
                <Content style={{ backgroundColor: "#4d5254", opacity: 0.95 }}>

                    <View style={{ margin: 5 }}>


                        <Button transparent onPress={() => this.props.navigation.navigate("OrderListScreen")} style={{ margin: 5 }} >
                            <Text style={{ color: "white" }}> Order History</Text>
                        </Button>
                        <Button transparent style={{ margin: 5 }}>
                            <Text>Edit Profile I don't work yet</Text>
                        </Button>

                        <Button transparent onPress={this.props.logout} >
                            <View >


                                <Text style={styles.menuBtn}>
                                    <Icon
                                        name="log-out"
                                        type="Feather"
                                        style={styles.icon2}
                                    />
                                    Logout</Text>
                            </View>

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
