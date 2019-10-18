import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles"

class SideMenuButton extends Component {
    render() {
        return (
            <Icon
                onPress={() => this.props.navigation.push("SideMenuScreen")}
                name="menu"
                type="Feather"
                style={styles.icon}
            />
        );
    }
}

export default withNavigation(SideMenuButton);
