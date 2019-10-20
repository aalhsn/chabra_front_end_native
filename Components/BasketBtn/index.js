import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles"

class ShoppingCartBtn extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("ShoppingBasketScreen")}
        name="shopping-basket"
        type="FontAwesome"
        style={styles.icon}

      />
    );
  }
}

export default withNavigation(ShoppingCartBtn);
